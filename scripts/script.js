var navInput = document.getElementById("navdrawer");
var noShow = Array.from(document.querySelectorAll(".noshow"))
var nav = document.querySelector("nav");
var header = document.querySelector("header")
var state = window.scrollY
function handleOpen(){
    nav.classList.toggle("navopen",navInput.checked)
}
window.addEventListener("scroll",() => {
    header.classList.toggle("up",window.scrollY < state)
    state = window.scrollY
})
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold:.3,
})

noShow.forEach(el => {
    observer.observe(el)
})