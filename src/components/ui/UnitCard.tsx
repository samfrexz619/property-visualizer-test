import React, { useState } from 'react'
import Modal from './Modal';



interface UnitCardProps {
  item: FloorUnit;
};


const UnitCard: React.FC<UnitCardProps> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const handleMouseEnter = () => {
    document.body.style.backgroundColor = '#0000004d';
    document.body.style.transition = 'background-color 0.3s ease';
  }

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = ''; // Reset to default
  }

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onClick={handleModal} onMouseLeave={handleMouseLeave} className='w-full block h-[440px] bg-white shadow-sm rounded-xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl '>
        <div className='w-full relative rounded-t-2xl overflow-hidden'>
          <img src="https://housedesigner.com/wp-content/uploads/2023/11/2-5-min-optimized.png" alt="tower a" className='object-contain h-[250px] w-full group-hover:scale-104 transition-transform duration-500' />
          <div className='absolute  flex items-center justify-center inset-0 hover:bg-black/50 rounded-t-xl group-hover:shadow-xl  transition duration-200'>
            {/* <p className='text-yellow-10 font-bold text-2xl'> Floors</p> */}
          </div>
        </div>

        <div className='p-3 space-y-2'>
          <p className=' text-red-500'><span className='font-bold'>Units:</span>{item.units}</p>
          <p className=''><span className='font-bold'>Bedrooms:</span>{item.roomCount}</p>
          <p className=''><span className='font-bold'>Area:</span>{item.area}/sq meter</p>
          <p className=''><span className='font-bold'>$</span>{item.price}/per annum</p>
        </div>
        <button className='mt-2 px-3 cursor-pointer text-green-600'>View Layout</button>
      </div>
      {showModal && <Modal item={item} close={handleModal} />}
    </>
  )
}

export default UnitCard