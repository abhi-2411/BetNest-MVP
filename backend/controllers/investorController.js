import { supabase } from '../config/supabaseClient.js';

// 🔹 GET investor stats by ID
export const getInvestorStats = async (req, res) => {
  const { id } = req.params;

  const { data: investments, error: invError } = await supabase
    .from('investments')
    .select('*')
    .eq('user_id', id);

  if (invError) {
    return res.status(500).json({ error: invError.message });
  }

  const investmentIds = investments.map(i => i.id);

  const { data: payouts, error: payError } = await supabase
    .from('payouts')
    .select('*')
    .in('investment_id', investmentIds);

  if (payError) {
    return res.status(500).json({ error: payError.message });
  }

  res.json({ investments, payouts });
};

// 🔹 POST create new investor (user + initial investment)
export const createInvestor = async (req, res) => {
  const { full_name, email, amount } = req.body;

  if (!full_name || !email || !amount) {
    return res.status(400).json({ message: 'Missing required fields: full_name, email, amount' });
  }

  // Step 1: Insert into users table
  const { data: user, error: userError } = await supabase
    .from('users')
    .insert([{ full_name, email, role: 'investor' }])
    .select()
    .single();

  if (userError) {
    console.error('Error inserting user:', userError);
    return res.status(500).json({ message: 'Error creating user', error: userError.message });
  }

  // Step 2: Insert into investments table
  const { data: investment, error: invError } = await supabase
    .from('investments')
    .insert([{ user_id: user.id, amount }])
    .select()
    .single();

  if (invError) {
    console.error('Error inserting investment:', invError);
    return res.status(500).json({ message: 'User created, but failed to create investment', error: invError.message });
  }

  return res.status(201).json({
    message: 'Investor created successfully',
    user,
    investment
  });
};
