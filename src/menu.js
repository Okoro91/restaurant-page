export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Our Suya Menu";
  heading.style.textAlign = "center";
  heading.style.color = "#8B4513";
  heading.style.marginBottom = "2rem";
  content.appendChild(heading);

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  const menuItems = [
    {
      name: "Classic Beef Suya",
      description:
        "Thinly sliced beef marinated in traditional suya spices and grilled to perfection over open flames. Served with fresh onions, tomatoes, and our signature suya sauce.",
      price: "$18",
    },
    {
      name: "Spicy Chicken Suya",
      description:
        "Tender chicken pieces coated in our special suya rub, slowly grilled for maximum flavor. Available in mild, medium, or extra spicy.",
      price: "$16",
    },
    {
      name: "Goat Meat Suya",
      description:
        "Premium goat meat marinated for 24 hours in authentic spices, delivering a unique and flavorful suya experience.",
      price: "$20",
    },
    {
      name: "Suya Fried Rice",
      description:
        "Flavorful fried rice cooked with suya spices, mixed vegetables, and your choice of grilled meat. A perfect fusion dish!",
      price: "$15",
    },
    {
      name: "Suya Chips",
      description:
        "Crispy potato fries tossed in suya spice blend, served with spicy tomato dipping sauce. The perfect appetizer!",
      price: "$12",
    },
    {
      name: "Grilled Fish Suya",
      description:
        "Whole tilapia or catfish coated in suya spices and grilled to flaky perfection. Served with plantain and vegetable sauce.",
      price: "$22",
    },
    {
      name: "Suya Platter",
      description:
        "A grand feast featuring all our suya varieties - beef, chicken, goat, and fish. Serves 4-6 people.",
      price: "$65",
    },
    {
      name: "Vegetable Suya Skewers",
      description:
        "Grilled vegetable skewers with bell peppers, onions, mushrooms, and plantains coated in suya spices. Vegetarian delight!",
      price: "$14",
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const imagePlaceholder = document.createElement("div");
    imagePlaceholder.className = "image-placeholder";
    imagePlaceholder.textContent = `[Image: ${item.name}]`;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = item.price;

    menuItem.appendChild(name);
    menuItem.appendChild(imagePlaceholder);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuGrid.appendChild(menuItem);
  });

  content.appendChild(menuGrid);
}
