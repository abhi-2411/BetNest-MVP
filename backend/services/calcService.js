// services/calcService.js
export const calculatePayout = (stake, odds, result) => {
    if (result === 'win') return stake * odds;
    if (result === 'loss') return 0;
    return null; // pending
  };
  