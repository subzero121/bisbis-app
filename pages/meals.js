
import { meals } from '../data/mealsData';

export default function Meals() {
  return (
    <main style={{ direction: 'rtl', fontFamily: 'sans-serif', backgroundColor: '#fff', padding: '20px' }}>
      <h1>🥗 وجبات 8 أسابيع</h1>
      {meals.map((meal, index) => (
        <div key={index} style={{ background: '#f9f9f9', marginBottom: '20px', padding: '10px', borderRadius: '10px' }}>
          <h2>الأسبوع {meal.week} - {meal.day}</h2>
          <p><strong>الفطور:</strong> {meal.breakfast}</p>
          <p><strong>السناك:</strong> {meal.snack}</p>
          <p><strong>العشاء:</strong> {meal.dinner}</p>
          <p><strong>السعرات:</strong> {meal.totalCalories} كالوري</p>
        </div>
      ))}
    </main>
  );
}
