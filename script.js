const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const className = document.getElementById("className").value;
  const message = document.getElementById("message").value;

  /*
    IMPORTANT:
    Replace the number below with the coaching centre's
    actual WhatsApp number before showing this as a final website.
  */

  const whatsappNumber = "91XXXXXXXXXX";

  const text =
    `Hello Delhi Classes,%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Class: ${className}%0A` +
    `Message: ${message || "I would like to know more about the courses."}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${text}`,
    "_blank"
  );

});
