let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex)

function showProject(num) {
    if(num > project.length){
        slideIndex = 1;
    }

    if (num < 1) {
        slideIndex = project.length;
    }
    for (let i=0; i < project.length; i++){
        project[i].style.display = "none";
    }
    project[slideIndex-1].style.display = "flex";
}

function navigateProject(num) {
    showProject((slideIndex += num));
}

let exp = document.getElementsByClassName("experience");
let slIndex = 1;

showExperince(slIndex)

function showExperince(num1) {
    if(num1 > exp.length){
        slIndex = 1;
    }

    if (num1 < 1) {
        slIndex = exp.length;
    }
    for (let j=0; j < exp.length; j++){
        exp[j].style.display = "none";
    }
    exp[slIndex-1].style.display = "flex";
}

function navigateExp(num1) {
    showExperince((slIndex += num1));
}