// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <div className='grid grid-rows-[60px_1fr_50px] w-screen h-screen bg-gray-700 font-roboto'>
      <header className='order-3 bg-yellow-300 sm:order-1'>
        <p>header</p>
      </header>

      <main className='grid grid-rows-2 sm:grid-cols-[20%_1fr] sm:grid-rows-none order-2'>
        <section className='bg-blue-300'>
          <p>menu</p>
        </section>
        <section className='bg-red-300'>
          <p>content</p>
        </section>
      </main>

      <footer className='order-1 bg-green-300 sm:order-3'>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
