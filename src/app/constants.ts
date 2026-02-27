// SYNERGIA grid pattern - 1 represents filled cells, 0 represents empty
export const SYNERGIA_GRID = [
  "111101001010010111101110011110100110",
  "100001001011010100001001010000101001",
  "111100110010110111001110010110101111",
  "000100100010010100001001010010101001",
  "111100100010010111101001011110101001"
].map(row => row.split('').map(Number));

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

export const EVENTS_DATA: Event[] = [
  // Add your events data here
];
