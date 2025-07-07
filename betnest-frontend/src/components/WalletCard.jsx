const WalletCard = ({ investments }) => {
    const total = investments.reduce((sum, i) => sum + i.amount, 0);
    return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">Wallet Balance</h2>
        <p className="text-2xl mt-2">₹{total.toLocaleString()}</p>
      </div>
    );
  };
  
  export default WalletCard;
  