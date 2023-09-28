import { NavLink } from 'react-router-dom';

import { useNavbarStore } from '../store/navbarStore';

const Footer = () => {
  const { selectedItemNavbar } = useNavbarStore();

  return (
    <footer className='flex flex-row items-center justify-between px-8 text-sm text-app-gray-700 bg-app-background-main'>
      <span>
        © 2023 Horizon UI. All Rights Reserved. Made with love by Simmmple!
      </span>
      <ul className='flex gap-11'>
        <NavLink
          to='/marketplace'
          onClick={() => {
            selectedItemNavbar(2);
          }}
        >
          Marketplace
        </NavLink>
        <li>License</li>
        <li>Terms of Use</li>
        <li>Blog</li>
      </ul>
    </footer>
  );
};

export default Footer;
