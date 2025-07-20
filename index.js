console.clear();

//you can also FindElementsByClass as all imgs are added 'slide' class
let Slides = document.querySelectorAll(".slider img");
let CurrentIndex = 0;
let IntervalHandle = null;

document.addEventListener("DOMContentLoaded", InitializeSlider);

// InitializeSlider();

function InitializeSlider(event) {
    if(Slides.length > 0){
        Slides[CurrentIndex].classList.add("DisplaySlide");    
        IntervalHandle = setInterval(NextSlide, 3000);
        console.log(IntervalHandle);
    }
}

function PrevSlide(){
    clearInterval(IntervalHandle);
    
    if(CurrentIndex > 0){
        CurrentIndex -= 1;
    }
    else{
        CurrentIndex = Slides.length - 1;
    }
    ShowSlide();  
}

function NextSlide(){
    clearInterval(IntervalHandle);
    
    if(CurrentIndex < Slides.length-1){
        CurrentIndex++;
    }
    else{
        CurrentIndex = 0;
    }
    ShowSlide();
}

function ShowSlide(){
    Slides.forEach((slide) => {
        slide.classList.remove("DisplaySlide");
    })
    
    Slides[CurrentIndex].classList.add("DisplaySlide");

    //after show should we set interval again: may be adding an option to disable auto-next for User to choose right? yeah!
    IntervalHandle = setInterval(NextSlide, 6000);
}

