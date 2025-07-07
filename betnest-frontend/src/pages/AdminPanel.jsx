import { useEffect, useState } from 'react';
import API from '../services/api';
import UserTable from '../components/UserTable';

const AdminPanel = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get('/admin/dashboard');
      setSummary(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {summary && (
        <>
          <div className="mb-4">
            <p>Users: {JSON.stringify(summary.userSummary)}</p>
            <p>Total Capital: ₹{summary.totalCapital}</p>
            <p>Pending Requests: {summary.pendingCount}</p>
          </div>
          <UserTable />
        </>
      )}
    </div>
  );
};

export default AdminPanel;
