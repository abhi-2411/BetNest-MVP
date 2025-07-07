import WalletCard from '../components/WalletCard';
import PerformanceGraph from '../components/PerformanceGraph';
import { useEffect, useState } from 'react';
import API from '../services/api';

const InvestorDashboard = () => {
  const [investments, setInvestments] = useState([]);
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get('/investor/95c94718-2b06-4fde-8548-9989f7e4c76b');
      setInvestments(res.data.investments);
      setReturns(res.data.payouts);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Investor Dashboard</h1>
      <WalletCard investments={investments} />
      <PerformanceGraph returns={returns} />
    </div>
  );
};

export default InvestorDashboard;
