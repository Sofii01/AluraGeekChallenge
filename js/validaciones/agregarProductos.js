const inputs = document.querySelectorAll("[data-text]");

inputs.forEach((input) =>{
    console.log(input);
    input.addEventListener("blur", ()=>{
        if (input.target == null) {
            input.classList.toggle("input-container--invalid");
        }
    });
});


const btn = document.querySelector("[data-button]");
btn.addEventListener("submit", ()=>{
    
})