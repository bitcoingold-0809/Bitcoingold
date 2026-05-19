import { GAME_WIDTH, GAME_HEIGHT } from './constants';
import { Entity, EntityType } from './types';

export class GameEngine {
  private entities: Entity[] = [];
  private baseHealth: number = 100;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationId: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    // Add test entity
    this.entities.push({
      id: 'test-enemy',
      type: EntityType.ENEMY,
      position: { x: 100, y: 100 },
      health: 75,
      maxHealth: 100
    });
  }

  start() {
    this.loop();
  }

  stop() {
    cancelAnimationFrame(this.animationId);
  }

  private loop() {
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.loop());
  }

  private update() {
    // Game logic (pathing, firing, hero movement)
  }

  private draw() {
    this.ctx.fillStyle = '#1a1a1a';
    this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw base
    this.ctx.fillStyle = '#ff4444';
    this.ctx.fillRect(GAME_WIDTH - 50, GAME_HEIGHT / 2 - 25, 50, 50);

    // Draw entities
    this.entities.forEach(entity => {
      // Draw entity placeholder
      this.ctx.fillStyle = entity.type === EntityType.ENEMY ? '#ff4444' : '#4444ff';
      this.ctx.fillRect(entity.position.x, entity.position.y, 40, 40);

      // Draw health bar
      const healthPercent = Math.max(0, entity.health / entity.maxHealth);
      const barWidth = 40;
      const barHeight = 5;
      this.ctx.fillStyle = '#333';
      this.ctx.fillRect(entity.position.x, entity.position.y - 10, barWidth, barHeight);
      this.ctx.fillStyle = entity.type === EntityType.ENEMY ? '#ff4444' : '#44ff44';
      this.ctx.fillRect(entity.position.x, entity.position.y - 10, barWidth * healthPercent, barHeight);
    });
  }
}
