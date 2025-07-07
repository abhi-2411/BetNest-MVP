const PerformanceGraph = ({ returns }) => {
    const totalReturn = returns.reduce((sum, r) => sum + r.amount, 0);
  
    return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">Returns</h2>
        <p className="text-2xl mt-2 text-green-600">₹{totalReturn.toLocaleString()}</p>
      </div>
    );
  };
  
  export default PerformanceGraph;
  