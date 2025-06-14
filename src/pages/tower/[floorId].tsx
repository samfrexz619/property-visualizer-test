import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UnitSection from '@/components/UnitSection';
import { floorAItems, floorBItems, floorCItems } from '@/data/towerData';

const TowerFloorAPage: React.FC = () => {
  const { floorId } = useParams();
  const location = useLocation();
  const towerKey = location.pathname.split('/')[1];

  let floorItems;
  let tower;

  switch (towerKey) {
    case 'tower-a':
      tower = 'A';
      floorItems = floorAItems.find(item => item?.floor === Number(floorId!));
      break;
    case 'tower-b':
      tower = 'B';
      floorItems = floorBItems.find(item => item?.floor === Number(floorId!));
      break;
    case 'tower-c':
      tower = 'C';
      floorItems = floorCItems.find(item => item?.floor === Number(floorId!));
      break;

    default:
      floorItems = null;
  }

  if (!floorItems) {
    <div className='text-red-500'>Invalid floor or tower</div>
  };

  const unitDetail = {
    tower: tower!,
    floor: floorItems?.floor!,
  }
  console.log(floorItems?.towerData)
  return (
    <UnitSection floorItems={floorItems?.towerData!} unitDetail={unitDetail} />
  )
}

export default TowerFloorAPage