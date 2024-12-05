let menu = document.getElementById("menuicon");

let menudiv = document.getElementById("menutrue");

let facebook = document.getElementById('facebook');


facebook.addEventListener('click', function(){
  
  window.location.href='https://www.facebook.com/groups/stgeorgematay/?ref=share&mibextid=NSMWBT'
  
  
})



let yot = document.getElementById('yot');





yot.addEventListener('click', function(){
  
  window.location.href='https://youtube.com/@fathertemothawesfarag?si=MsTBgx0HSNuSqsTd'
  
})



document.getElementById("btn").addEventListener('click', function() {

    alert('التطبيق تحت التطوير سيتوفر قريبا ');
})


menu.addEventListener("click", function() {

    navigator.vibrate("100");




    if (menudiv.style.display === "none" || menudiv.style.display === "") {
        menudiv.style.display = "block";

        document.body.style.overflow = 'hidden';

    } else {
        menudiv.style.display = "none";

        document.body.style.overflow = 'auto';
    }


});



function showweb() {
  // Tab to edit
  
  
  document.getElementById("about").style.display="block";
  
  
  document.getElementById("menutrue").style.display="none";
  


}


document.getElementById("exit").addEventListener('click', function(){
  
  document.getElementById("about").style.display="none";
  
  
  
  document.body.style.overflow = 'auto';
})
