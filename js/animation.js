const roles = ["Data Analyst", "Full Stack Developer"];
const typingElement = document.getElementById("typing-text");

let roleIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 
function typeEffect() {
  const currentRole = roles[roleIndex]; 
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }
  const typingSpeed = isDeleting ? 50 : 100;
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

const heroineImage = document.querySelector("#heroine__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__button");
const trBtn = document.querySelector("#grid__tr__button");
const blBtn = document.querySelector("#grid__bl__button");
const brBtn = document.querySelector("#grid__br__button");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const expOne = document.querySelector(".e-1");
const expTwo = document.querySelector(".e-2");
// const projectThree = document.querySelector(".p-3");



const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-10vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

let activeCorner = "";

window.addEventListener("resize", handleWindowResize);

//Function that handles the resizing the window 

function handleWindowResize(){
    switch(activeCorner){
        case "top-left":
            if(window.innerWidth <= 1100){
                tlActive = "translateX(0) translateY(0)";
                tlContent.style.transform = "translateX(0vw) translateY(0)";
                tlContent.style.width= "100vw";
                tlContent.style.height = "100vh";
                tlContent.style.top= "0";
                tlContent.style.display = "flex";
                tlContent.style.alignItems= "center";
                tlContent.style.justifyContent = "center";
                tlContent.style.background = "var(--bg-transparent)";
                tlContent.style.zIndex = "200";
                tlBtn.style.zIndex = "300";
                trBtn.style.zIndex = "100";
                blBtn.style.zIndex = "100";
                brBtn.style.zIndex = "100";

            }
            else{
                tlActive = "translateX(5vw) translateY(0)";
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.width = "30vw";
                tlContent.style.height = "0";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
            }
            break;
        case "top-right":
            if(window.innerWidth <= 600){
                trActive = "translateX(0) translateY(0)";
                trContent.style.transform = "translateX(0vw) translateY(0)";
                trContent.style.width= "100vw";
                trContent.style.height = "100vh";
                trContent.style.top= "0";
                trContent.style.display = "flex";
                trContent.style.alignItems= "center";
                trContent.style.justifyContent = "center";
                trContent.style.background = "var(--bg-transparent)";
                trContent.style.zIndex = "200";
                trBtn.style.zIndex = "300";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "100";
                brBtn.style.zIndex = "100";
                expOne.style.width = "75%";
                expOne.style.margin = "auto auto 0.5rem";
                expTwo.style.width = "75%";
                expTwo.style.margin = "auto auto 0.5rem";

            }
            else if(window.innerWidth <= 1100){
                trActive = "translateX(0) translateY(0)";
                trContent.style.transform = "translateX(0vw) translateY(0)";
                trContent.style.width= "100vw";
                trContent.style.height = "100vh";
                trContent.style.top= "0";
                trContent.style.display = "flex";
                trContent.style.alignItems= "center";
                trContent.style.justifyContent = "center";
                trContent.style.background = "var(--bg-transparent)";
                trContent.style.zIndex = "200";
                trBtn.style.zIndex = "300";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "100";
                brBtn.style.zIndex = "100";
                expOne.style.width = "80%";
                expOne.style.margin = "auto auto 0.5rem";
                expTwo.style.width = "80%";
                expTwo.style.margin = "auto auto 0.5rem";

            }
            else{
                trActive = "translateX(-5vw) translateY(0)";
                trContent.style.transform = "translateX(-5vw) translateY(0)";
                trContent.style.width = "30vw";
                trContent.style.height = "0";
                trContent.style.top = "10vh";
                trContent.style.display = "block";
                expOne.style.width = "100%";
                expTwo.style.width = "100%";
                
            }
            break;
        case "bottom-left":
            if(window.innerWidth <= 600){
                blActive = "translateX(0) translateY(0)";
                blContent.style.transform = "translateX(0vw) translateY(0)";
                blContent.style.width= "100vw";
                blContent.style.height = "100vh";
                blContent.style.top= "0";
                blContent.style.display = "flex";
                blContent.style.alignItems= "center";
                blContent.style.justifyContent = "center";
                blContent.style.background = "var(--bg-transparent)";
                blContent.style.zIndex = "200";
                trBtn.style.zIndex = "100";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "300";
                brBtn.style.zIndex = "100";
                projectOne.style.width = "70%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "70%";
                projectTwo.style.margin = "auto auto 0.5rem";


            }
            else if(window.innerWidth <= 1100){
                blActive = "translateX(0) translateY(0)";
                blContent.style.transform = "translateX(0vw) translateY(0)";
                blContent.style.width= "100vw";
                blContent.style.height = "100vh";
                blContent.style.top= "0";
                blContent.style.display = "flex";
                blContent.style.alignItems= "center";
                blContent.style.justifyContent = "center";
                blContent.style.background = "var(--bg-transparent)";
                blContent.style.zIndex = "200";
                trBtn.style.zIndex = "100";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "300";
                brBtn.style.zIndex = "100";
                projectOne.style.width = "40%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "40%";
                projectTwo.style.margin = "auto auto 0.5rem";

            }
            else{
                blActive = "translateX(10vw) translateY(7vh)";
                blContent.style.transform = "translateX(10vw) translateY(7vh)";
                blContent.style.width = "15rem";
                blContent.style.height = "0";
                blContent.style.top = "40vh";
                blContent.style.display = "block";
                projectOne.style.width = "100%";
                projectTwo.style.width = "100%";
                
            }
            break;
        case "bottom-right":
            if(window.innerWidth <= 1100){
                brActive = "translateX(0) translateY(0)";
                brContent.style.transform = "translateX(0vw) translateY(0)";
                brContent.style.width= "100vw";
                brContent.style.height = "100vh";
                brContent.style.top= "0";
                brContent.style.display = "flex";
                brContent.style.flexDirection = "column";
                brContent.style.alignItems= "center";
                brContent.style.justifyContent = "center";
                brContent.style.background = "var(--bg-transparent)";
                brContent.style.zIndex = "200";
                trBtn.style.zIndex = "100";
                tlBtn.style.zIndex = "100";
                blBtn.style.zIndex = "100";
                brBtn.style.zIndex = "300";
                

            }
            else{
                brActive = "translateX(-5vw) translateY(0vh)";
                brContent.style.transform = "translateX(-5vw) translateY(0vh)";
                brContent.style.width = "30vw";
                brContent.style.height = "0";
                brContent.style.bottom = "30vh";
                brContent.style.display = "block";
                
            }
            break;
        default:

     }
 }

