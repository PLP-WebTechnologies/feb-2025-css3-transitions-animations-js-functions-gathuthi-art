// Apply stored theme on load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.className = savedTheme;
      document.getElementById("themeSelector").value = savedTheme;
    }
  };
  
  // Store theme preference in localStorage
  document.getElementById("themeSelector").addEventListener("change", function () {
    const selectedTheme = this.value;
    document.body.className = selectedTheme;
    localStorage.setItem("theme", selectedTheme);
  });
  
  // Trigger animation on button click
  document.getElementById("animateBtn").addEventListener("click", function () {
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 600); // Remove class after animation
  });
  