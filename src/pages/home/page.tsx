import React, { useState } from 'react'
import { towerData } from '@/data/towerData';
import TowerCard from '@/components/ui/TowerCard';

const HomePage: React.FC = () => {

  const [data, setData] = useState(towerData)

  return (
    <>
      <section className='w-full text-center'>
        <h1 className='text-4xl font-bold pb-4'>Premium Towers</h1>
        <p className='text-18'>Discover premium luxury living in our exclusive residential and office space towers. Each floor offers</p>
        <p className='text-18'>unique layouts designed for modern urban lifestyle.</p>
      </section>
      <section className='mt-10'>
        <div className='w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {data.map(item => (
            <TowerCard key={item.id} item={item} />
          ))}
        </div>

      </section>
    </>
  )
}

export default HomePage