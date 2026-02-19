form = document.getElementById("form")


form.addEventListener("submit", function(event){
    const ageInput = document.getElementById("age").value;
    const ageWarning = document.getElementById("ageWarning");
    if(ageInput < 16){
        event.preventDefault();
        ageWarning.style.display = "block";
        return;
    }
    ageWarning.style.display = "none";
    alert("Form Submitted Successfully!!!")
});