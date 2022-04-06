document.addEventListener("DOMContentLoaded",()=>{
    let pageH = document.querySelector(".page_hide")
    let buttonMenu = document.querySelector(".center")
    buttonMenu.addEventListener('click',()=>{
        pageH.classList.toggle("page_show")

    })
})