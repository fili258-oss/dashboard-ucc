import { useTranslation } from 'react-i18next';

import {
  FaHouse,
  FaCartShopping,
  FaChartSimple,
  FaGaugeHigh,
  FaUser,
  FaLock,
  
} from 'react-icons/fa6';

type NavItemType = {
  id: number;
  title: string;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (navItem: number): NavbarType => {
  const { t } = useTranslation();
  return {


  logo: {
    title: 'HORIZON FREE',
  },
  nav: [
    {
      id: 1,
      title: t('navbarDashboard'),
      icon: (
        <FaHouse
          className={navItem === 1 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/',
    },
    {
      id: 2,
      title: t('navbarMarketplace'),
      icon: (
        <FaCartShopping
          className={navItem === 2 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/marketplace',
    },
    {
      id: 3,
      title: t('navbarTables'),
      icon: (
        <FaChartSimple
          className={navItem === 3 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/tables',
    },
    {
      id: 4,
      title: t('navbarKanban'),
      icon: (
        <FaGaugeHigh
          className={navItem === 4 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/kanban',
    },
    {
      id: 5,
      title: t('navbarProfile'),
      icon: (
        <FaUser
          className={navItem === 5 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/profile',
    },
    {
      id: 6,
      title: t('navbarSigin'),
      icon: (
        <FaLock
          className={navItem === 6 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/signIn',
    },
  ],
}
};

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];
