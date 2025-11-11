import suyaland from "./assest/suya-place.jpeg";
export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactContent = document.createElement("div");
  contactContent.className = "contact-content";

  const heading = document.createElement("h1");
  heading.textContent = "Visit Suya Palace";

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  const address = document.createElement("p");
  address.innerHTML =
    "<strong>📍 Address:</strong> 123 Suyaland Avenue, Ikorodu, Nigeria";

  const phone = document.createElement("p");
  phone.innerHTML = "<strong>📞 Phone:</strong> (234) 08123272914";

  const email = document.createElement("p");
  email.innerHTML = "<strong>✉️ Email:</strong> orders@suyaland.com";

  const hours = document.createElement("p");
  hours.innerHTML =
    "<strong>🕒 Hours:</strong><br>Monday - Thursday: 11am - 10pm<br>Friday - Saturday: 11am - 12am<br>Sunday: 12pm - 9pm";

  const delivery = document.createElement("p");
  delivery.innerHTML =
    "<strong>🚚 Delivery:</strong> Available through all major delivery apps";

  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.className = "image-placeholder";

  const suyalandImage = document.createElement("img");
  suyalandImage.src = suyaland;
  suyalandImage.alt = "Suyaland Palace Location";
  suyalandImage.className = "food-image";
  imagePlaceholder.appendChild(suyalandImage);
  imagePlaceholder.style.margin = "2rem 0";
  imagePlaceholder.style.height = "250px";

  contactInfo.appendChild(address);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);
  contactInfo.appendChild(hours);
  contactInfo.appendChild(delivery);

  contactContent.appendChild(heading);
  contactContent.appendChild(contactInfo);
  contactContent.appendChild(imagePlaceholder);
  content.appendChild(contactContent);
}
