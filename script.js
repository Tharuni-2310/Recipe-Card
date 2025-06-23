function toggleDetails(btn){
   const details = btn.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
        btn.innerText = "Show Ingredients Required";
      } else {
        details.style.display = "block";
        btn.innerText = "Hide Ingredients Required";
      }
}
function togglesteps(btn){
  const details = btn.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
        btn.innerText = "Show Steps";
      } else {
        details.style.display = "block";
        btn.innerText = "Hide Steps";
      }
}

let currentStep = 0;
const totalSteps = 6;
function start(){
  if(currentStep==0){
     currentStep=1;
     const progress = (currentStep / totalSteps) * 100;
    document.getElementById("bar").style.width = progress + "%";
    updateSteps();

  }
  if(currentStep=totalSteps){
    currentStep=1;
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById("bar").style.width = progress + "%";
    updateSteps();
  }
}
function next() {
  if (currentStep < totalSteps && currentStep>0) {
      currentStep++;
      const progress = (currentStep / totalSteps) * 100;
      document.getElementById("bar").style.width = progress + "%";
      updateSteps();
  }
  else{
    steps.forEach((step, index) => {
      step.classList.remove("active");});
  }
}
const steps = document.querySelectorAll("#stepList li");

  function updateSteps() {
    steps.forEach((step, index) => {
      step.classList.remove("active");
      if (index === currentStep-1) {
        step.classList.add("active");
      }
    });
  }
