import React from 'react';
import { Link } from 'react-router-dom';

interface TowerCardProps {
  item: TowerData;
}

const TowerCard: React.FC<TowerCardProps> = ({ item }) => {
  return (
    <Link to={item.id} className='w-full block h-[440px] bg-white shadow-sm rounded-xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl '>
      <div className='w-full relative rounded-t-2xl overflow-hidden group-hover:shadow-2xl'>
        <img src={item.img} alt="tower a" className='object-cover h-[250px] w-full group-hover:scale-110 transition-transform duration-500' />
        <div className='absolute  flex items-center justify-center inset-0 hover:bg-black/50 rounded-t-xl group-hover:shadow-xl  transition duration-200'>
          <p className='text-yellow-10 font-bold text-2xl'>{item.totalFloors} Floors</p>
        </div>
      </div>

      <div className='p-3 space-y-2'>
        <h3 className='capitalize font-bold text-2xl text-green-600'>{item.name}</h3>
        <p className='text-14 text-red-500'>{item?.units} units</p>
        <p className='text-14'>{item.desc}</p>
      </div>
    </Link>
  );
}

export default TowerCard;
