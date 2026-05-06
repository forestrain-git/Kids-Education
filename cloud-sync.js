const CloudSync = (function () {
  const BASE = 'https://kids-education-d8gak4uog7d6f09fa-1419212374.ap-shanghai.app.tcloudbase.com/api';

  async function generateUid() {
    try {
      const res = await fetch(BASE + '?action=generateUid', { method: 'POST' });
      if (!res.ok) {
        console.error('[CloudSync] generateUid failed:', res.status, res.statusText);
        return null;
      }
      const json = await res.json();
      return json && json.uid ? json : null;
    } catch (e) {
      console.error('[CloudSync] generateUid error:', e.message);
      return null;
    }
  }

  async function getState(uid) {
    try {
      const res = await fetch(BASE + '?action=getState&uid=' + encodeURIComponent(uid));
      if (!res.ok) {
        console.error('[CloudSync] getState failed:', res.status, res.statusText);
        return null;
      }
      const json = await res.json();
      return json || null;
    } catch (e) {
      console.error('[CloudSync] getState error:', e.message);
      return null;
    }
  }

  async function saveState(uid, state) {
    try {
      const res = await fetch(BASE + '?action=saveState', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, data: state }),
      });
      if (!res.ok) {
        console.error('[CloudSync] saveState failed:', res.status, res.statusText);
        return false;
      }
      const json = await res.json();
      return !!(json && json.success);
    } catch (e) {
      console.error('[CloudSync] saveState error:', e.message);
      return false;
    }
  }

  return { generateUid, getState, saveState };
})();
