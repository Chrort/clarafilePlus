const logoutHref = document.getElementById("carousel-item-main").querySelectorAll("a")[document.getElementById("carousel-item-main").querySelectorAll("a").length - 1].href;
const moreMenuUl = document.querySelector('nav.moremenu.navigation > ul.nav.more-nav.navbar-nav')

window.addEventListener("load", () => {   
    moreMenuUl.insertBefore(createNewLiElement(), moreMenuUl.firstChild);
});

const createNewLiElement = () => {
    let logoutLi = document.createElement("li");

    logoutLi.classList.add("nav-item");
    logoutLi.role = "none";
    logoutLi.innerHTML = `<a role="menuitem" class="nav-link"
                                    href="${logoutHref}"
                                    data-disableactive="true"
                                    tabindex="-1"
                                >
                                    Logout
                                </a>`;
    return logoutLi;
}