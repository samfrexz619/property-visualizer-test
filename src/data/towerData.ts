export const towerData: TowerData[] = [
  {
    id: '/tower-a',
    name: 'tower a',
    desc: 'Luxury living with panoramic city views and premium amenities',
    img: 'https://images.unsplash.com/photo-1636680463265-d0262f658956?w=900&auto=format&fit=crop',
    totalFloors: 15,
    amenities: [],
    units: 40
  },
  {
    id: '/tower-b',
    name: 'tower b',
    desc: 'Modern architecture with stunning harbor views and world-class facilities',
    img: 'https://images.unsplash.com/photo-1541884259727-0f93166d1fe4?w=900&auto=format&fit=crop',
    totalFloors: 12,
    amenities: [],
    units: 25
  },
  {
    id: '/tower-c',
    name: 'tower c',
    desc: 'Contemporary living spaces with breathtaking mountain views',
    img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
    totalFloors: 18,
    amenities: [],
    units: 72
  }
];


export const floorAItems = Array.from({ length: 15 }, (_, i) => {
  const floor = i + 1; // count down from 15

  return {
    towerData: Array.from({ length: 4 }, (_, i) => ({
      floor: i + 1,
      id: (i + 1).toString(),
      units: 1101 + i,
      area: 600,
      price: 2000,
      roomCount: 8,
      amenities: ['Power Backup', 'Garden View', 'Parking Space', 'Swimming Pool']
    })),
    floor,
  };
});

export const floorBItems = Array.from({ length: 13 }, (_, i) => {
  const floor = 13 - i;

  return {
    towerData: Array.from({ length: 4 }, (_, i) => ({
      floor: i + 1,
      id: (i + 1).toString(),
      units: 2101 + i,
      area: 700,
      price: 2500,
      roomCount: 3,
      amenities: ['Pet Park', 'Spa & Wellness', 'Parking Space', 'Rooftop Garden']
    })),
    floor,
  };
});

export const floorCItems = Array.from({ length: 11 }, (_, i) => {
  const floor = i + 1;

  return {
    towerData: Array.from({ length: 4 }, (_, i) => ({
      floor: i + 1,
      id: (i + 1).toString(),
      units: 3101 + i,
      area: 800,
      price: 3000,
      roomCount: 5,
      amenities: ['Private Cinema', 'Spa & Wellness', 'Parking Space', 'Rooftop Garden']
    })),
    floor,
  };
});