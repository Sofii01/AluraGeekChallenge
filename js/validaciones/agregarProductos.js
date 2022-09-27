const inputs = document.querySelectorAll("[data-text]");

export const validarInputs = ()=>{
    inputs.forEach((input) =>{
        console.log(input);
        input.addEventListener("blur", ()=>{
            if (input.target == null) {
                input.classList.toggle("input-container--invalid");
            }
        });
    });
};

