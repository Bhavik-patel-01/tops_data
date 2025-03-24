// JavaScript to toggle the navigation menu on mobile
const barLogo = document.querySelector('.bar-logo');

// Toggle menu on hamburger click
barLogo.addEventListener('click', function() {
    const row = document.querySelector('.row');
    row.classList.toggle('active');
});


index = 0;
function controller(x)
{  
    //0 = 0 + 1 
    //1 = 1 + 1 
    //2 = 2 + (-1)
    //1 = 1 + (-1)
    //0
    index = index + x; 
    slideshow(index);
}

//slider

function slideshow(num)
{
    let slides = document.getElementsByClassName('silder');
    // console.log(slides);

    //last 0 
    if(num == slides.length)
    {
        index=0;
        num=0
    }

    if(num < 0)
    {
        index = slides.length-1; 
        num = slides.length-1;
    }
    
    for(let y of slides)
    {
        y.style.display = "none"
    }
   
    slides[num].style.display = "block";
    
}