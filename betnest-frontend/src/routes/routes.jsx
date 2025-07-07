import InvestorDashboard from '../pages/InvestorDashboard';
import BetterDashboard from '../pages/BetterDashboard';
import AdminPanel from '../pages/AdminPanel';

export const getRouteByRole = (role) => {
  switch (role) {
    case 'investor':
      return <InvestorDashboard />;
    case 'better':
      return <BetterDashboard />;
    case 'admin':
      return <AdminPanel />;
    default:
      return <div>Not Authorized</div>;
  }
};
