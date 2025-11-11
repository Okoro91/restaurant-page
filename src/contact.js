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
    "<strong>📍 Address:</strong> 123 Spice Avenue, Little Nigeria District, NYC 10001";

  const phone = document.createElement("p");
  phone.innerHTML = "<strong>📞 Phone:</strong> (555) 123-4567";

  const email = document.createElement("p");
  email.innerHTML = "<strong>✉️ Email:</strong> orders@suya-palace.com";

  const hours = document.createElement("p");
  hours.innerHTML =
    "<strong>🕒 Hours:</strong><br>Monday - Thursday: 11am - 10pm<br>Friday - Saturday: 11am - 12am<br>Sunday: 12pm - 9pm";

  const delivery = document.createElement("p");
  delivery.innerHTML =
    "<strong>🚚 Delivery:</strong> Available through all major delivery apps";

  // Image placeholder for restaurant location
  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.className = "image-placeholder";
  imagePlaceholder.textContent = "[Image: Suya Palace Location]";
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
