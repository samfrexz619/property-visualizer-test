declare interface TowerData {
  id: string;
  desc: string;
  img: string;
  totalFloors: number;
  name: string;
  amenities: string[];
  units: number;
}

declare interface FloorUnit {
  id: string;
  floor: number;
  units: number;
  area: number;
  price: number;
  roomCount: number;
  amenities: string[];
}

declare interface FloorData {
  floor: number;
  towerData?: FloorUnit[];
}

declare interface UnitDetail {
  tower: string;
  floor: number;
}