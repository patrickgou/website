import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function NavBar() {
  const router = useRouter()
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Marca ou logotipo */}
          <div className="flex items-center">
            <Link href="/" className="text-lg font-semibold">
              Minha Marca
            </Link>
          </div>

          {/* Links de navegação */}
          <div className="hidden md:flex space-x-4">
          <Link href="/">
              <button  onClick={() => router.push('/login')}className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 mt-2 px-4 rounded">
                Home
              </button>
            </Link>
            <Link href="/">
              <button onClick={() => router.push('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 mt-2 px-4 rounded">
                about
              </button>
            </Link>
            <Link href="/"> 
            <button onClick={() => router.push('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 mt-2 px-4 rounded">
              Serviços
              </button>
            </Link>
            <Link href="/">
            <button onClick={() => router.push('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 mt-2 px-4 rounded">
             Contato
              </button>
            </Link>
            <Link href="/">
              <button onClick={() => router.push('/login')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 mt-2 px-4 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
