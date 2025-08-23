// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.preventDefault();
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      const expanded = mobileToggle.classList.contains("active");
      mobileToggle.setAttribute("aria-expanded", expanded);
      body.style.overflow = expanded ? "hidden" : "";
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
        body.style.overflow = "";
      });
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
        body.style.overflow = "";
      }
    });
  }

  // Create modal elements
  const modal = document.createElement("div");
  modal.id = "image-modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.background = "rgba(0,0,0,0.85)";
  modal.style.display = "none";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";
  modal.style.cursor = "zoom-out";
  modal.innerHTML =
    '<img id="modal-img" style="max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 8px 40px #0008;" />';
  document.body.appendChild(modal);

  const modalImg = modal.querySelector("#modal-img");

  // Open modal on image click
  document.querySelectorAll("img.zoom").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", (e) => {
      modalImg.src = img.src;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal on click or Escape key
  modal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "";
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
      modalImg.src = "";
      document.body.style.overflow = "";
    }
  });

  new BackgroundCanvas();
});

// Background Canvas Setup
class BackgroundCanvas {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.init();
  }

  init() {
    // Create canvas element
    this.canvas = document.createElement("canvas");
    this.canvas.id = "background-canvas";

    // Insert canvas as first child of body
    document.body.insertBefore(this.canvas, document.body.firstChild);

    // Get 2D context
    this.ctx = this.canvas.getContext("2d");

    // Set initial size
    this.resize();

    // Set up resize listener
    window.addEventListener("resize", () => this.resize());

    // Start rendering
    this.render();
  }

  resize() {
    // Set canvas size to window size
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Set CSS size (for high DPI displays)
    this.canvas.style.width = window.innerWidth + "px";
    this.canvas.style.height = window.innerHeight + "px";

    // Scale context for high DPI displays
    const dpr = window.devicePixelRatio || 1;
    if (dpr !== 1) {
      this.canvas.width = window.innerWidth * dpr;
      this.canvas.height = window.innerHeight * dpr;
      this.ctx.scale(dpr, dpr);
    }
  }

  render() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Fill with light gray color for now
    this.ctx.fillStyle = "#dada";
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Continue rendering loop (for future animations)
    requestAnimationFrame(() => this.render());
  }
}
