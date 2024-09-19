// Define the images for the slideshow
const slideshowImages = [
  {
    name: "Fast Track Fish Tacos",
    description:
      "Available on Fridays: Crispy beer-battered fish, shredded cabbage, and zesty tartar sauce wrapped in warm tortillas. A seafood delight to kick off the weekend.",
    url: "Pics/fishTacos.jpeg",
  },
  {
    name: "NASCAR Nightcap Shake",
    description:
      "Available on Saturdays: Unwind with a special evening treat - a nightcap milkshake with a hint of your choice of liqueur (for adults). Choose from flavors like Spiked Chocolate, Boozy Banana, or Whiskey Vanilla.",
    url: "Pics/nightCap.jpeg",
  },
  {
    name: "Family Fuel-Up Feast",
    description:
      "Available on Mondays: A family-sized platter featuring a variety of our classic menu items, perfect for sharing. Includes burgers, sliders, fries, chicken tenders, and a pitcher of your choice of soft drink.",
    url: "Pics/familyFeast.jpeg",
  },
  {
    name: "Kid's Race Day Meal",
    description:
      "Available all week: A special menu for the little racers, including a mini burger or chicken tenders, a small side of waffle fries, and a kid's soft drink.",
    url: "Pics/kidsMeal2.jpeg",
  },
  {
    name: "Speedy Choco-Banana Bliss",
    description:
      "Available all week: Indulge in a delightful blend of rich chocolate and sweet bananas in this mouthwatering dessert. Our Speedy Choco-Banana Bliss is the perfect treat to satisfy your sweet cravings. This dessert combines warm, gooey chocolate lava cake with caramelized banana slices and a scoop of creamy vanilla ice cream, drizzled with a luscious chocolate sauce. It's a harmony of flavors and textures that will leave your taste buds dancing.",
    url: "Pics/cake.jpeg",
  },
  {
    name: "Sunday Speedway Brunch",
    description:
      "Available on Sundays: Start your race day with a hearty brunch featuring scrambled eggs, bacon or sausage, hash browns, and a side of buttermilk pancakes drizzled with maple syrup. Served until noon.",
    url: "Pics/brunch.jpeg",
  },
];

const images = [
  {
    name: "Pit Stop Burger",
    description:
      "Our signature double cheeseburger features two juicy beef patties cooked to perfection. Topped with crispy hickory-smoked bacon and our secret Speedy Grub Hub sauce, it's served on a toasted sesame seed bun and accompanied by a generous portion of golden, seasoned fries.",
    url: "Pics/cheeseBurger.jpeg",
  },
  {
    name: "Speedway Sliders",
    description:
      "Perfect for sharing or satisfying your snack cravings. These mini cheeseburgers are made with 100% beef patties, dressed with your choice of fresh toppings, and served on soft slider buns. Ideal for race day enjoyment.",
    url: "Pics/miniSliders.jpeg",
  },
  {
    name: "Checkered Flag Chili",
    description:
      "A hearty and spicy chili, loaded with ground beef, kidney beans, and a blend of secret spices. Served with your choice of a side: cornbread for a Southern touch or a bed of crispy fries for a filling meal.",
    url: "Pics/chilli.jpeg",
  },
  {
    name: "Racing Red Hot Dog",
    description:
      "Our jumbo beef hot dog is grilled to perfection and loaded with your choice of zesty chili, diced onions, and shredded cheese. A classic favorite for racing enthusiasts.",
    url: "Pics/hotdog.jpeg",
  },
  {
    name: "Victory Lap Vegan Wrap",
    description:
      "A turbo-charged vegan wrap filled with nutrient-packed spinach leaves, zesty roasted red pepper hummus, fresh cucumber and tomato slices, all wrapped in a whole wheat tortilla for a fuel-efficient meal on the go!",
    url: "Pics/veggieWrap.jpeg",
  },
  {
    name: "Thundering Chicken Tenders",
    description:
      "Crispy on the outside, tender on the inside, our chicken tenders are served with an array of dipping sauces, from mild honey mustard to blazing hot buffalo sauce. Choose your heat level!",
    url: "Pics/tenders.jpeg",
  },
  {
    name: "NASCAR Nachos",
    description:
      "A mountain of crispy tortilla chips topped with a generous helping of melted cheese, sliced jalapeños, diced tomatoes, and your choice of seasoned ground beef or slow-cooked pulled pork. A shareable delight for your table.",
    url: "Pics/nachos.jpeg",
  },
  {
    name: "Burnout BBQ Ribs",
    description:
      "Slow-cooked to perfection, our tender BBQ ribs are slathered in a tangy, finger-licking barbecue sauce. Served with a side of coleslaw and baked beans for the ultimate race-day feast.",
    url: "Pics/bbqRibs.jpeg",
  },
  {
    name: "Winner's Waffle Fries",
    description:
      "Crispy and golden waffle-cut fries, seasoned to perfection and served with your choice of mouthwatering dipping sauces.",
    url: "Pics/waffleFries.jpeg",
  },
  {
    name: "Racing Refuel Smoothie",
    description:
      "Our refueling smoothie is a blend of mixed berries, yogurt, and a touch of honey, designed to give you a quick and refreshing energy boost during the race.",
    url: "Pics/smoothie2.jpeg",
  },
  {
    name: "Speedy Grub Hub Shake",
    description:
      "Our thick and creamy milkshakes come in classic flavors like vanilla, chocolate, or strawberry. Topped with a generous swirl of whipped cream and a maraschino cherry for a touch of nostalgia.",
    url: "Pics/milkShake2.jpeg",
  },
];

