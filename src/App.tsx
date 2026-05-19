/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GameCanvas from './components/GameCanvas';

export default function App() {
  const towers = ['Archer', 'Barracks', 'Mage'];

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
      <div className="relative">
        <GameCanvas />
        {/* UI Overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          {towers.map(tower => (
            <button
              key={tower}
              className="rounded-lg bg-gray-800 p-4 text-white hover:bg-gray-700"
            >
              {tower}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
