const { CATALOG, CURRENCY, ENV } = require('../_paypal.js');

module.exports = (req, res) => {
  const clientId = (process.env.PAYPAL_CLIENT_ID || '').trim();
  const enabled = !!clientId && (process.env.PAYMENTS_ENABLED || '').trim() === '1';
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ enabled, hasCreds: !!clientId, clientId: enabled ? clientId : '', currency: CURRENCY, env: ENV, catalog: CATALOG });
};
