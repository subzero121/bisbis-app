
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ direction: 'rtl', fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#e6f2ff' }}>
      <h1 style={{ color: '#0077b6' }}>مرحباً بك يا Bisbis 💙</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href="/meals"><button>🥗 خطة الوجبات</button></Link></li>
        <li><Link href="/workouts"><button>🏋️‍♀️ خطة التمارين</button></Link></li>
      </ul>
    </main>
  );
}
