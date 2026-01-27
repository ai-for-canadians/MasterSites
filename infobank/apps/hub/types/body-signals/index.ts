export type BodyAreaID = 'head' | 'chest' | 'abdomen' | 'back' | 'limbs' | 'skin' | 'general';

export interface BodyArea {
    id: BodyAreaID;
    name: string;
    slug: string;
    description: string;
    icon: string;
}
