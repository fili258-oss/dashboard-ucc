// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Dashboard from './Dashboard';
import Marketplace from './Marketplace';
import Tables from './Tables';
import Kanban from './Kanban';
import Profile from './Profile';
import SignIn from './SignIn';
import NotFound from './NotFound';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[60px_1fr_50px]'>
        <header className='bg-yellow-300'>
          <p>header</p>
        </header>
        <section className='bg-red-300'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/tables' element={<Tables />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
        <footer className='bg-green-300'>
          <p>footer</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
