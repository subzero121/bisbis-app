
import { meals } from '../data/mealsData';

export default function Meals() {
  return (
    <main style={{ direction: 'rtl', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🍽️ خطة الوجبات الكاملة</h1>
      {meals.map((meal, index) => (
        <div key={index} style={{ background: '#fff', margin: '10px 0', padding: '10px', borderRadius: '10px' }}>
          <h2>الأسبوع {meal.week} - {meal.day}</h2>
          <p><strong>الفطور:</strong> {meal.breakfast}</p>
          <p><strong>سناك:</strong> {meal.snack}</p>
          <p><strong>العشاء:</strong> {meal.dinner}</p>
          <p><strong>المشروب:</strong> {meal.drink}</p>
          <p><strong>السعرات:</strong> {meal.calories} kcal | <strong>بروتين:</strong> {meal.protein}g | <strong>كربوهيدرات:</strong> {meal.carbs}g | <strong>دهون:</strong> {meal.fat}g</p>
        </div>
      ))}
    </main>
  );
}
