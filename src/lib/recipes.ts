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
    slug: "honey-garlic-chili-chicken",
    title: "Honey Garlic Chili Chicken",
    description:
      "Sticky, glossy chicken with sesame and chili. Eat it over rice or in a wrap. Great for meal prep — even better the next day.",
    tags: ["chicken", "quick", "meal prep", "asian"],
    time: {
      prep: "10 min",
      cook: "10 min",
      total: "20 min",
    },
    servings: "2 portions (about 450 g chicken)",
    ingredients: [
      {
        heading: "Marinade",
        items: [
          "450 g chicken, cut into bite-size pieces",
          "1 tbsp soy sauce",
          "1 tsp sesame oil",
          "1 tsp paprika",
          "Pinch of salt",
          "Pinch of black pepper",
        ],
      },
      {
        heading: "Sauce",
        items: [
          "2 tbsp honey",
          "1 tbsp soy sauce",
          "1 tsp chili oil (more if you want it spicier)",
          "1 tsp sesame oil",
          "4 garlic cloves, minced",
          "2 tbsp water",
        ],
      },
      {
        heading: "To serve",
        items: [
          "Cooked rice or tortilla wraps",
          "Cucumber, sliced",
          "Spring onion or sesame seeds (optional)",
        ],
      },
    ],
    steps: [
      {
        heading: "Method",
        steps: [
          "Toss the chicken with the marinade ingredients and let it sit for 5 minutes while you prep the sauce.",
          "Mix all sauce ingredients in a small bowl.",
          "Heat a neutral oil in a pan on high heat.",
          "Add the chicken in a single layer (don't crowd it). Sear about 3 minutes per side until golden.",
          "Push the chicken to one side, drop in the minced garlic and cook for 20 seconds.",
          "Pour the sauce over everything. Toss to coat.",
          "Let it bubble for 2–3 minutes until the sauce reduces and turns glossy and sticky.",
          "Serve over rice or in a wrap with sliced cucumber. Top with sesame seeds or spring onion if you have them.",
        ],
      },
      {
        heading: "Meal prep",
        steps: [
          "Cook the chicken fully and let it cool.",
          "Store in an airtight container in the fridge for up to 3 days.",
          "Reheat in a pan with a splash of water to loosen the sauce.",
        ],
      },
    ],
  },
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
  {
    slug: "butter-curry",
    title: "Butter Curry",
    description:
      "Rich, creamy tomato-and-cream curry. Pour over fried halloumi, paneer, or chicken. Pairs with naan, rice, or just a green salad.",
    tags: ["curry", "indian", "vegetarian", "quick"],
    time: {
      prep: "5 min",
      cook: "25 min",
      total: "30 min",
    },
    servings: "2-3 portions",
    ingredients: [
      {
        heading: "Sauce",
        items: [
          "½ cup butter, cut into cubes",
          "2 cups tomato sauce (passata works well)",
          "1 tbsp sugar",
          "1 tsp red chili powder",
          "2 tbsp dried fenugreek leaves (kasuri methi), divided",
          "1 tsp garam masala",
          "2 cups heavy cream",
          "Salt to taste",
        ],
      },
      {
        heading: "To serve",
        items: [
          "Halloumi, sliced and fried (or paneer, or pre-cooked chicken)",
          "A simple green salad",
          "Naan or rice (optional)",
        ],
      },
    ],
    steps: [
      {
        heading: "Method",
        steps: [
          "Melt ¼ cup of butter in a large pan on medium heat.",
          "Add tomato sauce, sugar, red chili powder, 1 tbsp of fenugreek leaves, and garam masala. Stir and bring to a gentle simmer.",
          "Cook for 15 to 20 minutes until the sauce thickens and the butter starts to separate. Stir every few minutes so nothing sticks.",
          "Add the rest of the butter and the heavy cream. Reserve a few tablespoons of cream for garnish if you want.",
          "Taste and add salt. Simmer for 5 more minutes.",
          "Garnish with the remaining fenugreek leaves and a drizzle of cream.",
        ],
      },
      {
        heading: "With halloumi",
        steps: [
          "While the sauce simmers, slice halloumi about 1 cm thick.",
          "Fry in a dry pan on medium-high until golden on both sides (about 2 minutes per side).",
          "Pour the curry over the halloumi, or serve them next to each other so the halloumi stays crisp.",
          "Add a green salad on the side.",
        ],
      },
    ],
  },
  {
    slug: "pasta-salad",
    title: "Pasta Salad",
    description: "Bright, quick pasta salad with pesto, mozzarella, and fresh greens.",
    tags: ["pasta", "salad", "quick"],
    time: {
      prep: "5 min",
      cook: "8 min",
      total: "15 min",
    },
    servings: "",
    ingredients: [
      {
        heading: "Ingredients",
        items: [
          "Pasta",
          "Mozzarella",
          "Tomatoes",
          "Pesto",
          "Ruccola",
          "Nuts",
        ],
      },
    ],
    steps: [
      {
        heading: "Method",
        steps: [
          "Boil pasta for 7–8 minutes until al dente.",
          "Drain, then transfer the pasta to a bowl.",
          "Stir in pesto to coat.",
          "Season with salt.",
          "Add mozzarella.",
          "Add ruccola.",
          "Roughly chop the nuts and add them.",
          "Mix everything together.",
          "Enjoy.",
        ],
      },
    ],
  },
];

