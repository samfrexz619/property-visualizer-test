import FloorSection from '@/components/FloorSection'
import { floorBItems } from '@/data/towerData';
import React from 'react'

const TowerBPage: React.FC = () => {

  return (
    <>
      <FloorSection towerTitle="B" floorData={floorBItems} />
    </>
  )
}

export default TowerBPage