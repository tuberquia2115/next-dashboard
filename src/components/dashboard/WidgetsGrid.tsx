'use client';
import { IoStorefront, IoStorefrontOutline } from 'react-icons/io5';

import { useAppSelector } from '@/store';
import { SimpleWidget } from '..';

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget
        title={`${count}`}
        subTitle="Productos Agregados"
        label="Store"
        href="/dashboard/counter"
        icon={<IoStorefront size={70} className="text-blue-600" />}
      />
      <SimpleWidget
        title={`${count}`}
        subTitle="Productos Agregados"
        label="Store"
        href="/dashboard/counter"
        icon={<IoStorefrontOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
