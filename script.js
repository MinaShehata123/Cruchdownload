let menu = document.getElementById("menuicon");

let menudiv = document.getElementById("menutrue");

document.getElementById("btn").addEventListener('click', function(){
  
  window.location.href='https://download1085.mediafire.com/1h88ijj1gqlgJNgGhqe3AmhJ6rfbauC3ORXQlCq5k2jnishq3JaN0Bzo5oWrWDlCjikfuhEjcPR_TnNa_DyldLe_t3dPBn-U1j6HyYVf6OOLoQiRbKQNrV9Zw50FZSJ1COyeI-TjPBq80vvV387qvaZMJj-o47xcgegKgkV3tJs7/vimj04ie5fnae8f/%D9%83%D9%86%D9%8A%D8%B3%D8%A9+%D9%85%D8%A7%D8%B1%D8%AC%D8%B1%D8%AC%D8%B3+%D8%A8%D9%85%D8%B7%D8%A7%D9%8A_1.0.apk'
  
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


