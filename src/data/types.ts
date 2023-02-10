export interface RecipeListStructure {
  from: number;
  to: number;
  _links: LinksStructure;
  hits: HitStructure[];
}

export interface CardProps {
  image: string;
  name: string;
  category: string;
  calories: string;
  totalTime: string;
}

export interface HitStructure {
  recipe: RecipeStructure;
}

export interface RecipeStructure {
  label: string;
  image: string;
  dietLabels: string[];
  healthLabels: string[];
  ingredients: IngredientsStructure[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  totalNutrients: TotalNutrientsStructure;
  totalDaily: TotalDailyStructure;
}

export interface TotalNutrientsStructure {
  ENERC_KCAL: FactStructure;
  FAT: FactStructure;
  CHOCDF: FactStructure;
  FIBTG: FactStructure;
  SUGAR: FactStructure;
  PROCNT: FactStructure;
  CHOLE: FactStructure;
  VITA_RAE: FactStructure;
  VITC: FactStructure;
}

export interface TotalDailyStructure extends TotalNutrientsStructure {}

export interface FactStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface IngredientsStructure {
  text: string;
  quantity: number;
  measure: string;
}

export interface LinksStructure {
  next: NextPrevStructure;
}

export interface NextPrevStructure {
  href: string;
}

export type HitsStructure = HitStructure[];
