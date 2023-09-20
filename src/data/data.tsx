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
      description: 'xxxx',
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      icon: <FaCartShopping className='w-5 h-5' />,
    },
    {
      id: 3,
      title: 'Tables',
      icon: <FaChartSimple className='w-5 h-5' />,
    },
    {
      id: 4,
      title: 'Kanban',
      icon: <FaGaugeHigh className='w-5 h-5' />,
    },
    {
      id: 5,
      title: 'Profile',
      icon: <FaUser className='w-5 h-5' />,
    },
    {
      id: 6,
      title: 'Sign In',
      icon: <FaLock className='w-5 h-5' />,
    },
    {
      id: 7,
      title: 'Facebook',
      icon: <FaFacebook className='w-5 h-5' />,
    },
  ],
};

export const DataHeader = {
  title: 'NFT Marketplace',
  subTitle: 'Pages / NFT Marketplace',
};
