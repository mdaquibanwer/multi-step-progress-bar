const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let currentStep = 1;

const updateSteps = (e)=>{
    currentStep = e.target.id === "next" ? currentStep+1 : currentStep-1;
    // console.log(currentStep)
    circles.forEach((circle,index)=>{
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    })
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
    if(currentStep === circles.length){
        buttons[1].disabled = true;
    }else if(currentStep === 1){
        buttons[0].disabled = true;
    }else{
        buttons.forEach(btn =>{
            btn.disabled = false;
        })
    }
}

buttons.forEach(btn=>{
    btn.addEventListener("click",updateSteps)
})