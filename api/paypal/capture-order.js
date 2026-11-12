const { getAccessToken, paypalFetch } = require('../_paypal.js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  try {
    const orderId = (req.body && req.body.orderId) || '';
    if (!orderId) return res.status(400).json({ error: 'missing orderId' });
    const token = await getAccessToken();
    const cap = await paypalFetch('/v2/checkout/orders/' + encodeURIComponent(orderId) + '/capture', 'POST', token, {});
    const pu = (cap.purchase_units && cap.purchase_units[0]) || {};
    const captures = (pu.payments && pu.payments.captures) || [];
    const itemId = (captures[0] && captures[0].custom_id) || pu.custom_id;
    if (cap.status === 'COMPLETED') res.status(200).json({ ok: true, itemId });
    else res.status(202).json({ ok: false, status: cap.status });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
