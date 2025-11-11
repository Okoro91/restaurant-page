export default function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const aboutContent = document.createElement("div");
  aboutContent.className = "about-content";

  const heading = document.createElement("h1");
  heading.textContent = "About Suya Palace";

  const story = document.createElement("p");
  story.innerHTML = `Founded in 2005 by Master Griller Alhaji Ibrahim, <strong>Suya Palace</strong> brings the authentic taste of Nigerian street food to the world. Our journey began in the bustling markets of Kano, where Alhaji Ibrahim perfected his suya recipe over decades.`;
  story.style.marginBottom = "1.5rem";
  story.style.lineHeight = "1.8";

  const philosophy = document.createElement("p");
  philosophy.innerHTML = `We use only the finest ingredients and traditional grilling techniques. Our secret spice blend - <em>yaji</em> - is made from ground peanuts, ginger, garlic, paprika, and other spices that have been in our family for generations. Every dish is prepared with the same care and attention that made our original street stall famous throughout Nigeria.`;
  philosophy.style.marginBottom = "1.5rem";
  philosophy.style.lineHeight = "1.8";

  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.className = "image-placeholder";
  imagePlaceholder.textContent = "[Image: Traditional Suya Grilling]";
  imagePlaceholder.style.margin = "2rem 0";

  const mission = document.createElement("p");
  mission.innerHTML = `Today, we continue to honor tradition while embracing innovation, creating new suya-inspired dishes that maintain the authentic flavors our customers love. From our classic beef suya to creative dishes like suya fried rice and suya chips, we're committed to sharing the rich culinary heritage of Nigeria with every bite.`;
  mission.style.lineHeight = "1.8";

  aboutContent.appendChild(heading);
  aboutContent.appendChild(story);
  aboutContent.appendChild(philosophy);
  aboutContent.appendChild(imagePlaceholder);
  aboutContent.appendChild(mission);
  content.appendChild(aboutContent);
}
