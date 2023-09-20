// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[60px_1fr_50px]'>
        <Header />
        <Content />
        <Footer />
      </section>
    </main>
  );
}

export default App;
