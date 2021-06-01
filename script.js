const ham = document.querySelector(".ham"),
        mNav = document.querySelector(".m-nav"),
        closeBtn = document.querySelector(".m-close"),
        subMenu = document.querySelectorAll(".m-wrap ul li");

ham.addEventListener("click", () => {
    mNav.classList.add("click");
})

closeBtn.addEventListener("click", () => [
    mNav.classList.remove("click")
])


subMenu.forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.classList.add("hover");
    })
    el.addEventListener("mouseout", () => {
        el.classList.remove("hover");
    })
})