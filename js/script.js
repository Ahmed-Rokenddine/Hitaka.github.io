let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
        })
        e.target.style.color = "#d4a373"
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})



menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

    
  
      
    
    function myFunction() {
        var element = document.getElementById("side");
        element.classList.toggle("hide");
        var element = document.getElementById("outside");
        element.classList.toggle("uncal");
     };
     function youFunction() {
        var element = document.getElementById("side");
        element.classList.remove("hide");
        var element = document.getElementById("outside");
        element.classList.remove("uncal");
     };
    
     
    
 
    