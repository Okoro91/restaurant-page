import "./styles.css";

const loadHome = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("div");
  hero.className = "hero";

  const heading = document.createElement("h1");
  heading.textContent = "Suya Palace";

  const tagline = document.createElement("p");
  tagline.textContent = "Authentic Nigerian Suya & Grilled Delicacies";

  const description = document.createElement("p");
  description.textContent =
    "Experience the rich, smoky flavors of traditional Nigerian suya. Our master grillers use secret spice blends passed down through generations to create the most authentic suya experience outside of Nigeria.";

  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.className = "image-placeholder";
  imagePlaceholder.textContent = "[Image: Suya Palace Restaurant]";
  imagePlaceholder.style.margin = "2rem auto";
  imagePlaceholder.style.maxWidth = "600px";

  const specialties = document.createElement("div");
  specialties.className = "specialty-grid";

  const specialtyItems = [
    "Beef Suya",
    "Chicken Suya",
    "Goat Meat Suya",
    "Suya Fried Rice",
    "Suya Chips",
    "Grilled Fish",
  ];

  specialtyItems.forEach((item) => {
    const specialtyItem = document.createElement("div");
    specialtyItem.className = "specialty-item";

    const imgPlaceholder = document.createElement("div");
    imgPlaceholder.className = "image-placeholder";
    imgPlaceholder.textContent = `[Image: ${item}]`;
    imgPlaceholder.style.height = "150px";

    const name = document.createElement("h4");
    name.textContent = item;

    specialtyItem.appendChild(imgPlaceholder);
    specialtyItem.appendChild(name);
    specialties.appendChild(specialtyItem);
  });

  hero.appendChild(heading);
  hero.appendChild(tagline);
  hero.appendChild(description);
  hero.appendChild(imagePlaceholder);
  content.appendChild(hero);
  content.appendChild(specialties);
};

export default loadHome;
