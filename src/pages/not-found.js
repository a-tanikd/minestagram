import { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Minestagram';
  }, []);

  return (
    <div className="app bg-gray-background">
      <Header />
      <div className="mx-autoh max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}
