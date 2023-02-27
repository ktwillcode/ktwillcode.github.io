// script.js

// smooth scrolling to anchor links
const smoothScroll = (target, duration) => {
  const targetEl = document.querySelector(target);
  const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
  const startPos = window.pageYOffset;
  const distance = targetPos - startPos;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    smoothScroll(target, 1000);
  });
});

// form submission
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // replace with your own endpoint
  const endpoint = "https://example.com/submit-form";

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Oops! Something went wrong. Please try again later.");
    });
});
