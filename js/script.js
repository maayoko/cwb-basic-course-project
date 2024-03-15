(function(document, window) {
    document.addEventListener("DOMContentLoaded", () => {
        const mobileNavMenuIconLink = document.querySelector(".mobile-nav__menu-icon");
        const mobileNavMenuIcon = mobileNavMenuIconLink.querySelector("i");
        const navigationMenu = document.querySelector(".navigation--2");
        let menuOpened = false;
        
        mobileNavMenuIcon.onclick = function() {
            if (!menuOpened) {
                mobileNavMenuIcon.className = "lni lni-close";
                navigationMenu.style.display = "block";
                menuOpened = true;
            } else {
                mobileNavMenuIcon.className = "lni lni-menu";
                navigationMenu.style.display = "none";
                menuOpened = false;
            }
        }

    });
}(document, window));