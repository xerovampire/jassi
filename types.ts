export enum Screen {
  PROPOSAL = 'PROPOSAL',
  MENU = 'MENU',
  GIFT_FLOWER = 'GIFT_FLOWER',
  GIFT_LETTER = 'GIFT_LETTER',
  GIFT_SONG = 'GIFT_SONG'
}

export interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
}