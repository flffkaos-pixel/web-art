import { joinRoom } from 'trystero/nostr';

export function createRoom({
  appId = 'flffkaos-web-art-ocean',
  roomId = 'beach-v1',
  password,
  onJoin,
  onLeave,
  onState,
  onStatus,
} = {}) {
  let room = null;
  let send = null;
  let retryTimer = null;
  let retry = 0;
  let lastStart = 0;
  const peers = new Map();

  function teardown() {
    try { room?.leave(); } catch (e) {}
    room = null;
    send = null;
  }

  function start(force) {
    const now = Date.now();
    if (!force && now - lastStart < 3000) return;
    lastStart = now;
    teardown();
    try {
      room = joinRoom({ appId, password }, roomId);
      const [sendState, getState] = room.makeAction('st');
      send = sendState;
      retry = 0;
      onStatus?.('online', peers.size);
      room.onPeerJoin((id) => { peers.set(id, now); onStatus?.('online', peers.size); onJoin?.(id); });
      room.onPeerLeave((id) => { peers.delete(id); onStatus?.('online', peers.size); onLeave?.(id); });
      getState((st, id) => { peers.set(id, Date.now()); onState?.(id, st); });
    } catch (e) {
      onStatus?.('offline', peers.size);
      scheduleRetry();
    }
  }

  function scheduleRetry() {
    if (retryTimer) return;
    retry++;
    retryTimer = setTimeout(() => {
      retryTimer = null;
      start(true);
    }, Math.min(30000, 1500 * retry));
  }

  const api = {
    send(state) {
      if (!send) return;
      try { send(state); } catch (e) { onStatus?.('offline', peers.size); scheduleRetry(); }
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
