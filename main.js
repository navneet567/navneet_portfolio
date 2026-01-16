
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
 const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});




// ===== CONTACT FORM JS (NO HTML CHANGE) =====
const contactForm = document.querySelector(".contact-box form");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const inputs = contactForm.querySelectorAll("input, textarea");

  const name = inputs[0].value;
  const email = inputs[1].value;
  const message = inputs[2].value;

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      contactForm.reset();
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    alert("Server error. Try again later.");
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


