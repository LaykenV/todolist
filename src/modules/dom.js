const dropMenu = function() {
    const dropDownBtn = document.querySelector(".dropbutton");
    const dropDown = document.querySelector(".dropdown");
    console.log("works");
    dropDown.classList.add("gone");
    dropDownBtn.addEventListener("click", function() {
       dropDown.classList.toggle("gone");
    });
}
export {dropMenu};