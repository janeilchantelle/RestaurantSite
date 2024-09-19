const specials = [
  {
    name: "Fast Track Fish Tacos",
    description:
      "Available on Fridays: Crispy beer-battered fish, shredded cabbage, and zesty tartar sauce wrapped in warm tortillas. A seafood delight to kick off the weekend.",
    url: "Pics/fishTacos.jpeg",
    alt: "Fast Track Fish Tacos",
  },
  {
    name: "NASCAR Nightcap Shake",
    description:
      "Available on Saturdays: Unwind with a special evening treat - a nightcap milkshake with a hint of your choice of liqueur (for adults). Choose from flavors like Spiked Chocolate, Boozy Banana, or Whiskey Vanilla.",
    url: "Pics/milkShake.jpeg",
    alt: "NASCAR Nightcap Shake",
  },
  {
    name: "Sunday Speedway Brunch",
    description:
      "Available on Sundays: Start your race day with a hearty brunch featuring scrambled eggs, bacon or sausage, hash browns, and a side of buttermilk pancakes drizzled with maple syrup. Served until noon. ",
    url: "Pics/brunch.jpeg",
    alt: "Sunday Speedway Brunch",
  },
  {
    name: "Family Fuel-Up Feast",
    description:
      "Availiable on Mondays: A family-sized platter featuring a variety of our classic menu items, perfect for sharing. Includes burgers, sliders, fries,chicken tenders, and a pitcher of your choice of soft drink.",
    url: "Pics/familyFeast.jpeg",
    alt: "Family Fuel-Up Feast",
  },
  {
    name: "Kid's Race Day Meal",
    description:
      "Available all week: A special menu for the little racers, including a mini burger or chicken tenders, a small side of waffle fries, and a kid's soft drink.",
    url: "Pics/kidsMeal2.jpeg",
    alt: "Kid's Race Day Meal",
  },
  {
    name: "Speedy Choco-Banana Bliss",
    description:
      "Indulge in a delightful blend of rich chocolate and sweet bananas in this mouthwatering dessert. Our Speedy Choco-Banana Bliss is the perfect treat to satisfy your sweet cravings. This dessert combines warm, gooey chocolate lava cake with caramelized banana slices and a scoop of creamy vanilla ice cream, drizzled with a luscious chocolate sauce. It's a harmony of flavors and textures that will leave your taste buds dancing.",
    url: "Pics/cake.jpeg",
    alt: "Speedy Choco-Banana Bliss",
  },
];

// Define the images for the main menu
const menu = [
  {
    name: "Pit Stop Burger",
    description:
      "Our signature double cheeseburger features two juicy beef patties cooked to perfection. Topped with crispy hickory-smoked bacon and our secret Speedy Grub Hub sauce, it's served on a toasted sesame seed bun and accompanied by a generous portion of golden, seasoned fries. $20",
    url: "Pics/cheeseBurger.jpeg",
  },
  {
    name: "Speedway Sliders",
    description:
      "Perfect for sharing or satisfying your snack cravings. These mini cheeseburgers are made with 100% beef patties, dressed with your choice of fresh toppings, and served on soft slider buns. Ideal for race day enjoyment. $18",
    url: "Pics/miniSliders.jpeg",
  },
  {
    name: "Checkered Flag Chili",
    description:
      "A hearty and spicy chili, loaded with ground beef, kidney beans, and a blend of secret spices. Served with your choice of a side: cornbread for a Southern touch or a bed of crispy fries for a filling meal. $18",
    url: "Pics/chilli.jpeg",
  },
  {
    name: "Racing Red Hot Dog",
    description:
      "Our jumbo beef hot dog is grilled to perfection and loaded with your choice of zesty chili, diced onions, and shredded cheese. A classic favorite for racing enthusiasts. $16",
    url: "Pics/hotDog2.jpeg",
  },
  {
    name: "Victory Lap Vegan Wrap",
    description:
      "A turbo-charged vegan wrap filled with nutrient-packed spinach leaves, zesty roasted red pepper hummus, fresh cucumber, and tomato slices, all wrapped in a whole wheat tortilla for a fuel-efficient meal on the go! $18",
    url: "Pics/veggieWrap.jpeg",
  },
  {
    name: "Thundering Chicken Tenders",
    description:
      "Crispy on the outside, tender on the inside, our chicken tenders are served with an array of dipping sauces, from mild honey mustard to blazing hot buffalo sauce. Choose your heat level! $20",
    url: "Pics/tenders.jpeg",
  },
  {
    name: "NASCAR Nachos",
    description:
      "A mountain of crispy tortilla chips topped with a generous helping of melted cheese, sliced jalapeños, diced tomatoes, and your choice of seasoned ground beef or slow-cooked pulled pork. A shareable delight for your table. $18",
    url: "Pics/nachos.jpeg",
  },
  {
    name: "Burnout BBQ Ribs",
    description:
      "Slow-cooked to perfection, our tender BBQ ribs are slathered in a tangy, finger-licking barbecue sauce. Served with a side of coleslaw and baked beans for the ultimate race-day feast. $22",
    url: "Pics/bbqRibs2.jpeg",
  },
  {
    name: "Winner's Waffle Fries",
    description:
      "Crispy and golden waffle-cut fries, seasoned to perfection and served with your choice of mouthwatering dipping sauces. $10",
    url: "Pics/waffleFries.jpeg",
  },
  {
    name: "Racing Refuel Smoothie",
    description:
      "Our refueling smoothie is a blend of mixed berries, yogurt, and a touch of honey, designed to give you a quick and refreshing energy boost during the race. $8",
    url: "Pics/smoothie2.jpeg",
  },
  {
    name: "Speedy Grub Hub Shake",
    description:
      "Our thick and creamy milkshakes come in classic flavors like vanilla, chocolate, or strawberry. Topped with a generous swirl of whipped cream and a cherry on top. $10",
    url: "Pics/milkShake2.jpeg",
  },
  {
    name: "Fuel-Injected Philly Cheesesteak",
    description:
      "A hearty and flavorful twist on the classic Philly cheesesteak. Thinly sliced steak cooked to perfection with sautéed onions, bell peppers, and melted cheese, all piled into a soft hoagie roll. Served with a side of waffle fries or onion rings for a high-octane meal. $18",
    url: "Pics/cheeseSteak2.jpeg",
  },
];

