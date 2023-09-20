// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Navbar from '../components/navbar';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[60px_1fr_50px]'>
        <header className='bg-yellow-300'>
          <p>header</p>
        </header>
        <section className='bg-red-300'>
          <p>content</p>
        </section>
        <footer className='bg-green-300'>
          <p>footer</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
