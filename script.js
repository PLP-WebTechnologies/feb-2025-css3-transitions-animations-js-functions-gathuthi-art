// Change button text and color
document.getElementById("changeBtn").addEventListener("click", function () {
    const text = document.getElementById("buttonText");
    text.textContent = "Button clicked! 🎉";
    this.style.backgroundColor = "green";
  });
  
  // Hover effect
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "orange";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
  });
  
  // Keypress detection
  document.getElementById("keyInput").addEventListener("keyup", function (e) {
    console.log("Key pressed: ", e.key);
  });
  
  // Double click secret
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    document.getElementById("secretMessage").textContent = "You discovered the secret! 🎉";
  });
  
  // Image gallery
  let imgIndex = 0;
  const images = [
    "https://placekitten.com/200/200",
    "https://placebear.com/200/200",
    "https://place-puppy.com/200x200"
  ];
  
  function changeImage() {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[imgIndex];
  }
  
  // Tabs
  function showTab(tabId) {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById(tabId).style.display = "block";
  }
  
  // Form validation
  function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback");
  
    if (!email.includes("@")) {
      feedback.textContent = "Invalid email format.";
      feedback.style.color = "red";
      return false;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return false;
    }
  
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
    return true;
  }
  