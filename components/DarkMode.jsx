 'use client';
import { useEffect, useState } from 'react';

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-0 py-1 md:px-4 md:py-2 bg-purple-200 dark:border-purple-50 border-1 dark:bg-gray-800 text-black dark:text-white rounded "
    >
      {dark ? '🌙Dark ' : '☀️Light'}
    </button>
  );
}
