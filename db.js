export const db = {
  features: [
    {
      id: 1,
      title: "Offers near you!",
      description: "Why not support your local restaurant tonight?",
    },
    {
      id: 2,
      title: "Featured",
      description: "Paid placements from our partners",
    },
    {
      id: 3,
      title: "Tasty Discounts",
      description: "Everyone's been enjoying these juicy discounts",
    },
  ],
  restaurants: [
    {
      id: 1,
      featured_id: 1,
      title: "Yo! Sushi",
      image_url: "https://links.papareact.com/gn7",
      address: "123 Main Street",
      rating: 4.5,
      genre: "Japanese",
      short_description: "Sushi, Japanese, Asian",
      dishes: [
        {
          id: 1,
          name: "Sushi",
          description: "Fresh fish, rice, wasabi, soy sauce, ginger",
          price: 12.99,
          image_url: "",
        },
        {
          id: 2,
          name: "Sashimi",
          description: "Fresh fish, wasabi, soy sauce, ginger",
          price: 12.99,
          image_url: "",
        },
        {
          id: 3,
          name: "Miso Soup",
          description: "Tofu, scallion, seaweed",
          price: 4.99,
          image_url: "",
        },
        {
          id: 4,
          name: "Gyoza",
          description: "Pan fried pork dumplings",
          price: 7.99,
          image_url: "",
        },
      ],
      long: -73.935242,
      lat: 40.73061,
    },
    {
      id: 2,
      featured_id: 1,
      title: "Vegan Delight",
      image_url:
        "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      address: "456 Side Street",
      rating: 2,
      genre: "Vegan",
      short_description: "Vegan, Vegetarian, Healthy",
      dishes: [
        {
          id: 5,
          name: "Vegan Burger",
          description: "Beyond meat, lettuce, tomato, onion, pickles",
          price: 12.99,
          image_url: "",
        },
        {
          id: 6,
          name: "Vegan Pizza",
          description: "Beyond sausage, vegan cheese, peppers, onions",
          price: 12.99,
          image_url: "",
        },
        {
          id: 7,
          name: "Vegan Burrito",
          description: "Beyond meat, rice, beans, guacamole, salsa",
          price: 12.99,
          image_url: "",
        },
        {
          id: 8,
          name: "Vegan Sushi",
          description: "Beyond meat, rice, seaweed, wasabi, soy sauce, ginger",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -39.935242,
      lat: 70.73061,
    },
    {
      id: 3,
      featured_id: 1,
      title: "Italiano's Pizzeria",
      image_url:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      address: "789 Elm Street",
      rating: 4.2,
      genre: "Italian",
      short_description: "Pizza, Pasta, Italian",
      dishes: [
        {
          id: 9,
          name: "Pepperoni Pizza",
          description: "Pepperoni, cheese, tomato sauce",
          price: 12.99,
          image_url: "",
        },
        {
          id: 10,
          name: "Margherita Pizza",
          description: "Fresh mozzarella, tomato sauce, basil",
          price: 12.99,
          image_url: "",
        },
        {
          id: 11,
          name: "Pasta Bolognese",
          description: "Spaghetti, tomato sauce, ground beef",
          price: 12.99,
          image_url: "",
        },
        {
          id: 12,
          name: "Pasta Carbonara",
          description: "Spaghetti, parmesan, bacon, egg",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -74.0059,
      lat: 40.7128,
    },
    {
      id: 4,
      featured_id: 2,
      title: "The Steakhouse",
      image_url:
        "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      address: "123 Maple Avenue",
      rating: 4.8,
      genre: "Steakhouse",
      short_description: "Steak, Grilled, American",
      dishes: [
        {
          id: 13,
          name: "Ribeye Steak",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url: "",
        },
        {
          id: 14,
          name: "Filet Mignon",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url: "",
        },
        {
          id: 15,
          name: "New York Strip",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url: "",
        },
        {
          id: 16,
          name: "Porterhouse",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -122.4194,
      lat: 37.7749,
    },
    {
      id: 5,
      featured_id: 2,
      title: "Seafood Sensation",
      image_url:
        "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=752&q=80",
      address: "456 Oak Street",
      rating: 4.6,
      genre: "Seafood",
      short_description: "Fresh Seafood, Ocean Delicacies",
      dishes: [
        {
          id: 17,
          name: "Lobster",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "",
        },
        {
          id: 18,
          name: "Crab",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "",
        },
        {
          id: 19,
          name: "Shrimp",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "",
        },
        {
          id: 20,
          name: "Salmon",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -87.6298,
      lat: 41.8781,
    },
    {
      id: 6,
      featured_id: 2,
      title: "Sushi Fusion",
      image_url:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      address: "789 Elm Street",
      rating: 4.4,
      genre: "Japanese Fusion",
      short_description: "Sushi with a Twist, Asian Fusion",
      dishes: [
        {
          id: 21,
          name: "California Roll",
          description: "Crab, avocado, cucumber",
          price: 12.99,
          image_url: "",
        },
        {
          id: 22,
          name: "Spicy Tuna Roll",
          description: "Tuna, spicy mayo, cucumber",
          price: 12.99,
          image_url: "",
        },
        {
          id: 23,
          name: "Rainbow Roll",
          description: "Crab, avocado, cucumber, tuna, salmon, shrimp",
          price: 12.99,
          image_url: "",
        },
        {
          id: 24,
          name: "Dragon Roll",
          description: "Crab, avocado, cucumber, eel",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -39.935242,
      lat: 70.73061,
    },
    {
      id: 7,
      featured_id: 3,
      title: "Bella Italia",
      image_url:
        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      address: "123 Back Street",
      rating: 4.3,
      genre: "Italian",
      short_description: "Italian Cuisine, Pasta, Pizza",
      dishes: [
        {
          id: 25,
          name: "Spaghetti",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "",
        },
        {
          id: 26,
          name: "Lasagna",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "",
        },
        {
          id: 27,
          name: "Fettuccine Alfredo",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "",
        },
        {
          id: 28,
          name: "Ravioli",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -52.5572,
      lat: 23.245,
    },
    {
      id: 8,
      featured_id: 3,
      title: "Mexican Spice",
      image_url:
        "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      address: "456 Pine Street",
      rating: 3.8,
      genre: "Mexican",
      short_description: "Authentic Mexican Cuisine, Tacos, Burritos",
      dishes: [
        {
          id: 29,
          name: "Tacos",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 30,
          name: "Burrito",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 31,
          name: "Enchiladas",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 32,
          name: "Quesadilla",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -84.388,
      lat: 33.749,
    },
    {
      id: 9,
      featured_id: 3,
      title: "Thai Delight",
      image_url:
        "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      address: "789 Oak Street",
      rating: 4.6,
      genre: "Thai",
      short_description: "Authentic Thai Cuisine, Spicy Noodles, Curry",
      dishes: [
        {
          id: 33,
          name: "Pad Thai",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "",
        },
        {
          id: 34,
          name: "Pad See Ew",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "",
        },
        {
          id: 35,
          name: "Pad Kee Mao",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "",
        },
        {
          id: 36,
          name: "Red Curry",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -122.4194,
      lat: 37.7749,
    },
    {
      id: 10,
      featured_id: 2,
      title: "KFC",
      image_url:
        "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
      address: "789 Back Street",
      rating: 4,
      genre: "Fast Food",
      short_description: "Chicken, Fast Food, American",
      dishes: [
        {
          id: 37,
          name: "Chicken Sandwich",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 38,
          name: "Chicken Tenders",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 39,
          name: "Chicken Wings",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 40,
          name: "Chicken Nuggets",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -52.5572,
      lat: 23.245,
    },
    {
      id: 11,
      featured_id: 2,
      title: "Burger King",
      image_url:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      address: "123 Pine Street",
      rating: 4.2,
      genre: "Fast Food",
      short_description: "Burgers, Fries, Fast Food",
      dishes: [
        {
          id: 41,
          name: "Whopper",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 42,
          name: "Chicken Sandwich",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 43,
          name: "Chicken Tenders",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
        {
          id: 44,
          name: "Chicken Nuggets",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -84.388,
      lat: 33.749,
    },
    {
      id: 12,
      featured_id: 1,
      title: "Indian Delight",
      image_url:
        "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      address: "123 Pine Street",
      rating: 4.2,
      genre: "Indian",
      short_description: "Indian Cuisine, Curry, Naan",
      dishes: [
        {
          id: 45,
          name: "Chicken Tikka Masala",
          description:
            "Chicken Tikka Masala is a dish of chunks of roasted marinated chicken (chicken tikka) in a spiced curry sauce. The sauce is usually creamy and orange-coloured. There are multiple claims to its place of origin, including the Punjab region of the Indian subcontinent or Glasgow in Scotland.",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
        },
        {
          id: 46,
          name: "Chicken Curry",
          description:
            "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain as well as in the Caribbean. A typical curry from the Indian subcontinent consists of chicken stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumin, coriander, cinnamon, cardamom and so on.",
          price: 12.99,
          image_url: "",
        },
        {
          id: 47,
          name: "Naan",
          description:
            "Naan is a leavened, oven-baked flatbread found in the cuisines mainly of Western Asia, South Asia, Indonesia, Myanmar and the Caribbean. It is typical of and popular in West, Central and South Asia. It is baked in a tandoor. Naan is cooked in a tandoor, from which tandoori cooking takes its name. This distinguishes it from roti, which is usually cooked on a flat or slightly concave iron griddle called a tava.",
          price: 12.99,
          image_url: "",
        },
        {
          id: 48,
          name: "Samosa",
          description:
            "A samosa is a fried or baked pastry with a savoury filling, such as spiced potatoes, onions, peas, cheese, beef and other meats, or lentils. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region. The Indian style, often accompanied by a chutney, is probably the most widely known of a broad family of recipes from Africa to China, which have origins in medieval times or earlier.",
          price: 12.99,
          image_url: "",
        },
      ],
      long: -84.388,
      lat: 33.749,
    },
  ],
  categories: [
    {
      id: 1,
      image_url:
        "https://images.unsplash.com/photo-1594968973184-9040a5a79963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Offers",
    },
    {
      id: 2,
      image_url:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80",
      title: "Pizza",
    },
    {
      id: 3,
      image_url:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Thai",
    },
    {
      id: 4,
      image_url:
        "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      title: "Sushi",
    },
    {
      id: 5,
      image_url:
        "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
      title: "Asian",
    },
    {
      id: 6,
      image_url:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      title: "Indian",
    },
  ],
  getRestaurantsByFeatureId: (id) => {
    return db.restaurants.filter((restaurant) => restaurant.featured_id === id);
  },
};
