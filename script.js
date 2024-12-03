let menu = document.getElementById("menuicon");

let menudiv = document.getElementById("menutrue");

document.getElementById("btn").addEventListener('click', function(){
  
  alert('التطبيق تحت التطوير سيتوفر قريبا ');
})


menu.addEventListener("click" , function() {
  
navigator.vibrate("100");




if (menudiv.style.display === "none" || menudiv.style.display === "") {
                menudiv.style.display = "block";
                
                document.body.style.overflow = 'hidden';
                
            } else {
                menudiv.style.display = "none";
                
                document.body.style.overflow = 'auto';
            }
    
  
});


