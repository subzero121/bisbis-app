import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ direction: 'rtl', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>مرحباً بك يا Bisbis 🌸</h1>
      <ul>
        <li><Link href="/meals">الوجبات اليومية</Link></li>
        <li><Link href="/workouts">التمارين اليومية</Link></li>
      </ul>
    </main>
  );
}
