document.querySelector(".autos").addEventListener("click",function(event){
    const ele = event.target;
    var st = ele.innerText;
    document.querySelector("input[type=text]").setAttribute("value",st)
})