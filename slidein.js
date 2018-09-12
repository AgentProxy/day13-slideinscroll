const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    sliderImages.forEach(slideImage=>{
        console.log(slideImage.height);
        //window. scrolY + window.innerHeight is the actual full height and coordinate of the browser html
        const slideInAt = (window.scrollY + window.innerHeight)-slideImage.height/2;
        //give u coordinates of scroll from the bottom view. So coordinates of top to bottom
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            slideImage.classList.add('active');
        }
        else{
            slideImage.classList.remove('active');
        }
    })
}

function debounce(func, wait = 20, immediate = true){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(context,args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context, args);
    };
};

window.addEventListener('scroll', debounce(checkSlide));