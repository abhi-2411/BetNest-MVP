import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  const { email, full_name, role } = req.body;

  // Simulate user creation without password
  const token = jwt.sign({ email, full_name, role }, process.env.JWT_SECRET);
  return res.status(201).json({ message: 'Signup successful', token });
};

export const login = async (req, res) => {
  const { email, role } = req.body;

  // Simulate login by returning token (no actual auth yet)
  const token = jwt.sign({ email, role }, process.env.JWT_SECRET);
  return res.status(200).json({ message: 'Login successful', token });
};
