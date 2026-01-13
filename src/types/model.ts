export interface Model {
  id: number;
  name: string;
  price: number;
  year: number;
  segment: string;
  thumbnail: string;
}
export interface ModelFeature {
  name: string;
  description: string;
  image: string;
}
export interface ModelHighlight {
  title: string;
  content: string;
  image: string;
}
export interface ModelDetail {
  id: number;
  name: string;
  segment: string;
  description: string;
  photo: string;
  model_features: ModelFeature[];
  model_highlights: ModelHighlight[];
}