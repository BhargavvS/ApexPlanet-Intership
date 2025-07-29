const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')

card1.addEventListener('click', () => {
     alert("Hello! I am Web Developer");
})

card2.addEventListener('click', () => {
     alert("Hello! I am Moblie Developer");
})

card3.addEventListener('click', () => {
     alert("Hello! I am App Developer");
})

const list = document.querySelectorAll('.list');

list.forEach( function (item) {
    item.addEventListener('click' , function(e) {
        if(e.target.id === "home") {
            window.location.href = "landingPage.html";
        }
        if(e.target.id === "AboutMe") {
            alert("Hello! I am Bhargav S, a Full Stack Developer");
        } 

        if(e.target.id === "contact") {
             alert("Hello! You can contact me at bhargav.s@outlook.com");
        }


       
})
});