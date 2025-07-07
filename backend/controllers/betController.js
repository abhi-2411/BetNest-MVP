import { supabase } from '../config/supabaseClient.js';

const calculatePayout = (stake, odds, result) => {
  if (result === 'win') return stake * odds;
  if (result === 'loss') return 0;
  return null; // pending
};

export const submitBet = async (req, res) => {
  const { better_id, description, stake, odds, result } = req.body;
  const payout = calculatePayout(stake, odds, result);

  const { error } = await supabase.from('bets').insert([
    {
      better_id,
      description,
      stake,
      result,
      payout
    }
  ]);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'Bet submitted successfully' });
};

export const getBetsByBetter = async (req, res) => {
  const { betterId } = req.params;

  const { data, error } = await supabase
    .from('bets')
    .select('*')
    .eq('better_id', betterId);

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};
