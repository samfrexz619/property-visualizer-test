import React from 'react';
import FloorSection from '@/components/FloorSection'
import { floorCItems } from '@/data/towerData';

const TowerCPage: React.FC = () => {

  return (
    <>
      <FloorSection towerTitle="C" floorData={floorCItems} />

    </>
  )
}

export default TowerCPage