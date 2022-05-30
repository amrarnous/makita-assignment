const sublistDropdown = document.querySelectorAll(".sublist-dropdown"),
        sublistItems = document.querySelectorAll(".navbar-mobile-sublist li");
        navbarMenu = document.querySelector(".navbar-actions-menu"),
        navbarMobileClose = document.querySelector(".navbar-mobile-menu-close"),
        navbarMobile = document.querySelector(".navbar-mobile-menu");

sublistItems.forEach(sublistItem => {
    sublistItem.onclick = (e) => {
        e.stopPropagation();
        
    }
})
sublistDropdown.forEach(listItem => {
    listItem.onclick = (e) => {
        e.stopPropagation();
        
        if (listItem.classList.contains("active")){
            listItem.classList.remove("active");
        } else {
            listItem.classList.add("active");
        }
    }
})
navbarMenu.onclick = () => {
    document.body.style.overflow = "hidden";
    navbarMobile.style.display = "flex";
    setTimeout(()=> {
        navbarMobile.classList.remove("hide");
    }, 250);
}
navbarMobileClose.onclick = () => {
    document.body.style.overflow = "auto";
    navbarMobile.classList.add("hide");
    setTimeout(()=> {
        navbarMobile.style.display = "none";
    }, 250);
}
