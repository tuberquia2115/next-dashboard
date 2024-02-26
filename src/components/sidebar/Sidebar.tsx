import {
  IoBrowsersOutline,
  IoCalculator,
  IoCodeWorkingOutline,
  IoFootball,
  IoHeartOutline,
} from 'react-icons/io5';

import Image from 'next/image';
import avatarUser from '../../../public/avatar.jpeg';
import { SidebarMenuItem } from '..';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización de estadisticas',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Generación estática',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} className="text-red-500" />,
    title: 'Favoritos',
    subTitle: 'Global State',
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoCodeWorkingOutline className="mr-2" />
          <span>Tuber</span>
          <span className="text-blue-500">.Code</span>
        </h1>
        <p className="text-slate-500 text-sm">Desarrollo de paginas y aplicaciones web</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              className="rounded-full w-8 h-8"
              src={avatarUser}
              alt="User avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Manuel Tuberquia</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
