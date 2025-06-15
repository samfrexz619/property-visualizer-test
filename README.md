# 🏙️ Mini Real Estate Floor Selector

An interactive React prototype that allows users to explore real estate towers, browse floors, and preview apartment layouts. This is a simplified demo built with TypeScript and styled using Tailwind CSS.

---

## ✨ Features

- **Tower Overview Page**  
  Displays 3 clickable towers (Tower A, B, C) for users to choose from.

- **Floor Selector**  
  Once a tower is selected, a list of 10–15 floors appears.

- **Apartment Layouts**  
  Selecting a floor reveals 3–4 apartment thumbnails with:
  - 📷 Placeholder image
  - 📏 Area
  - 🏷️ Unit type
  - 🛏️ Room count

- **Layout Details**  
  Clicking a thumbnail opens a larger layout preview with full metadata.

- **💡 Bonus Interaction**  
  Hovering over a unit thumbnail slightly darkens the floor background and scales up the unit with a soft animation — optimized for both desktop and mobile.

---

## 🛠️ Tech Stack

- **React** (with **TypeScript**) – UI framework
- **Tailwind CSS** – Utility-first styling
- **React Router** – Page navigation (optional depending on routing setup)
- **Placeholder Images** – Used for apartment thumbnails/layouts

---

## 🚧 Limitations & Tradeoffs

- **No backend**: All data is static/dummy and lives in-memory.
- **Not responsive to real data**: This is a UI prototype; integration with a real estate API or CMS is not included.
- **Minimal accessibility testing**: Animations and focus states may require further polish for full accessibility compliance.
- **Simple state management**: App uses local component state (no Redux, Zustand, etc.).

---

## 📦 Getting Started

```bash
git clone https://github.com/samfrexz619/property-visualizer-test
cd property-visualizer-test
yarn install
yarn run dev

src/
├── assets/           # Placeholder images
├── components/       # UI components (TowerCard, Modal, UnitCard, etc.)
├── data/             # Static tower data
├── pages/            # Main views (home, towers,)
├── layouts/          #DefaultLayout
├── types/            # interfaces
├── App.tsx
├── main.tsx

