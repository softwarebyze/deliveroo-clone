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
          image_url:
            "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGklMjB3YXNhYml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 2,
          name: "Sashimi",
          description: "Fresh fish, wasabi, soy sauce, ginger",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80",
        },
        {
          id: 3,
          name: "Miso Soup",
          description: "Tofu, scallion, seaweed",
          price: 4.99,
          image_url:
            "https://images.unsplash.com/photo-1610393069309-2607fcf74146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzbyUyMHNvdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Gyoza",
          description: "Pan fried pork dumplings",
          price: 7.99,
          image_url:
            "https://images.unsplash.com/photo-1609183590563-7710ba1f90a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
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
          image_url:
            "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
        },
        {
          id: 6,
          name: "Vegan Pizza",
          description: "Beyond sausage, vegan cheese, peppers, onions",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
        {
          id: 7,
          name: "Vegan Burrito",
          description: "Beyond meat, rice, beans, guacamole, salsa",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1662116765994-1e4200c43589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnYW4lMjBCdXJyaXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 8,
          name: "Vegan Sushi",
          description: "Beyond meat, rice, seaweed, wasabi, soy sauce, ginger",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1602554172650-043a2de54271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
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
          image_url:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 10,
          name: "Margherita Pizza",
          description: "Fresh mozzarella, tomato sauce, basil",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: 11,
          name: "Pasta Bolognese",
          description: "Spaghetti, tomato sauce, ground beef",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        },
        {
          id: 12,
          name: "Pasta Carbonara",
          description: "Spaghetti, parmesan, bacon, egg",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFzdGElMjBDYXJib25hcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
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
          image_url:
            "https://images.unsplash.com/photo-1619719015339-133a130520f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmliZXllJTIwU3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 14,
          name: "Filet Mignon",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=884&q=80",
        },
        {
          id: 15,
          name: "New York Strip",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1644704265419-96ddaf628e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWW9yayUyMFN0cmlwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 16,
          name: "Porterhouse",
          description: "Grilled, medium rare, salt, pepper, butter",
          price: 12.99,
          image_url:
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9ydGVyaG91c2UlMjBzdGVha3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
          image_url: "https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG9ic3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 18,
          name: "Crab",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "https://cdn.pixabay.com/photo/2016/04/09/06/11/crab-1317479_1280.jpg",
        },
        {
          id: 19,
          name: "Shrimp",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1599655345131-6eb73b81d8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
        },
        {
          id: 20,
          name: "Salmon",
          description: "Grilled, butter, lemon",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
          image_url: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
        },
        {
          id: 22,
          name: "Spicy Tuna Roll",
          description: "Tuna, spicy mayo, cucumber",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 23,
          name: "Rainbow Roll",
          description: "Crab, avocado, cucumber, tuna, salmon, shrimp",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1636425730695-febe95eda12e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 24,
          name: "Dragon Roll",
          description: "Crab, avocado, cucumber, eel",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyYWdvbiUyMHJvbGwlMjBzdXNoaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
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
          image_url: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BhZ2hldHRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 26,
          name: "Lasagna",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 27,
          name: "Fettuccine Alfredo",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV0dHVjY2luZSUyMGFsZnJlZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 28,
          name: "Ravioli",
          description: "Marinara, meatballs, parmesan",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1560476652-f5bf553eac22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmF2aW9saXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
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
          image_url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 30,
          name: "Burrito",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnVycml0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 31,
          name: "Enchiladas",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1679605097294-ad339b020c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVuY2hpbGFkYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 32,
          name: "Quesadilla",
          description: "Beef, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
          image_url: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGhhaSUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 34,
          name: "Pad See Ew",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 35,
          name: "Pad Kee Mao",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGhhaSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 36,
          name: "Red Curry",
          description: "Rice noodles, shrimp, tofu, peanuts",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
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
          image_url: "https://images.unsplash.com/photo-1610150157941-f7bcc26f8914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
          id: 38,
          name: "Chicken Tenders",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1619019187211-adf2f6119afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 39,
          name: "Chicken Wings",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHdpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 40,
          name: "Chicken Nuggets",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMG51Z2dldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
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
          image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 42,
          name: "Chicken Sandwich",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1619019187211-adf2f6119afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRlbmRlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 43,
          name: "Chicken Tenders",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1619019187211-adf2f6119afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVuZGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 44,
          name: "Chicken Nuggets",
          description: "Chicken, lettuce, tomato, cheese",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMG51Z2dldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
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
          image_url: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
        },
        {
          id: 47,
          name: "Naan",
          description:
            "Naan is a leavened, oven-baked flatbread found in the cuisines mainly of Western Asia, South Asia, Indonesia, Myanmar and the Caribbean. It is typical of and popular in West, Central and South Asia. It is baked in a tandoor. Naan is cooked in a tandoor, from which tandoori cooking takes its name. This distinguishes it from roti, which is usually cooked on a flat or slightly concave iron griddle called a tava.",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        },
        {
          id: 48,
          name: "Samosa",
          description:
            "A samosa is a fried or baked pastry with a savoury filling, such as spiced potatoes, onions, peas, cheese, beef and other meats, or lentils. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region. The Indian style, often accompanied by a chutney, is probably the most widely known of a broad family of recipes from Africa to China, which have origins in medieval times or earlier.",
          price: 12.99,
          image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
