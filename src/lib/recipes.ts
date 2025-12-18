export type RecipeTime = {
  prep: string;
  cook: string;
  total: string;
};

export type IngredientGroup = {
  heading: string;
  items: string[];
};

export type StepGroup = {
  heading: string;
  steps: string[];
};

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  time: RecipeTime;
  servings: string;
  ingredients: IngredientGroup[];
  steps: StepGroup[];
};

export const recipes: Recipe[] = [
  {
    slug: "pinsa-pizza",
    title: "Pinsa Pizza",
    description:
      "Light, airy Roman-style pizza made with a long, cold-fermented dough for maximum flavor.",
    tags: ["roman", "pizza", "slow ferment"],
    time: {
      prep: "10 min",
      cook: "10 min",
      total: "20 min",
    },
    servings: "",
    ingredients: [
      {
        heading: "Base",
        items: [
          "Pinsa dough from the store",
          "Tomato sauce or ketchup",
          "Mozzarella",
        ],
      },
      {
        heading: "Toppings",
        items: [
          "Tomatoes",
          "Red onions",
          "Olives",
          "Pesto",
        ],
      },
    ],
    steps: [
      {
        heading: "Method",
        steps: [
          "Preheat the oven to 210°C.",
          "Line an oven tray with baking paper and place the pinsa dough on it.",
          "Spread a thin layer of ketchup or tomato sauce over the dough.",
          "Sprinkle oregano over the sauce.",
          "Scatter a few pieces of chopped tomato—go light so the crust stays crisp.",
          "Slice red onions thinly and add them on top.",
          "Dot the surface with pesto.",
          "Tear 2 x 150 g mozzarella by hand and cover the top.",
          "Finish with olives, pepperoni, or any extra toppings you like.",
          "Bake for about 10–15 minutes, until the crust is golden and the cheese is bubbly.",
        ],
      },
    ],
  },
];

