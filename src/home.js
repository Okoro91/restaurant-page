import "./styles.css";
import beefSuya from "./assest/beef-suya.jpeg";
import chickenSuya from "./assest/chicken-suya.jpeg";
import goatSuya from "./assest/goat-suya.jpeg";
import riceSuya from "./assest/rice-suya.jpeg";
import chipsSuya from "./assest/chips-suya.jpeg";
import fishSuya from "./assest/fish-suya.jpeg";

const loadHome = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("div");
  hero.className = "hero";

  const heading = document.createElement("h1");
  heading.textContent = " MI Suyaland Palace";

  const tagline = document.createElement("p");
  tagline.className = "tagline";
  tagline.textContent = "Authentic Nigerian Suya & Grilled Delicacies";

  const description = document.createElement("p");
  description.textContent =
    "Experience the rich, smoky flavors of traditional Nigerian suya. Our master grillers use secret spice blends passed down through generations to create the most authentic suya experience outside of Nigeria.";

  const restaurantVisual = document.createElement("div");
  restaurantVisual.className = "restaurant-visual";

  const restaurantBuilding = document.createElement("div");
  restaurantBuilding.className = "restaurant-building";

  const restaurantRoof = document.createElement("div");
  restaurantRoof.className = "restaurant-roof";

  const restaurantWindows = document.createElement("div");
  restaurantWindows.className = "restaurant-windows";

  const window = document.createElement("div");
  window.className = "window";
  restaurantWindows.appendChild(window);
  restaurantWindows.appendChild(window.cloneNode());

  const restaurantDoor = document.createElement("div");
  restaurantDoor.className = "restaurant-door";

  const handle = document.createElement("span");
  handle.className = "handle";
  restaurantDoor.appendChild(handle);

  const restaurantSign = document.createElement("div");
  restaurantSign.className = "restaurant-sign";
  restaurantSign.textContent = "MI SUYALAND";

  const smoke = document.createElement("div");
  smoke.className = "smoke";
  for (let i = 0; i < 5; i++) {
    const smokeParticle = document.createElement("div");
    smokeParticle.className = "smoke-particle";
    smoke.appendChild(smokeParticle);
  }

  restaurantVisual.appendChild(restaurantRoof);
  restaurantVisual.appendChild(restaurantBuilding);
  restaurantVisual.appendChild(restaurantWindows);
  restaurantVisual.appendChild(restaurantDoor);
  restaurantVisual.appendChild(restaurantSign);
  restaurantVisual.appendChild(smoke);

  const specialties = document.createElement("div");
  specialties.className = "specialty-grid";

  const specialtyItems = [
    { name: "Beef Suya", class: "beef-suya", image: beefSuya },
    { name: "Chicken Suya", class: "chicken-suya", image: chickenSuya },
    { name: "Goat Meat Suya", class: "goat-suya", image: goatSuya },
    { name: "Suya Fried Rice", class: "rice-suya", image: riceSuya },
    { name: "Suya Chips", class: "chips-suya", image: chipsSuya },
    { name: "Grilled Fish", class: "fish-suya", image: fishSuya },
  ];

  specialtyItems.forEach((item) => {
    const specialtyItem = document.createElement("div");
    specialtyItem.className = "specialty-item";

    const foodVisual = document.createElement("div");
    foodVisual.className = "food-visual";

    const foodImage = document.createElement("img");
    foodImage.src = item.image;
    foodImage.alt = item.name;
    foodImage.className = "food-image";
    foodVisual.appendChild(foodImage);

    const name = document.createElement("h4");
    name.textContent = item.name;

    specialtyItem.appendChild(foodVisual);
    specialtyItem.appendChild(name);
    specialties.appendChild(specialtyItem);
  });

  hero.appendChild(heading);
  hero.appendChild(tagline);
  hero.appendChild(description);
  hero.appendChild(restaurantVisual);
  content.appendChild(hero);
  content.appendChild(specialties);
};

export default loadHome;
