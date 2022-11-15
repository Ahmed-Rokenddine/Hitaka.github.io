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
        document.querySelectorAll(e.target.dataset.filter).forEach((el3)=>{
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
    
     
     
		function getValue() {
        document.listForm.total.value = '';
			var checkboxes =
				document.getElementsByName('laptop');

			var result = "";
            var sum=0;
            var sumfinal;
            var x ;

			
            for (var i = 0; i < checkboxes.length; i++) {
				if (checkboxes[i].value != 0) {
                    x = checkboxes[i].placeholder;
                    sumfinal = checkboxes[i].value  ;
                    sum =  sum + parseInt(x*sumfinal)
					
                    console.log(i)
                    document.listForm.total.value = sum;
				}
                
			}
					

           
		}
        function showValue() {
        document.platform.total.value = '';
        var checkboxes =
				document.getElementsByName('laptop');
                var result = "";
                for (var i = 0; i < checkboxes.length; i++) {
				if (checkboxes[i].value != 0) {
					result += checkboxes[i].value+ " x " + checkboxes[i].id
                    +"\n";
                    console.log(i)
					
				}
                document.platform.total.value = result;	
			}
            
                    
                    }
                    function foo() {   alert("Commande Validé!");
   return true;
}
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  getValue();showValue()
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    
  }
  getValue();showValue()
}
function sidebar() {
    var element = document.getElementById("nav-bar");
    element.classList.toggle("navbar2");
    var element = document.getElementById("closer");
    element.classList.toggle("closed2");
    var element = document.getElementById("side");
    element.classList.toggle("btncloser");
    
 };
 function closebar() {
    var element = document.getElementById("nav-bar");
    element.classList.remove("navbar2");
    var element = document.getElementById("closer");
    element.classList.remove("closed2");
    var element = document.getElementById("side");
     element.classList.remove("btncloser");
    
 };
 function savecommande(){
 var input = document.getElementById('saveServer').value;
 localStorage.setItem('total', input);
 }
 
 
    