import { joinRoom } from 'trystero/nostr';

export function createRoom({
  appId = 'flffkaos-web-art-ocean',
  roomId = 'beach-v1',
  password,
  onJoin,
  onLeave,
  onState,
  onEvent,
  onStatus,
} = {}) {
  let room = null;
  let action = null;
  let eventAction = null;
  let retryTimer = null;
  let retry = 0;
  let lastStart = 0;
  const peers = new Map();

  function teardown() {
    try { room?.leave(); } catch (e) {}
    room = null;
    action = null;
    eventAction = null;
  }

  function start(force) {
    const now = Date.now();
    if (!force && now - lastStart < 3000) return;
    lastStart = now;
    teardown();
    try {
      room = joinRoom({ appId, password }, roomId);
      action = room.makeAction('st');
      action.onMessage = (data, ctx) => {
        const id = ctx && ctx.peerId;
        if (!id) return;
        peers.set(id, Date.now());
        onState?.(id, data);
      };
      eventAction = room.makeAction('ev');
      eventAction.onMessage = (data, ctx) => {
        onEvent?.(data, ctx && ctx.peerId);
      };
      room.onPeerJoin = (id) => { peers.set(id, Date.now()); onStatus?.('online', peers.size); onJoin?.(id); };
      room.onPeerLeave = (id) => { peers.delete(id); onStatus?.('online', peers.size); onLeave?.(id); };
      retry = 0;
      onStatus?.('online', peers.size);
    } catch (e) {
      try { console.error('[presence] joinRoom failed:', e && (e.stack || e.message || e)); } catch (err) {}
      onStatus?.('offline', peers.size);
      scheduleRetry();
    }
  }

  function scheduleRetry() {
    if (retryTimer) return;
    retry++;
    retryTimer = setTimeout(() => { retryTimer = null; start(true); }, Math.min(30000, 1500 * retry));
  }

  const api = {
    send(state) {
      if (!action) return;
      try { action.send(state); } catch (e) { onStatus?.('offline', peers.size); scheduleRetry(); }
    },
    emit(data) {
      if (!eventAction) return;
      try { eventAction.send(data); } catch (e) {}
    },
    restart() { start(true); },
    leave() { teardown(); clearTimeout(retryTimer); retryTimer = null; },
    get size() { return peers.size; },
  };

  start(true);

  addEventListener('online', () => start(false));
  addEventListener('offline', () => onStatus?.('offline', peers.size));
  addEventListener('visibilitychange', () => { if (!document.hidden) start(false); });

  return api;
}
