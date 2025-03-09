document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");

  // Sidebar toggle for mobile view
  menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
  });

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      
      if (document.body.classList.contains("dark-mode")) {
          document.body.style.background = "#222";
          document.body.style.color = "white";
      } else {
          document.body.style.background = "#f4f4f4";
          document.body.style.color = "black";
      }
  });
});
