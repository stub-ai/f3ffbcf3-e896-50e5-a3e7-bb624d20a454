import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="mb-4 text-2xl">Welcome to the Product Manager&apos;s Website</h1>
        <p>This website is dedicated to showcasing the work of our product manager. Here you can find information about the products they manage and their achievements.</p>
      </main>
    </div>
  );
}