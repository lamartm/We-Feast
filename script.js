let toggleHamburg = false
    
document.getElementById("hamburger").addEventListener("click", function () {
    let getHamburger = document.querySelector(".toggle-menu")
/* Als je toggleHamburg false is krijg je display:block te zien waardoor de filter functie verschijnt*/
    getHamburger.classList.toggle('toggle-menu-test')
})
    
