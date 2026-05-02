'use strict';

const tcb = require('@cloudbase/node-sdk');

const app = tcb.init({ env: tcb.SYMBOL_CURRENT_ENV });
const db = app.database();

function generateUid() {
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).substring(2, 8);
  return ts + rnd;
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

exports.main = async (event, context) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(), body: '' };
  }

  const action = (event.queryStringParameters && event.queryStringParameters.action) || '';

  try {
    switch (action) {
      case 'generateUid': {
        const uid = generateUid();
        await db.collection('user_states').add({
          data: {
            uid,
            data: null,
            createdAt: db.serverDate(),
            updatedAt: db.serverDate(),
          },
        });
        return {
          statusCode: 200,
          headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
          body: JSON.stringify({ uid }),
        };
      }

      case 'getState': {
        const uid = (event.queryStringParameters && event.queryStringParameters.uid) || '';
        if (!uid) {
          return {
            statusCode: 400,
            headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: 400, message: 'uid required' }),
          };
        }
        const res = await db.collection('user_states').where({ uid }).limit(1).get();
        const doc = res.data[0];
        return {
          statusCode: 200,
          headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: doc ? doc.data : null,
            updatedAt: doc ? doc.updatedAt : null,
          }),
        };
      }

      case 'saveState': {
        let body = {};
        try {
          body = JSON.parse(event.body || '{}');
        } catch (e) {
          return {
            statusCode: 400,
            headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: 400, message: 'invalid json body' }),
          };
        }
        const { uid, data } = body;
        if (!uid) {
          return {
            statusCode: 400,
            headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: 400, message: 'uid required' }),
          };
        }

        const existing = await db.collection('user_states').where({ uid }).limit(1).get();
        if (existing.data.length > 0) {
          await db.collection('user_states').doc(existing.data[0]._id).update({
            data: {
              data,
              updatedAt: db.serverDate(),
            },
          });
        } else {
          await db.collection('user_states').add({
            data: {
              uid,
              data,
              createdAt: db.serverDate(),
              updatedAt: db.serverDate(),
            },
          });
        }
        return {
          statusCode: 200,
          headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
          body: JSON.stringify({ success: true }),
        };
      }

      default:
        return {
          statusCode: 404,
          headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: 404, message: 'unknown action: ' + action }),
        };
    }
  } catch (err) {
    console.error('API Error:', err);
    return {
      statusCode: 500,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 500, message: err.message }),
    };
  }
};
