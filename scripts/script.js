document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");

  // Sidebar toggle for mobile view
  menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
  });
});
