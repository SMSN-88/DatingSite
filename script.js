const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementsList = document.querySelectorAll(".requirement-list li");


eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;

});

let count = 0;
function myFunction() {
  count+=1;
  document.getElementById("btn").innerHTML = count;
}