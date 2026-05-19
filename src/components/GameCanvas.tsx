import { useEffect, useRef } from 'react';
import { GameEngine } from '../game/engine';
import { GAME_WIDTH, GAME_HEIGHT } from '../game/constants';

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new GameEngine(canvas);
    engine.start();

    return () => engine.stop();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={GAME_WIDTH}
      height={GAME_HEIGHT}
      className="border border-gray-700 shadow-xl"
    />
  );
}
