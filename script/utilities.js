document.getElementById('blog')
.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href="./blog.html"
})


const days = document.getElementById('realDay')
days.innerText= new Date().toLocaleDateString("en-US",{weekday: "short"});


const date = document.getElementById('realDate')
date.innerText=new Date().toLocaleDateString("en-US", {
  year:"numeric",
  month:"short",
  day : "numeric"
})




const colors =["#F8F9FA","#E3F2FD"," #F1F8E9 ","#FFF3E0","#FCE4EC","#EDE7F6","#F0F4C3","#D1C4E9","#FFEBEE","#F5F5F5" ];
const themeColors = document.getElementById('colorChange')
themeColors.addEventListener('click', ()=> {
   const randomColor = colors[Math.floor(Math.random() * 11)];
   document.body.style.backgroundColor =randomColor;
})