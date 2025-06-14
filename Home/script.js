document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  const slides = document.querySelectorAll(".testimonial-slider .slide");

  // Clone the first set of slides for seamless looping
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
});
function sendWhatsApp(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappLink = `https://wa.me/123456789?text=${fullMessage}`;

  window.open(whatsappLink, '_blank');
}
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, ""); // Remove non-digits
});
