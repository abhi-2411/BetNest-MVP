import { supabase } from '../config/supabaseClient.js';

export const requestCapital = async (req, res) => {
  const { better_id, amount } = req.body;

  const { error } = await supabase
    .from('capital_requests')
    .insert([{ better_id, amount_requested: amount, status: 'pending' }]);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'Capital request submitted successfully' });
};
