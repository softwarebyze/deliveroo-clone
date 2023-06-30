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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
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
      dishes: [],
      long: -52.5572,
      lat: 23.245,
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
  ],
  getRestaurantsByFeatureId: (id) => {
    return db.restaurants.filter((restaurant) => restaurant.featured_id === id);
  },
};
