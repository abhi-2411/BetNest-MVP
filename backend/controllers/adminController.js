import { supabase } from '../config/supabaseClient.js';

export const triggerPayout = async (req, res) => {
  const { investment_id, amount } = req.body;

  const { error } = await supabase.from('payouts').insert([
    {
      investment_id,
      amount,
      type: 'profit'
    }
  ]);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'Payout successfully triggered' });
};

export const adminDashboard = async (req, res) => {
  const [users, capital, pending] = await Promise.all([
    supabase.from('users').select('role'),
    supabase.from('investments').select('amount'),
    supabase.from('capital_requests').select('status').eq('status', 'pending')
  ]);

  if (users.error || capital.error || pending.error) {
    return res.status(500).json({
      error: users.error?.message || capital.error?.message || pending.error?.message
    });
  }

  const userSummary = users.data.reduce((acc, curr) => {
    acc[curr.role] = (acc[curr.role] || 0) + 1;
    return acc;
  }, {});

  const totalCapital = capital.data.reduce((sum, row) => sum + row.amount, 0);
  const pendingCount = pending.data.length;

  res.json({ userSummary, totalCapital, pendingCount });
};
