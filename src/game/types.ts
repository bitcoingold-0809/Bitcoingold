export type Point = { x: number; y: number };

export enum EntityType {
  TOWER = 'TOWER',
  ENEMY = 'ENEMY',
  HERO = 'HERO',
  PROJECTILE = 'PROJECTILE',
}

export interface Entity {
  id: string;
  type: EntityType;
  position: Point;
  health: number;
  maxHealth: number;
}
