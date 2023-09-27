import {
  FaHouse,
  FaCartShopping,
  FaChartSimple,
  FaGaugeHigh,
  FaUser,
  FaLock,
  FaFacebook,
} from 'react-icons/fa6';

export const DataNavbar = {
  logo: {
    title: 'HORIZON FREE',
  },
  nav: [
    {
      id: 1,
      title: 'Dashboard',
      icon: <FaHouse className='text-app-primary w-5 h-5' />,
      to: '/',
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      icon: <FaCartShopping className='w-5 h-5' />,
      to: '/marketplace',
    },
    {
      id: 3,
      title: 'Tables',
      icon: <FaChartSimple className='w-5 h-5' />,
      to: '/tables',
    },
    {
      id: 4,
      title: 'Kanban',
      icon: <FaGaugeHigh className='w-5 h-5' />,
      to: '/kanban',
    },
    {
      id: 5,
      title: 'Profile',
      icon: <FaUser className='w-5 h-5' />,
      to: '/profile',
    },
    {
      id: 6,
      title: 'Sign In',
      icon: <FaLock className='w-5 h-5' />,
      to: '/signIn',
    },
  ],
};

export const DataHeader = {
  title: 'NFT Marketplace',
  subTitle: 'Pages / NFT Marketplace',
};
