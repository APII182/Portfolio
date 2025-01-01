document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const nav = document.querySelector("nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const backdrop = document.getElementById("backdrop");

  // Toggle Navbar
  const toggleNavbar = () => {
    navLinks.classList.toggle("mobile-menu"); // Sesuaikan dengan nama kelas di CSS
    navLinks.classList.toggle("open");
    backdrop.classList.toggle("hidden");
  };

  // Event Listener untuk Menu Toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      toggleNavbar();
    });
  }

  // Event Listener untuk Backdrop
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      navLinks.classList.remove("mobile-menu", "open");
      backdrop.classList.add("hidden");
    });
  }

  // Loader dan Navbar Display
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.display = "none";
      nav.style.display = "flex";
    }, 1000); // Sesuaikan dengan kebutuhan waktu
  });

  window.addEventListener("beforeunload", () => {
    loader.style.display = "block";
  });

  // Event Listener untuk Link di Navbar
  if (navLinks) {
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        toggleNavbar();
      });
    });
  }

  // Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons(); // Pastikan lucide sudah diimport
  }
});
