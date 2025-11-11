import beefSuya from "./assest/beef-suya.jpeg";
import chickenSuya from "./assest/chicken-suya.jpeg";
import goatSuya from "./assest/goat-suya.jpeg";
import riceSuya from "./assest/rice-suya.jpeg";
import chipsSuya from "./assest/chips-suya.jpeg";
import fishSuya from "./assest/fish-suya.jpeg";

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
      price: "₦18000",
      image: beefSuya,
    },
    {
      name: "Spicy Chicken Suya",
      description:
        "Tender chicken pieces coated in our special suya rub, slowly grilled for maximum flavor. Available in mild, medium, or extra spicy.",
      price: "₦16000",
      image: chickenSuya,
    },
    {
      name: "Goat Meat Suya",
      description:
        "Premium goat meat marinated for 24 hours in authentic spices, delivering a unique and flavorful suya experience.",
      price: "₦20000",
      image: goatSuya,
    },
    {
      name: "Suya Fried Rice",
      description:
        "Flavorful fried rice cooked with suya spices, mixed vegetables, and your choice of grilled meat. A perfect fusion dish!",
      price: "₦15000",
      image: riceSuya,
    },
    {
      name: "Suya Chips",
      description:
        "Crispy potato fries tossed in suya spice blend, served with spicy tomato dipping sauce. The perfect appetizer!",
      price: "₦12000",
      image: chipsSuya,
    },
    {
      name: "Grilled Fish Suya",
      description:
        "Whole tilapia or catfish coated in suya spices and grilled to flaky perfection. Served with plantain and vegetable sauce.",
      price: "₦22000",
      image: fishSuya,
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const foodVisual = document.createElement("div");
    foodVisual.className = "menu-item-visual";

    const foodImage = document.createElement("img");
    foodImage.src = item.image;
    foodImage.alt = item.name;
    foodImage.className = "food-image";
    foodVisual.appendChild(foodImage);

    // // Add skewers for meat items
    // if (!item.name.includes("Rice") && !item.name.includes("Chips")) {
    //   const suyaSkewers = document.createElement("div");
    //   suyaSkewers.className = "suya-skewers";

    //   const skewer = document.createElement("div");
    //   skewer.className = "skewer";

    //   for (let i = 0; i < 4; i++) {
    //     const meatPiece = document.createElement("div");
    //     meatPiece.className = "meat-piece";
    //     skewer.appendChild(meatPiece);
    //   }

    //   suyaSkewers.appendChild(skewer);
    //   foodVisual.appendChild(suyaSkewers);
    // }

    // const spiceOverlay = document.createElement("div");
    // spiceOverlay.className = "spice-overlay";
    // foodVisual.appendChild(spiceOverlay);

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = item.price;

    menuItem.appendChild(name);
    menuItem.appendChild(foodVisual);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuGrid.appendChild(menuItem);
  });

  content.appendChild(menuGrid);
}
