const { CATALOG, CURRENCY, ENV } = require('../_paypal.js');

module.exports = (req, res) => {
  const clientId = process.env.PAYPAL_CLIENT_ID || '';
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ enabled: !!clientId, clientId, currency: CURRENCY, env: ENV, catalog: CATALOG });
};
