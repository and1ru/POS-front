export const HomePage = () => {
  return (
    <>
      <header className="bg-gray-900 text-white">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold">
            BusinessManager
          </h1>
        </nav>
      </header>

      <main>
        <section className="min-h-[80vh] bg-gray-950 text-white flex flex-col justify-center items-center text-center px-5">
          <h2 className="text-5xl font-bold max-w-4xl leading-tight">
            Administra tu negocio de forma simple y profesional
          </h2>

          <p className="text-gray-400 text-xl max-w-2xl mt-6">
            Controla ventas, inventario, empleados y estadísticas
            desde una sola plataforma diseñada para empresas y
            negocios modernos.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-blue-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-500 duration-200">
              Empezar ahora
            </button>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-20 px-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Gestión de inventario
              </h3>

              <p className="text-gray-400">
                Administra productos, stock y precios en tiempo real
                desde cualquier sede.
              </p>
            </article>

            <article className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Control de ventas
              </h3>

              <p className="text-gray-400">
                Visualiza ventas diarias, mensuales y estadísticas
                detalladas para tomar mejores decisiones.
              </p>
            </article>

            <article className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Manejo de empleados
              </h3>

              <p className="text-gray-400">
                Gestiona trabajadores, roles y sedes de manera segura
                y organizada.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-400 text-center p-5">
        <p>
          © 2026 BusinessManager - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
};