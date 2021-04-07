const button = document.getElementById("subButton");
button.addEventListener("click", (e) =>{;
    const areaNode = document.querySelector(".subArea");
    if(areaNode.style.opacity == "0"){
        areaNode.style.opacity = "1";
        areaNode.style.zIndex = "10";
        areaNode.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
})
const closeBtn = document.getElementById("closebtn");
closeBtn.addEventListener("click", () =>{
    const areaNode = document.querySelector(".subArea");
    console.log("Hi")
    areaNode.style.opacity = "0";
        areaNode.style.zIndex = "-5";
        areaNode.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
})