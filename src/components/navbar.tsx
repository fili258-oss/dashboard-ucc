import { DataNavbar } from '../data/data';

const Navbar = () => {
  const titleLogo = DataNavbar.logo.title.split(' ');

  return (
    <nav className='flex flex-col min-w-[290px] bg-app-white'>
      <h1 className='py-14 border-b text-center text-app-blue-dark text-[1.625rem] border-app-gray-100'>
        <span className='font-bold'>{titleLogo[0]}</span>
        <span className='ml-2 font-light'>{titleLogo[1]}</span>
      </h1>
      <ul className='flex flex-col gap-y-6 pt-10 pl-8'>
        {DataNavbar.nav.map((item, index) => (
          <li
            key={index}
            className='flex flex-row items-center text-app-gray-700'
          >
            {item.icon}
            <span className='ml-3 text-base font-medium text-app-gray-700'>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
