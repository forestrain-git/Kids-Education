const CloudSync = (function () {
  const BASE = 'https://kids-education-d8gak4uog7d6f09fa.service.tcloudbase.com/api';

  async function generateUid() {
    try {
      const res = await fetch(BASE + '?action=generateUid', { method: 'POST' });
      if (!res.ok) return null;
      const json = await res.json();
      return json && json.uid ? json : null;
    } catch (e) {
      return null;
    }
  }

  async function getState(uid) {
    try {
      const res = await fetch(BASE + '?action=getState&uid=' + encodeURIComponent(uid));
      if (!res.ok) return null;
      const json = await res.json();
      return json || null;
    } catch (e) {
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
      if (!res.ok) return false;
      const json = await res.json();
      return !!(json && json.success);
    } catch (e) {
      return false;
    }
  }

  return { generateUid, getState, saveState };
})();
