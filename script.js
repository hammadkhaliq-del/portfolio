function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out, Hammad will get back to you soon!");
  this.reset();
});
