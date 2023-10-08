document.getElementById("buttonQuiz").addEventListener("click", function(event){
    event.preventDefault();

    let countA = 0, countB = 0, countC = 0;
    const selectedOptions = document.querySelectorAll(".opcionQuiz:checked");

    selectedOptions.forEach(function(option){
        switch(option.value) {
            case "tacos":
            case "antiguos":
            case "mercados":
            case "playas":
            case "español":
            case "prehispanica":
            case "cumbia":
            case "artesanias":
                countA++;
                break;
            case "pizza":
            case "renacentistas":
            case "viñedos":
            case "pueblos":
            case "italiano":
            case "romana":
            case "clasica":
            case "esculturas":
                countB++;
                break;
            default:
                countC++;
                break;
        }
    });

    const quizForm = document.querySelector(".quizForm");
    quizForm.style.display = "none";

    const contenedorResultado = document.querySelector(".contedorResultado");
    const imprimirResultado = document.getElementById("imprimirResultado");

    if(countA > countB && countA > countC) {
        document.getElementById("imgMexico").style.display = "block";
        imprimirResultado.innerText = "¡Deberías visitar México!";
    } else if(countB > countA && countB > countC) {
        document.getElementById("imgItalia").style.display = "block";
        imprimirResultado.innerText = "¡Deberías visitar Italia!";
    } else if(countC > countA && countC > countB) {
        document.getElementById("imgUSA").style.display = "block";
        imprimirResultado.innerText = "¡Deberías visitar USA!";
    } else {
        imprimirResultado.innerText = "Tienes intereses variados. ¡Cualquier país sería una buena elección!";
    }

    contenedorResultado.style.display = "flex";
});
