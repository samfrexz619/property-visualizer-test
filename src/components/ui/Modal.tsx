import React from 'react'


interface ModalProps {
  item: FloorUnit;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, close }) => {
  return (
    <div onClick={close} className='modal'>
      <div onClick={e => e.stopPropagation()} className='modal__body'>
        <h1 className='text-2xl font-bold'>Floor Plan -- Unit {item.units}</h1>
        <div className='w-full border-4 border-gray-500 mt-10 shadow-md'>
          <img src="https://housedesigner.com/wp-content/uploads/2023/11/2-5-min-optimized.png" alt="floor plan" className='w-full h-[400px] object-cover' />
        </div>
        <button onClick={close} className='absolute right-4 top-4 border px-1'>
          X
        </button>
        <div className='w-full mt-10 shadow-md rounded-xl bg-white py-4 px-2'>
          <h3 className='pb-4 font-bold'>Unit Details</h3>
          <ul className='space-y-2'>
            <li className='flex flex-col'>
              <span className='font-semibold'>Unit</span>
              <span>{item.units}</span>
            </li>
            <li className='flex flex-col'>
              <span className='font-semibold'>Area</span>
              <span>{item.area} square ft</span>
            </li>
            <li className='flex flex-col'>
              <span className='font-semibold'>Bedrooms</span>
              <span>{item.roomCount}</span>
            </li>
            <li className='flex flex-col'>
              <span className='font-semibold'>Rent per annum</span>
              <span>${item.price}</span>
            </li>
            <li className='w-full cursor-pointer bg-grey-10 rounded-xl py-2 text-center text-white'>
              Schedule Inspection
            </li>
          </ul>
        </div>

        <ul className='w-full my-10 shadow-md rounded-xl bg-white py-4 px-6 space-y-2'>
          <li className='font-semibold text-center text-xl'>Featured Amenities</li>
          {item.amenities.map(list => (
            <li key={list} className='list-disc'>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Modal