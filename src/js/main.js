document.getElementById("menu-icon").addEventListener("click", (event) =>{   
document.getElementById("menu").classList.toggle("active");
document.getElementById("cross").classList.toggle("active");
document.getElementById("cross").classList.toggle("hidden");
document.getElementById("burger").classList.toggle("hidden");
      });
    
document.getElementById("logo").addEventListener("click", (event) =>{
window.open("../pages/index.html",'_self');
      });

document.getElementById("menu-list").addEventListener("click", (event) =>{   
 document.getElementById("list-item").classList.toggle("active");
});