const sides = [
  {
    name: "Chequered Caesar Salad",
    description:
      "A classic Caesar salad featuring crisp Romaine lettuce, garlic croutons, grated parmesan cheese, and a rich Caesar dressing. A timeless favorite to balance your need for speed.",
    url: "Pics/caesarSalad.jpeg",
  },
  {
    name: "Turbocharged Garlic Knots",
    description: "Soft and garlicky knots for an energy boost.",
    url: "Pics/taterTots.jpeg",
  },
  {
    name: "Fuel-Injected Sweet Fuel Fries",
    description:
      "Sweet potato fries with a honey glaze to rev up your taste buds.",
    url: "Pics/sweetFries.jpeg",
  },
  {
    name: "Speedway Tire Tread Onion Rings",
    description:
      "Crispy onion rings with a unique tire tread pattern, a real treat for racing enthusiasts.",
    url: "Pics/onionRings.jpeg",
  },
  {
    name: "Finish Line Mac'n'Cheese",
    description:
      "A delightful comfort food, featuring perfectly cooked elbow macaroni coated in a creamy blend of cheddar, mozzarella, and Parmesan cheese, topped with crispy golden breadcrumbs for a satisfying crunch. It's the ultimate cheesy indulgence.",
    url: "Pics/macnCheese.jpeg",
  },
];

const softDrinks = [
  {
    name: "Nitro Cola",
    description: "Classic cola with a high-energy fizz.",
    url: "Pics/fizzyCola.jpeg",
  },
  {
    name: "Raceway Root Beer",
    description:
      "A bold and creamy root beer, perfect for a pit stop refreshment.",
    url: "Pics/rootBeer.jpeg",
  },
  {
    name: "Victory Limeade",
    description: "A zesty blend of lime and lemon, with a touch of sweetness.",
    url: "Pics/limenade.jpeg",
  },
  {
    name: "G-Force Grape Soda",
    description: "A grape-flavored soda that packs a punch of flavor.",
    url: "Pics/grapeSoda.jpeg",
  },
  {
    name: "High-Octane Orange Crush",
    description: "A citrusy and refreshing orange soda.",
    url: "Pics/orangeCrush.jpeg",
  },
  {
    name: "Pit Crew Punch",
    description:
      "A fruity punch blend of tropical flavors, a perfect non-alcoholic option.",
    url: "Pics/fruitPunch.jpeg",
  },
];

// HTML elements
const root = document.getElementById("root");

// Initialize state variables
let modal = false;
let selectedImage = null;
let sidesOpen = false;
let softDrinksOpen = false;
let mainMenuOpen = false;
let hoveredItem = null;
let slideshowIndex = 0;

// Function to toggle the modal
function toggleModal() {
  modal = !modal;
  render();
}

// Function to open the modal with an item
function openModal(item) {
  selectedImage = item;
  toggleModal();
}

// Function to toggle the soft drinks section
function toggleSoftDrinks() {
  softDrinksOpen = !softDrinksOpen;
  render();
}

// Function to toggle the sides section
function toggleSides() {
  sidesOpen = !sidesOpen;
  render();
}

// Function to toggle the main menu section
function toggleMainMenu() {
  mainMenuOpen = !mainMenuOpen;
  render();
}

// Function to create the modal content
function createModal(selectedImage, toggleModal) {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";
  modalContainer.addEventListener("click", toggleModal);

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  if (selectedImage) {
    const closeSpan = document.createElement("span");
    closeSpan.className = "close-modal";
    closeSpan.textContent = "×";
    closeSpan.addEventListener("click", toggleModal);

    const h2 = document.createElement("h2");
    h2.textContent = selectedImage.name;

    const p = document.createElement("p");
    p.textContent = selectedImage.description;

    const img = document.createElement("img");
    img.src = selectedImage.url;
    img.alt = selectedImage.name;

    modalContent.appendChild(closeSpan);
    modalContent.appendChild(h2);
    modalContent.appendChild(p);
    modalContent.appendChild(img);
  }

  modalContainer.appendChild(modalContent);
  return modalContainer;
}

