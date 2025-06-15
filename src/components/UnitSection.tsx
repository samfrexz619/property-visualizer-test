import React from 'react'
import UnitCard from './ui/UnitCard';
import { useNavigate } from 'react-router-dom';


interface Props {
  floorItems: FloorUnit[];
  unitDetail: UnitDetail
}
const UnitSection: React.FC<Props> = ({ floorItems, unitDetail }) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className='w-full flex mb-16 items-center'>
        <button onClick={() => navigate(-1)} className='cursor-pointer'>
          {'<'} Back
        </button>
        <h2 className='flex-1 text-center text-3xl font-bold'>Tower {unitDetail.tower} - Floor {unitDetail.floor}</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-10 w-full lg:w-[600px] mx-auto'>
        {
          floorItems?.map(unit => (
            <UnitCard key={unit.id} item={unit} />
          ))
        }
      </div>
    </section>
  )
}

export default UnitSection