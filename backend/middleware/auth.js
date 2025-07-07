export const isInvestor = (req, res, next) => {
    const role = req.headers.role;
    if (role === 'investor') return next();
    return res.status(403).json({ message: 'Access restricted to Investors only' });
  };
  
  export const isBetter = (req, res, next) => {
    const role = req.headers.role;
    if (role === 'better') return next();
    return res.status(403).json({ message: 'Access restricted to Betters only' });
  };
  
  export const isAdmin = (req, res, next) => {
    const role = req.headers.role;
    if (role === 'admin') return next();
    return res.status(403).json({ message: 'Access restricted to Admins only' });
  };
  