-- 1. Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT CHECK (role IN ('investor', 'better', 'admin')) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Investments Table (by Investors)
CREATE TABLE investments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount FLOAT NOT NULL,
  status TEXT CHECK (status IN ('active', 'withdrawn')) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Betters Table
CREATE TABLE betters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  total_allocated FLOAT DEFAULT 0,
  total_returned FLOAT DEFAULT 0,
  win_rate FLOAT DEFAULT 0,
  roi FLOAT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 4. Bets Table
CREATE TABLE bets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  better_id UUID REFERENCES betters(id) ON DELETE CASCADE,
  description TEXT,
  stake FLOAT NOT NULL,
  result TEXT CHECK (result IN ('win', 'loss', 'pending')) DEFAULT 'pending',
  payout FLOAT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 5. Payouts Table (for Investors)
CREATE TABLE payouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investment_id UUID REFERENCES investments(id) ON DELETE CASCADE,
  amount FLOAT NOT NULL,
  type TEXT CHECK (type IN ('profit', 'withdrawal')) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