// Define the images for the sides
const sides = [
  {
    name: "Chequered Caesar Salad",
    description:
      "A classic Caesar salad featuring crisp Romaine lettuce, garlic croutons, grated parmesan cheese, and a rich Caesar dressing. A timeless favorite to balance your need for speed.  $8",
    url: "Pics/caesarSalad.jpeg",
  },
  {
    name: "Turbocharged Garlic Knots",
    description: "Soft and garlicky knots for an energy boost. $7",
    url: "Pics/taterTots.jpeg",
  },
  {
    name: "Fuel-Injected Sweet Fuel Fries",
    description:
      "Sweet potato fries with a honey glaze to rev up your taste buds. $10",
    url: "Pics/sweetFries.jpeg",
  },
  {
    name: "Speedway Tire Tread Onion Rings",
    description:
      "Crispy onion rings with a unique tire tread pattern, a real treat for racing enthusiasts. $8",
    url: "Pics/onionRings.jpeg",
  },
  {
    name: "Finish Line Mac'n'Cheese",
    description:
      "A delightful comfort food, featuring perfectly cooked elbow macaroni coated in a creamy blend of cheddar, mozzarella, and Parmesan cheese, topped with crispy golden breadcrumbs for a satisfying crunch. It's the ultimate cheesy indulgence. $15",
    url: "Pics/macnCheese.jpeg",
  },
];

// Define the images for soft drinks
const softDrinks = [
  {
    name: "Nitro Cola",
    description: "Classic cola with a high-energy fizz. $5",
    url: "Pics/fizzyCola.jpeg",
  },
  {
    name: "Raceway Root Beer",
    description:
      "A bold and creamy root beer, perfect for a pit stop refreshment. $5",
    url: "Pics/rootBeer.jpeg",
  },
  {
    name: "Victory Limeade",
    description:
      "A zesty blend of lime and lemon, with a touch of sweetness. $6",
    url: "Pics/limenade.jpeg",
  },
  {
    name: "G-Force Grape Soda",
    description: "A grape-flavored soda that packs a punch of flavor. $5",
    url: "Pics/grapeSoda.jpeg",
  },
  {
    name: "High-Octane Orange Crush",
    description: "A citrusy and refreshing orange soda. $5",
    url: "Pics/orangeCrush.jpeg",
  },
  {
    name: "Pit Crew Punch",
    description:
      "A fruity punch blend of tropical flavors, a perfect non-alcoholic option. $6",
    url: "Pics/fruitPunch.jpeg",
  },
];
