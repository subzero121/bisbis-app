
import { workouts } from './workoutsData';

export default function Workouts() {
  return (
    <main style={{ direction: 'rtl', fontFamily: 'sans-serif', backgroundColor: '#fff', padding: '20px' }}>
      <h1>🏋️‍♀️ تمارين 8 أسابيع</h1>
      {workouts.map((w, index) => (
        <div key={index} style={{ background: '#f9f9f9', marginBottom: '20px', padding: '10px', borderRadius: '10px' }}>
          <h2>الأسبوع {w.week} - {w.day}</h2>
          <p><strong>نوع التمرين:</strong> {w.type}</p>
          <p><strong>الجزء المستهدف:</strong> {w.target}</p>
          <p><strong>التكرارات:</strong> {w.reps}</p>
          <p><strong>السعرات:</strong> {w.calories} كالوري</p>
        </div>
      ))}
    </main>
  );
}
