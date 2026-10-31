
const letters = document.querySelectorAll(".letters span");

letters.forEach((letter)=>{

    letter.addEventListener("click",(e)=>{
        e.target.classList.add("active");

        setTimeout(()=>{
        e.target.classList.remove("active");
        },3000)
    });
});