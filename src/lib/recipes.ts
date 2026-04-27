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
    slug: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    description:
      "The vegetarian butter chicken. Fried paneer simmered in a spiced tomato-and-cream sauce. Serve with basmati rice or naan.",
    tags: ["curry", "indian", "vegetarian", "paneer"],
    time: {
      prep: "10 min",
      cook: "30 min",
      total: "40 min",
    },
    servings: "3-4 portions",
    ingredients: [
      {
        heading: "Paneer",
        items: [
          "450 g paneer, cut into small cubes",
          "4 tbsp canola oil (divided)",
        ],
      },
      {
        heading: "Aromatics",
        items: [
          "1 small cinnamon stick",
          "2 green cardamom pods",
          "2 cloves",
          "1 small onion, finely chopped",
        ],
      },
      {
        heading: "Sauce",
        items: [
          "½ cup butter, cut into cubes (divided)",
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
          "Basmati rice or naan",
        ],
      },
    ],
    steps: [
      {
        heading: "Method",
        steps: [
          "Heat 3 tbsp of the oil in a large non-stick pan on medium-high.",
          "Add the paneer in batches (don't crowd the pan). Cook, turning, until golden on all sides. Drain on paper towel.",
          "In the same pan, add the last 1 tbsp of oil. Add cinnamon stick, cardamom pods, and cloves. Heat 10 to 15 seconds, until the cloves puff up.",
          "Add the onion. Sauté until soft and slightly golden.",
          "Add ¼ cup of the butter, the tomato sauce, sugar, red chili powder, 1 tbsp of the fenugreek leaves, and the garam masala. Stir.",
          "Cook for 15 to 20 minutes, stirring occasionally, until the tomatoes thicken and the butter starts to separate.",
          "Add the rest of the butter and the cream (reserve a few tablespoons of cream for garnish). Salt to taste.",
          "Return the paneer to the pan. Simmer 1 minute to heat through.",
          "Garnish with the remaining fenugreek leaves and a drizzle of cream.",
        ],
      },
      {
        heading: "Substitutions",
        steps: [
          "No paneer? Halloumi works. Slice 1 cm thick and fry the same way.",
          "Pre-cooked chicken also works. Add it at the end when you return the paneer.",
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

