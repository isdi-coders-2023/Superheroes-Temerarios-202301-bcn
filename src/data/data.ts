export interface hitsStructure {
  recipe: recipeStructure[];
}

export interface recipeStructure {
  label: string;
  image: string;
  dietLabels: string[];
  healthLabels: string[];
  ingredients: ingredientsStructure[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  totalNutrients: totalNutrientsStructure;
  totalDaily: totalDailyStructure;
}

export interface totalNutrientsStructure {
  ENERC_KCAL: factStructure;
  FAT: factStructure;
  CHOCDF: factStructure;
  FIBTG: factStructure;
  SUGAR: factStructure;
  PROCNT: factStructure;
  CHOLE: factStructure;
  VITA_RAE: factStructure;
  VITC: factStructure;
  THIA: factStructure;
  RIBF: factStructure;
  NIA: factStructure;
  VITB6A: factStructure;
  VITB12: factStructure;
  VITD: factStructure;
  TOCPHA: factStructure;
  VITK1: factStructure;
  WATER: factStructure;
}

export interface totalDailyStructure extends totalNutrientsStructure {}

export interface factStructure {
  label: string;
  quantity: number;
  unit: string;
}

export interface ingredientsStructure {
  text: string;
  quantity: number;
  measure: string;
}

export interface linksStructure {
  next: nextPrevStructure;
}

export interface nextPrevStructure {
  href: string;
}
