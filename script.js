let menu = document.getElementById("menuicon");

let menudiv = document.getElementById("menutrue");

document.getElementById("btn").addEventListener('click', function(){
  
  window.location.href='https://www.dropbox.com/scl/fi/tzru7uj1bixhenca1rlxh/_1.0.apk?rlkey=kzquksl9xux3khgbicobhc1cq&st=blahzye9&dl=1'
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