// Function to render the entire UI
function render() {
  root.innerHTML = "";

  // Render slideshow at the top
  root.appendChild(Slideshow(slideshowImages, slideshowIndex));

  // Inside your render function, after appending the slideshow
  setInterval(() => {
    changeSlide(1); // This will auto-advance the slideshow to the next image
  }, 5000); // Change the time (in milliseconds) to control the speed of the slideshow

  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";
  root.innerHTML += "<br>";

  // Render Main Menu Button
  //   const mainMenuButton = document.createElement("div");
  //   mainMenuButton.className = "btn-modal";
  //   mainMenuButton.textContent = "Main Menu";
  //   mainMenuButton.addEventListener("click", toggleMainMenu);
  //   root.appendChild(mainMenuButton);

  if (mainMenuOpen) {
    // Render the main menu section
    const mainMenuList = document.createElement("div");
    mainMenuList.className = "main-menu-list";
    images.forEach((item) => {
      const menuItem = MenuItem(item, openModal, setHoveredItem, hoveredItem);
      mainMenuList.appendChild(menuItem);
    });
    root.appendChild(mainMenuList);
  }

  // Render Soft Drinks Button
  const softDrinksButton = document.createElement("div");
  softDrinksButton.className = "btn-modal";
  softDrinksButton.textContent = "Soft Drinks";
  softDrinksButton.addEventListener("click", toggleSoftDrinks);
  root.appendChild(softDrinksButton);

  if (softDrinksOpen) {
    // Render the soft drinks section
    const softDrinksList = document.createElement("div");
    softDrinksList.className = "soft-drinks-list";
    softDrinks.forEach((drink) => {
      const menuItem = MenuItem(drink, openModal, setHoveredItem, hoveredItem);
      softDrinksList.appendChild(menuItem);
    });
    root.appendChild(softDrinksList);
  }

  // Render Sides Button
  const sidesButton = document.createElement("div");
  sidesButton.className = "btn-modal";
  sidesButton.textContent = "Sides";
  sidesButton.addEventListener("click", toggleSides);
  root.appendChild(sidesButton);

  if (sidesOpen) {
    // Render the sides section
    const sidesList = document.createElement("div");
    sidesList.className = "sides-list";
    sides.forEach((side) => {
      const menuItem = MenuItem(side, openModal, setHoveredItem, hoveredItem);
      sidesList.appendChild(menuItem);
    });
    root.appendChild(sidesList);
  }

  // Render the image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  images.forEach((item) => {
    const imageItem = document.createElement("div");
    imageItem.className = "image-item";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "image-wrapper";

    const imageTitleButton = document.createElement("div");
    imageTitleButton.className = "image-title-button";
    imageTitleButton.textContent = item.name;
    imageTitleButton.addEventListener("click", () => openModal(item));

    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.name;
    img.addEventListener("click", () => openModal(item));

    imageWrapper.appendChild(imageTitleButton);
    imageWrapper.appendChild(img);
    imageItem.appendChild(imageWrapper);

    imageContainer.appendChild(imageItem);
  });

  root.appendChild(imageContainer);

  if (modal) {
    // Render the modal if it's open
    const modalContainer = createModal(selectedImage, toggleModal);
    root.appendChild(modalContainer);
  }
}

// Function to create a slideshow
function Slideshow(slideshowImages, slideshowIndex) {
  const slide = slideshowImages[slideshowIndex];

  const div = document.createElement("div");
  div.className = "slideshow-container";

  const slideDiv = document.createElement("div");
  slideDiv.className = "slide active";
  const h2 = document.createElement("h2");
  h2.textContent = slide.name;
  const p = document.createElement("p");
  p.textContent = slide.description;

  const img = document.createElement("img");
  img.src = slide.url;
  img.alt = slide.name;

  const prevButton = document.createElement("a");
  prevButton.className = "prev";
  prevButton.textContent = "❮";
  prevButton.addEventListener("click", () => changeSlide(-1));

  const nextButton = document.createElement("a");
  nextButton.className = "next";
  nextButton.textContent = "❯";
  nextButton.addEventListener("click", () => changeSlide(1));

  slideDiv.appendChild(h2);
  slideDiv.appendChild(p);
  slideDiv.appendChild(img);

  div.appendChild(prevButton);
  div.appendChild(slideDiv);
  div.appendChild(nextButton);

  return div;
}

// Function to change slides
function changeSlide(n) {
  slideshowIndex += n;
  if (slideshowIndex < 0) {
    slideshowIndex = slideshowImages.length - 1;
  } else if (slideshowIndex >= slideshowImages.length) {
    slideshowIndex = 0;
  }

  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.className = "slide"));
  slides[slideshowIndex].className = "slide active";
}

// Function to create menu item elements
function MenuItem(item, openModal, setHoveredItem, hoveredItem) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  if (hoveredItem === item.name) {
    menuItem.classList.add("hovered");
  }

  menuItem.addEventListener("mouseenter", () => setHoveredItem(item.name));
  menuItem.addEventListener("mouseleave", () => setHoveredItem(null));

  const itemImage = document.createElement("img");
  itemImage.src = item.url;
  itemImage.alt = item.name;

  const itemName = document.createElement("h2");
  itemName.textContent = item.name;

  const itemDescription = document.createElement("p"); // Create a paragraph for the description
  itemDescription.textContent = item.description; // Set the description text

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemDescription); // Append the description to the menu item
  menuItem.appendChild(itemImage);

  menuItem.addEventListener("click", () => openModal(item));

  return menuItem;
}

// Function to set the currently hovered item
function setHoveredItem(itemName) {
  hoveredItem = itemName;
  render();
}

// Initial rendering
render();
