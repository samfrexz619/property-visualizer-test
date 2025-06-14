import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  towerTitle: string;
  floorData: FloorData[];
}

const FloorSection: React.FC<Props> = ({ towerTitle, floorData }) => {

  // const numOfFloors = Array.from({ length: 15 }, (_, i) => 15 - i);

  const navigate = useNavigate();

  return (
    <section>
      <div className='w-full flex mb-10 items-center'>
        <button onClick={() => navigate(-1)} className='cursor-pointer'>
          {'<'} Back
        </button>
        <h2 className='flex-1 text-center text-3xl font-bold'>Welcome to Tower {towerTitle}</h2>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5'>
        {
          floorData.map(floor => (
            <Link to={`${floor.floor}`} key={floor.floor} className='w-full flex cursor-pointer flex-col items-center justify-center border border-grey-10 h-[120px] rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-106'>
              <h3 className='font-bold text-18'>Floor {floor.floor}</h3>
              <p className='text-14'>4 Units</p>
            </Link>
          ))
        }
      </div>
    </section>
  );
}

export default FloorSection;
