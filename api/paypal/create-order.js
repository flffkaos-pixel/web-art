const { CATALOG, getAccessToken, paypalFetch, CURRENCY } = require('../_paypal.js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  try {
    const itemId = (req.body && req.body.itemId) || '';
    const item = CATALOG[itemId];
    if (!item) return res.status(400).json({ error: 'unknown item' });
    const token = await getAccessToken();
    const order = await paypalFetch('/v2/checkout/orders', 'POST', token, {
      intent: 'CAPTURE',
      purchase_units: [{ amount: { currency_code: CURRENCY, value: item.usd }, description: item.name, custom_id: itemId }],
      application_context: { shipping_preference: 'NO_SHIPPING', user_action: 'PAY_NOW', brand_name: 'ABYSSAL Fireworks' },
    });
    res.status(200).json({ id: order.id });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
