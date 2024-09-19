document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const special = document.querySelector("#special");
  const titleElement = document.querySelector(".title");
  const altElement = document.querySelector(".alt");
  const descriptions = document.querySelector("#descriptions");
  const descriptionList = document.getElementById("description-list");
  const next = document.querySelector("#next");
  const sodaDropdown = document.querySelector("#soda-dropdown");
  const sodaDropdownContent = document.querySelector("#soda-dropdown-content");
  const sodaPopup = document.querySelector("#soda-popup");
  const closePopup = document.querySelector("#close-popup");
  const popupTitle = document.querySelector("#popup-title");
  const popupDescription = document.querySelector("#popup-description");
  const popupImage = document.querySelector("#popup-image");
  const sidesDropdown = document.querySelector("#sides-dropdown");
  const sidesDropdownContent = document.querySelector(
    "#sides-dropdown-content"
  );
  const sidesPopup = document.querySelector("#sides-popup");
  const menuPopup = document.querySelector("#menu-popup");
  const closeMenuPopup = document.querySelector("#close-menu-popup");
  const menuName = document.querySelector(".menu-name");
  const menuDescription = document.querySelector("#menu-description");
  const menuImage = document.querySelector("#menu-image");
  const menuContainer = document.querySelector(".menu-container");

  // Loop through the menu items and create elements for each item
  menu.forEach((menuItem) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("img-container");

    // Create an image element for the menu item
    const imgElement = document.createElement("img");
    imgElement.classList.add("img");
    imgElement.src = menuItem.url;
    imgElement.alt = menuItem.name;

    // Create a title element for the menu item
    const titleElement = document.createElement("div");
    titleElement.classList.add("menu-title");
    titleElement.textContent = menuItem.name;

    // Append image and title to the menu item container
    menuItemElement.appendChild(imgElement);
    menuItemElement.appendChild(titleElement);

    // Add a click event listener to open the menu item popup
    menuItemElement.addEventListener("click", () => openMenuPopup(menuItem));

    // Append the menu item container to the menu container
    // Inside the loop that creates menu items
    document.querySelector(".menu-items").appendChild(menuItemElement);
  });

  // Initialize the current index
  let currentIndex = 0;

  // Function to update the displayed special
  function updateSpecial() {
    const currentSpecial = specials[currentIndex];
    special.src = currentSpecial.url;
    titleElement.textContent = currentSpecial.name;
    altElement.textContent = currentSpecial.alt;
  }

  // Function to change to the next special
  function changePic() {
    currentIndex = (currentIndex + 1) % specials.length;
    updateSpecial();
  }

  // Function to toggle description visibility
  function toggleDescription() {
    if (descriptionList.style.display === "none") {
      showDescriptions();
    } else {
      hideDescriptions();
    }
  }

  // Function to show descriptions
  function showDescriptions() {
    descriptionList.style.display = "block";
    altElement.style.display = "none"; // Hide the alt text
    displayDescriptionList();
  }

  // Function to hide descriptions
  function hideDescriptions() {
    descriptionList.style.display = "none";
    altElement.style.display = "block"; // Show the alt text
  }

  // Function to display the description list
  function displayDescriptionList() {
    const ol = document.createElement("ol");
    specials.forEach(function (description) {
      const li = createDescriptionListItem(
        description.name,
        description.description
      );
      ol.appendChild(li);
    });

    descriptionList.innerHTML = "";
    descriptionList.appendChild(ol);
  }

  // Function to create a description list item
  function createDescriptionListItem(name, description) {
    const li = document.createElement("li");
    const nameElement = document.createElement("strong");
    nameElement.innerText = name;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = description;
    li.appendChild(nameElement);
    li.appendChild(descriptionElement);
    return li;
  }

  // Populate the dropdown menu for Soda
  function populateSodaDropdown() {
    softDrinks.forEach(function (soda, index) {
      const sodaItem = document.createElement("div");
      sodaItem.classList.add("soda-item");
      sodaItem.textContent = soda.name;
      sodaItem.addEventListener("click", function () {
        openSodaPopup(soda);
      });
      sodaDropdownContent.appendChild(sodaItem);
    });
  }

  // Function to open the soda pop-up
  function openSodaPopup(soda) {
    popupTitle.textContent = soda.name;
    popupDescription.textContent = soda.description;
    popupImage.src = soda.url;
    sodaPopup.style.display = "block";
  }

  // Function to close the soda pop-up
  function closeSodaPopup() {
    sodaPopup.style.display = "none";
  }

  // Populate the dropdown menu for Sides
  function populateSidesDropdown() {
    sides.forEach(function (side, index) {
      const sideItem = document.createElement("div");
      sideItem.classList.add("sides-item");
      sideItem.textContent = side.name;
      sideItem.addEventListener("click", function () {
        openSidesPopup(side);
      });
      sidesDropdownContent.appendChild(sideItem);
    });
  }

  // Function to open the sides pop-up
  function openSidesPopup(side) {
    const sidesPopupTitle = sidesPopup.querySelector("#sides-popup-title");
    const sidesPopupDescription = sidesPopup.querySelector(
      "#sides-popup-description"
    );
    const sidesPopupImage = sidesPopup.querySelector("#sides-popup-image");

    sidesPopupTitle.textContent = side.name;
    sidesPopupDescription.textContent = side.description;
    sidesPopupImage.src = side.url;
    sidesPopup.style.display = "block";
  }

  // Function to close the sides pop-up
  function closeSidesPopup() {
    sidesPopup.style.display = "none";
  }

  // Function to open the menu popup
  function openMenuPopup(menuItem) {
    menuName.textContent = menuItem.name;
    menuDescription.textContent = menuItem.description;
    menuImage.src = menuItem.url;
    menuPopup.style.display = "block";
  }

  // Function to check if the mouse is over the dropdown container
  function isMouseOverDropdown(event, dropdown) {
    const rect = dropdown.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  }

  // Function to check if the mouse is over the dropdown content
  function isMouseOverDropdownContent(event, content) {
    const rect = content.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  }

  // Event Listeners

  // Event listener for "Next Special" button
  next.addEventListener("click", changePic);

  // Event listener for "Learn More" button
  descriptions.addEventListener("click", toggleDescription);

  // Handle the hover event for special
  special.addEventListener("mouseover", () => {
    altElement.style.display = "block";
  });

  special.addEventListener("mouseout", () => {
    altElement.style.display = "none";
  });

  // Event Listeners for Soda Container
  sodaDropdown.addEventListener("mouseover", function () {
    sodaDropdownContent.style.display = "block";
  });

  sodaDropdown.addEventListener("mouseout", function (event) {
    // Check if the mouse is outside the soda dropdown container and not over the dropdown content
    if (
      !isMouseOverDropdown(event, sodaDropdown) &&
      !isMouseOverDropdownContent(event, sodaDropdownContent)
    ) {
      sodaDropdownContent.style.display = "none";
    }
  });

  closePopup.addEventListener("click", closeSodaPopup);

  // Event Listeners for Sides Container
  sidesDropdown.addEventListener("mouseover", function () {
    sidesDropdownContent.style.display = "block";
  });

  sidesDropdown.addEventListener("mouseout", function (event) {
    // Check if the mouse is outside the sides dropdown container and not over the dropdown content
    if (
      !isMouseOverDropdown(event, sidesDropdown) &&
      !isMouseOverDropdownContent(event, sidesDropdownContent)
    ) {
      // Delay the closing of the dropdown
      setTimeout(function () {
        sidesDropdownContent.style.display = "none";
      }, 200); // You can adjust the delay as needed
    }
  });

  // Event listener for closing the sides popup
  const closeSidesPopupButton = document.querySelector("#close-sides-popup");
  closeSidesPopupButton.addEventListener("click", closeSidesPopup);

  // Event listener for closing the menu popup
  closeMenuPopup.addEventListener("click", function () {
    menuPopup.style.display = "none";
  });

  // Example usage
  const menuItems = [
    // Define your menu items here
  ];

  // Populate the menu items and add click listeners
  menuItems.forEach((menuItem) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("img-container");
    const imgElement = document.createElement("img");
    imgElement.classList.add("img");
    imgElement.src = menuItem.url;
    imgElement.alt = menuItem.name;
    const titleElement = document.createElement("div");
    titleElement.classList.add("menu-title");
    titleElement.textContent = menuItem.name;

    menuItemElement.appendChild(imgElement);
    menuItemElement.appendChild(titleElement);
    menuPopup.appendChild(menuItemElement);

    menuItemElement.addEventListener("click", () => openMenuPopup(menuItem));
  });

  // Initial display
  updateSpecial();
  populateSodaDropdown();
  populateSidesDropdown();
});
