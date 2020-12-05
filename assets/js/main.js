
/* Navigation */

var navigation = document.querySelector("#navigation");
var navLink = ["home", "about us", "menu", "reservation", "contact", "author", "documentation"];
var navLinkHref = ["index.html", "#aboutUs", "#menu", "#reservation", "#contact", "#author", "#documentation"];
var ulNav = document.createElement("ul");
ulNav.setAttribute("id", "navigationUl");

for(indeks in navLink){
    var liNav = document.createElement("li");
    var aNav = document.createElement("a");
    aNav.setAttribute("href", navLinkHref[indeks]);
    aNav.innerHTML = navLink[indeks];
    aNav.classList.add("fs-15");
    aNav.classList.add("text-uppercase");
    liNav.appendChild(aNav);
    ulNav.appendChild(liNav);
}
navigation.appendChild(ulNav);
/* End of navigation */

 /* Slider*/

    var slides = document.getElementById("slider-container");

    var slidesSmallTitleContent = ["Welcome", "Delicious", "Idbhshbd"];
    var slidesBigTitleContent = ["To the Taste of Italy", "Lorem ipsum", "Ljsbdkjbsd jksdbkjvb "];
    var slidesTextContent = ["known as the best place to enjoy in real Italian food", "hbsdhbsad jsdbgabshgd jhsabghjbdg ajhdbgjhbfga", "hbsdhbsad jsdbgabshgd jhsabghjbdg ajhdbgjhbfga"];

    var slidesSmallTitle = document.getElementById("small-title");
    var slidesBigTitle = document.getElementById("big-title");
    var slidesText = document.getElementById("text");
    
    var slidesDots = document.getElementsByClassName("slider-dots-item");
    var slidesDotsArray = Array.from(slidesDots);
   
   var indexOfSlides = 1;
   slideShow();
   function slideShow(){
        slides.classList.add("animationSlideIn");
        var slideUrl = `url(assets/img/slider${indexOfSlides}.jpg)`;
        slides.style.backgroundImage = slideUrl;

        slidesSmallTitle.textContent = slidesSmallTitleContent[indexOfSlides-1];
        slidesBigTitle.textContent = slidesBigTitleContent[indexOfSlides-1];
        slidesText.textContent = slidesTextContent[indexOfSlides-1]; 
       
        for (i = 0; i < slidesDotsArray.length; i++) {
            slidesDotsArray[i].className = slidesDotsArray[i].className.replace(" slider-dots-item-active", "");
        }

        slidesDotsArray[indexOfSlides-1].className += " slider-dots-item-active";

        indexOfSlides ++;
        if(indexOfSlides > 3) indexOfSlides = 1;
       setTimeout(slideShow, 4000);
   }

/* End of slider */