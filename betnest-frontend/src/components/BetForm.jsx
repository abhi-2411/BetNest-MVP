import { useState } from 'react';
import API from '../services/api';

const BetForm = () => {
  const [form, setForm] = useState({ description: '', stake: '', odds: '', result: 'pending' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    await API.post('/bets', {
      ...form,
      better_id: 'your-better-id'
    });
    alert('Bet Submitted');
    setForm({ description: '', stake: '', odds: '', result: 'pending' });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Match Description"
        className="border w-full p-2 rounded"
      />
      <input
        name="stake"
        value={form.stake}
        onChange={handleChange}
        type="number"
        placeholder="Stake"
        className="border w-full p-2 rounded"
      />
      <input
        name="odds"
        value={form.odds}
        onChange={handleChange}
        type="number"
        placeholder="Odds"
        className="border w-full p-2 rounded"
      />
      <select name="result" value={form.result} onChange={handleChange} className="border p-2 rounded w-full">
        <option value="pending">Pending</option>
        <option value="win">Win</option>
        <option value="loss">Loss</option>
      </select>
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Bet
      </button>
    </div>
  );
};

export default BetForm;
