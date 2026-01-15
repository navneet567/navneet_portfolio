
var typed = new Typed(".text",{
    strings :["Java Developer" , "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");

  if(icon.classList.contains("fa-bars")){
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.classList.remove("active");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});





document.getElementById("contactForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  const data = await response.json();

  if(data.success){
    alert("Message sent successfully!");
    this.reset();
  } else {
    alert("Failed to send message");
  }
});

