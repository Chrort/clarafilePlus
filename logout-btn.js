window.addEventListener("load", () => {   
    const aTags = document.getElementById("carousel-item-main")?.querySelectorAll("a");
    const logoutHref = aTags[aTags.length - 1]?.href;
    const moreMenuUl = document.querySelector('nav.moremenu.navigation > ul.nav.more-nav.navbar-nav');

    moreMenuUl?.insertBefore(createNewLiElement(logoutHref), moreMenuUl.firstChild);
});

const createNewLiElement = link => {
    let logoutLi = document.createElement("li");

    logoutLi.classList.add("nav-item");
    logoutLi.role = "none";
    logoutLi.innerHTML = `<a role="menuitem" class="nav-link"
                                    href="${link}"
                                    data-disableactive="true"
                                    tabindex="-1"
                                >
                                    Logout
                                </a>`;
    return logoutLi;
}