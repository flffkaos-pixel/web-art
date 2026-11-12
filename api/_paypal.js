// PayPal helper + server-side price catalog (CommonJS for Vercel zero-config functions)

const ENV = process.env.PAYPAL_ENV === 'live' ? 'live' : 'sandbox';
const BASE = ENV === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';
const CURRENCY = process.env.PAYPAL_CURRENCY || 'USD';

// server-authoritative prices (USD); ids match the shop buttons
const CATALOG = {
  peony: { name: '모란 피오니', usd: '0.99' },
  ring: { name: '고리 링', usd: '1.29' },
  willow: { name: '버들 (금색)', usd: '1.79' },
  palm: { name: '야자수', usd: '1.49' },
  heart: { name: '하트', usd: '2.29' },
  double: { name: '이중 (2색)', usd: '1.49' },
  glitter: { name: '반짝 글리터', usd: '1.29' },
  crackle: { name: '파직 크래클', usd: '1.39' },
  crossette: { name: '크로제트 (4갈래)', usd: '1.69' },
  multibreak: { name: '다중 폭발', usd: '2.49' },
  sparkler: { name: '스파클러', usd: '0.79' },
  fountain: { name: '분수 폭죽', usd: '1.99' },
  night: { name: '밤으로 바꾸기', usd: '1.49' },
};

let tokenCache = { token: null, exp: 0 };

async function getAccessToken() {
  const now = Date.now();
  if (tokenCache.token && now < tokenCache.exp - 60000) return tokenCache.token;
  const id = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_SECRET;
  if (!id || !secret) throw new Error('PAYPAL_CLIENT_ID / PAYPAL_SECRET not configured');
  const auth = Buffer.from(id + ':' + secret).toString('base64');
  const r = await fetch(BASE + '/v1/oauth2/token', {
    method: 'POST',
    headers: { Authorization: 'Basic ' + auth, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials',
  });
  if (!r.ok) throw new Error('paypal auth failed: ' + r.status);
  const j = await r.json();
  tokenCache = { token: j.access_token, exp: now + (j.expires_in || 0) * 1000 };
  return j.access_token;
}

async function paypalFetch(path, method, token, body) {
  const r = await fetch(BASE + path, {
    method,
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error('paypal ' + path + ' failed: ' + r.status + ' ' + JSON.stringify(j));
  return j;
}

module.exports = { CATALOG, getAccessToken, paypalFetch, CURRENCY, ENV };
