const panels=document.querySelectorAll('.panel')
panels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        removeActive();
        panel.classList.add("active")
    })
})
const removeActive=()=>{
    panels.forEach(el=>{
        el.classList.remove("active")
    })
}