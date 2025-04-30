// script.js

function changeContent() {
    const intro = document.getElementById("intro");
    intro.textContent = "You just changed this text using JavaScript!";
    intro.style.color = "red";
    intro.style.fontWeight = "bold";
    intro.style.backgroundColor = "#f0f0f0";
  }
  
  function addElement() {
    const list = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
  }
  
  function removeElement() {
    const list = document.getElementById("item-list");
    if (list.lastChild) {
      list.removeChild(list.lastChild);
    }
  }
  