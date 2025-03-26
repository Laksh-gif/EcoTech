// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
  });
});

gsap.utils.toArray(".slide-up").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
    },
  });
});

gsap.utils.toArray(".tool-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
  });
});

// Counter Animation
document.querySelectorAll(".counter").forEach((counter) => {
  let updateCount = () => {
    let target = +counter.getAttribute("data-count");
    let count = 0;
    let step = Math.ceil(target / 100);

    let incrementCounter = () => {
      count += step;
      counter.innerText = count > target ? target + "+" : count + "+";
      if (count < target) setTimeout(incrementCounter, 20);
    };

    incrementCounter();
  };

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(counter);
});

// Testimonial Slider
const testimonials = document.querySelectorAll(".testimonial");
const dotsContainer = document.querySelector(".testimonial-dots");
let currentTestimonial = 0;

// Create dots
testimonials.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("testimonial-dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    showTestimonial(index);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".testimonial-dot");

function showTestimonial(index) {
  testimonials[currentTestimonial].classList.remove("active");
  dots[currentTestimonial].classList.remove("active");

  currentTestimonial = (index + testimonials.length) % testimonials.length;

  testimonials[currentTestimonial].classList.add("active");
  dots[currentTestimonial].classList.add("active");
}

document.querySelector(".testimonial-next").addEventListener("click", () => {
  showTestimonial(currentTestimonial + 1);
});

document.querySelector(".testimonial-prev").addEventListener("click", () => {
  showTestimonial(currentTestimonial - 1);
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
  showTestimonial(currentTestimonial + 1);
}, 5000);

// Pause on hover
const slider = document.querySelector(".testimonial-slider");
slider.addEventListener("mouseenter", () => {
  clearInterval(testimonialInterval);
});

slider.addEventListener("mouseleave", () => {
  testimonialInterval = setInterval(() => {
    showTestimonial(currentTestimonial + 1);
  }, 5000);
});

// Loading Animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});

// Particles.js Configuration
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#27ae60",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#27ae60",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});
