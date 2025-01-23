import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Marca */}
          <h2 className="text-lg font-semibold">Minha Marca</h2>

          {/* Redes Sociais */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="h-6 w-6 text-blue-500 hover:text-blue-700"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.99h-2.54V12h2.54V9.797c0-2.514 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="h-6 w-6 text-blue-400 hover:text-blue-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.839 9.839 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.196 4.917 4.917 0 00-8.384 4.482A13.94 13.94 0 011.671 3.15a4.917 4.917 0 001.523 6.574 4.903 4.903 0 01-2.228-.616v.06a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.917 4.917 0 004.6 3.417 9.867 9.867 0 01-6.1 2.104c-.396 0-.788-.023-1.176-.068a13.94 13.94 0 007.557 2.212c9.054 0 14.002-7.5 14.002-14.002 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.557z" />
              </svg>
            </a>
            {/* Adicione outros ícones conforme necessário */}
          </div>
        </div>
      </div>
    </footer>
  );
}