let lastReverseAnimation = "";

function playAnimation(animation, reverseAnimation) {
    heroineImage.className = "";
    if(lastReverseAnimation !== ""){
        heroineImage.classList.add(lastReverseAnimation);
        setTimeout(function () {
            heroineImage.classList.remove(lastReverseAnimation);
            heroineImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;
        }, 200);
    } else {
        heroineImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }
}
function playClosingAnimation(reverseAnimation) {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";
    switch (activeCorner) {
        case "top-left":
            tlBtn.style.background = bgColor;
            tlBtn.style.color = textColor;
            tlContent.style.transform = tlHidden;
            break;
        case "top-right":
            trBtn.style.background = bgColor;
            trBtn.style.color = textColor;
            trContent.style.transform = trHidden;
            break;
        case "bottom-left":
            blBtn.style.background = bgColor;
            blBtn.style.color = textColor;
            blContent.style.transform = blHidden;
            break;
        case "bottom-right":
            brBtn.style.background = bgColor;
            brBtn.style.color = textColor;
            brContent.style.transform = brHidden;
            break;
        default:

    }
    heroineImage.className ="";
    lastReverseAnimation = "";
    activeCorner = "";
    heroineImage.classList.add(reverseAnimation);
    setTimeout(function() {
        heroineImage.classList.remove(reverseAnimation);
    },200);
 }

tlBtn.onclick = function () {
    if(activeCorner === "top-left"){
        playClosingAnimation("reverse-animate-top-left")
    }else {
        trBtn.innerHTML = "Experience";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contact";

        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";
        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        tlBtn.style.background = bgColorAlt;
        
        trBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        tlBtn.style.color = textColorAlt;
        
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }

};

trBtn.onclick = function () {
    if(activeCorner === "top-right"){
        playClosingAnimation("reverse-animate-top-right")
    }else {
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Projects";
        brBtn.innerHTML = "Contact";

        activeCorner = "top-right";
        trBtn.innerHTML = "&uarr; <br/> Experience";
        handleWindowResize();
        playAnimation("animate-top-right", "reverse-animate-top-right");

        tlBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        trBtn.style.background = bgColorAlt;
        
        tlBtn.style.color = textColor;
        brBtn.style.color = textColor;
        blBtn.style.color = textColor;
        trBtn.style.color = textColorAlt;
        
        tlContent.style.transform = tlHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        trContent.style.transform = trActive;
    }

};


blBtn.onclick = function () {
    if(activeCorner === "bottom-left"){
        playClosingAnimation("reverse-animate-bottom-left")
    }else {
        tlBtn.innerHTML = "About";
        trBtn.innerHTML = "Experience";
        brBtn.innerHTML = "Contact";

        activeCorner = "bottom-left";
        blBtn.innerHTML = "Projects <br/> &darr;";
        handleWindowResize();
        playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

        trBtn.style.background = bgColor;
        brBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;
        blBtn.style.background = bgColorAlt;
        
        trBtn.style.color = textColor;
       brBtn.style.color = textColor;
        tlBtn.style.color = textColor;
        blBtn.style.color = textColorAlt;
        
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        tlContent.style.transform = tlHidden;
        blContent.style.transform = blActive;
    }

};


brBtn.onclick = function () {
    if(activeCorner === "bottom-right"){
        playClosingAnimation("reverse-animate-bottom-right")
    }else {
        tlBtn.innerHTML = "About";
        blBtn.innerHTML = "Projects";
        trBtn.innerHTML = "Experience";

        activeCorner = "bottom-right";
        brBtn.innerHTML = "Contact<br/>&darr;";
        handleWindowResize();
        playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

        trBtn.style.background = bgColor;
        tlBtn.style.background = bgColor;
        blBtn.style.background = bgColor;
        brBtn.style.background = bgColorAlt;
        
        trBtn.style.color = textColor;
        tlBtn.style.color = textColor;
        blBtn.style.color = textColor;
        brBtn.style.color = textColorAlt;
        
        trContent.style.transform = trHidden;
        tlContent.style.transform = tlHidden;
        blContent.style.transform = blHidden;
        brContent.style.transform = brActive;
    }

};