
export enum LessonNodeType {
  Book = 'BOOK',
  Star = 'STAR',
  Headphones = 'HEADPHONES',
  CharacterChess = 'CHARACTER_CHESS',
  CharacterCampfire = 'CHARACTER_CAMPFIRE',
}

export enum LessonNodeStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Completed = 'COMPLETED',
}

export enum LessonNodeAlignment {
    Left = 'LEFT',
    Center = 'CENTER',
    Right = 'RIGHT',
}

export interface LessonNodeData {
  id: number;
  type: LessonNodeType;
  status: LessonNodeStatus;
  alignment: LessonNodeAlignment;
  label?: string;
}
