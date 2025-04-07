
import { workouts } from '../data/workoutsData';

export default function Workouts() {
  return (
    <main style={{ direction: 'rtl', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🏋️‍♀️ خطة التمارين الكاملة</h1>
      {workouts.map((w, index) => (
        <div key={index} style={{ background: '#fff', margin: '10px 0', padding: '10px', borderRadius: '10px' }}>
          <h2>الأسبوع {w.week} - {w.day}</h2>
          <p><strong>التمرين:</strong> {w.name}</p>
          <p><strong>النوع:</strong> {w.type}</p>
          <p><strong>الجزء المستهدف:</strong> {w.target}</p>
          <p><strong>المدة:</strong> {w.duration}</p>
          <p><strong>التكرار:</strong> {w.sets}</p>
          <p><strong>السعرات:</strong> {w.calories} kcal</p>
        </div>
      ))}
    </main>
  );
}
