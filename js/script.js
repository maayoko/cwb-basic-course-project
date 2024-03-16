(function(document, window) {
    document.addEventListener("DOMContentLoaded", () => {
        const mobileNavMenuIconLink = document.querySelector(".mobile-nav__menu-icon");
        const mobileNavMenuIcon = mobileNavMenuIconLink.querySelector("i");
        const navigationMenu = document.querySelector(".navigation--2");
        let menuOpened = false;
        
        mobileNavMenuIcon.onclick = function() {
            if (!menuOpened) {
                // Leave all styles in css files and toggle here only class names
                mobileNavMenuIcon.className = "lni lni-close";
                navigationMenu.classList.add("active");
                menuOpened = true;
            } else {
                mobileNavMenuIcon.className = "lni lni-menu";
                navigationMenu.classList.remove("active");
                menuOpened = false;
            }
        }

    });
}(document, window));