import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Minestagram';
  }, []);

  return (
    <div className="app bg-gray-background">
      <div className="mx-autoh max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}
