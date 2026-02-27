export enum EventCategory {
  TECHNICAL = 'technical',
  CULTURAL = 'cultural',
  WORKSHOPS = 'workshops'
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  hostedBy: string;
  image?: string;
}
