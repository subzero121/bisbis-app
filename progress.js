
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const initialProgress = [
  { week: 'الأسبوع 1', weight: 90 },
  { week: 'الأسبوع 2', weight: 88.5 }
];

export default function ProgressTracker() {
  const [progress, setProgress] = useState(initialProgress);
  const [inputWeight, setInputWeight] = useState('');

  const addProgress = () => {
    if (!inputWeight) return;
    const weekNum = progress.length + 1;
    setProgress([...progress, { week: `الأسبوع ${weekNum}`, weight: parseFloat(inputWeight) }]);
    setInputWeight('');
  };

  const goalLoss = 1.5;

  return (
    <main style={{ direction: 'rtl', fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1>📊 تتبع الوزن والتقدم</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={inputWeight}
          onChange={(e) => setInputWeight(e.target.value)}
          placeholder="أدخلي وزنك الحالي"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={addProgress} style={{ padding: '8px' }}>إضافة</button>
      </div>
      <LineChart width={360} height={250} data={progress}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis domain={[60, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#007BFF" />
      </LineChart>
      <div style={{ marginTop: '20px' }}>
        <h3>تحليل التقدم:</h3>
        <ul>
          {progress.map((entry, idx) => {
            if (idx === 0) return null;
            const diff = progress[idx - 1].weight - entry.weight;
            const achieved = diff >= goalLoss;
            return (
              <li key={idx}>
                {entry.week}: خسرت {diff.toFixed(1)} كجم 
                <span style={{
                  marginRight: '10px',
                  color: achieved ? 'green' : diff > 0 ? 'orange' : 'red',
                  fontWeight: 'bold'
                }}>
                  {achieved ? '✅' : diff > 0 ? '🟡' : '❌'}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
