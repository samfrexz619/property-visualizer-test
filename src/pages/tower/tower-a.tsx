import React from 'react';
import FloorSection from '@/components/FloorSection'
import { floorAItems } from '@/data/towerData';



const TowerAPage: React.FC = () => {

  return (
    <>
      <FloorSection towerTitle="A" floorData={floorAItems} />
    </>
  )
}

export default TowerAPage