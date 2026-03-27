const addBtn = document.getElementById("add")
const removeBtn = document.getElementById("remove")
const addConfirmBtn = document.getElementById("addConfirm")
const list = document.getElementById("list")
const inputItem = document.getElementById("item")

const promptBatta = document.getElementById("prompt")
promptBatta.style.display = "none";

let currentLi = null;

addBtn.addEventListener("click", function() {
    currentLi = document.createElement("li");
    promptBatta.style.display = "block";
})

addConfirmBtn.addEventListener("click", function() { 
    if (!inputItem.value) return;
    currentLi.textContent = inputItem.value;
    promptBatta.style.display = "none";

    currentLi.classList.add("highlight")

    list.appendChild(currentLi)
    inputItem.value = ""
})

removeBtn.addEventListener("click", function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
})


