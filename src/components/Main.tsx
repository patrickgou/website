// components/Main.js
export default function Main() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Bem-vindo ao Meu Site!</h1>
          <p className="mt-2">Aqui está um exemplo de componente principal em Next.js</p>
        </div>
      </header>

      {/* Seções */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center">O que fazemos</h2>
          <p className="mt-4 text-center text-lg">
            Trabalhamos para proporcionar as melhores soluções em tecnologia e design.
            Nosso foco é sempre oferecer a melhor experiência para nossos usuários.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center">Nossa Equipe</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">João Silva</h3>
              <p className="mt-2 text-gray-600">Desenvolvedor Frontend</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Maria Oliveira</h3>
              <p className="mt-2 text-gray-600">Designer de UI/UX</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Carlos Souza</h3>
              <p className="mt-2 text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
