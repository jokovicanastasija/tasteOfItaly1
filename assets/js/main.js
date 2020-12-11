
    /* Navigation */

    var navigation = document.querySelector("#navigation");
    var navLink = ["home", "about us", "menu", "reservation", "contact", "author", "documentation"];
    var navLinkHref = ["index.html", "#aboutUs", "#Menu", "#Reservation", "#Contact", "#Author", "documentation.pdf"];
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

 /* Slider*/

    var slides = document.getElementById("slider-container");

    var slidesSmallTitleContent = ["Welcome", "Delicious", "Enjoy"];
    var slidesBigTitleContent = ["To the Taste of Italy", "food specialties", "with your company"];
    var slidesTextContent = ["known as the best place to enjoy in Italian food", "are waiting for you to try them", "in our pleasant ambient and good service"];

    var slidesSmallTitle = document.getElementById("small-title");
    var slidesBigTitle = document.getElementById("big-title");
    var slidesText = document.getElementById("text");
    
    var slidesDots = document.querySelectorAll("#slider-item-content > ul > .dots-item");
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
            slidesDotsArray[i].className = slidesDotsArray[i].className.replace("dots-item-active", "");
        }

        slidesDotsArray[indexOfSlides-1].className += " dots-item-active";

        indexOfSlides ++;
        if(indexOfSlides > 3) indexOfSlides = 1;
       setTimeout(slideShow, 4000);
   }

/*MENU */
var menuBreakfast1 = document.querySelector("#breakfast > div:nth-child(1) ul");
var menuBreakfast2 = document.querySelector("#breakfast > div:nth-child(2) ul");
var menuMeals1 = document.querySelector("#meals > div:nth-child(1) ul");
var menuMeals2 = document.querySelector("#meals > div:nth-child(2) ul");
var menuDesserts1 = document.querySelector("#desserts > div:nth-child(1) ul");
var menuDesserts2 = document.querySelector("#desserts > div:nth-child(2) ul");
var menuDrinks1 = document.querySelector("#drinks > div:nth-child(1) ul");
var menuDrinks2 = document.querySelector("#drinks > div:nth-child(2) ul");

var menuBreakfastImages = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
var menuBreakfastTitle = ["Calzone with mutti pizza sauce", "Tuna salad", "Calzone with minced meat", "Risotto with pears and parmesan", "Healthy green paste", "Dolce vita salad", "Zucchini carpaccio", "Quinoa with broccoli and lemon", "Ciabatta with vegetables", "Panzerotti"];
var menuBreakfastPrice = ["17.7", "12.50", "15.70", "13.70", "18.7", "15.7", "13.75", "16.50", "12.00", "11.25"];
var menuBreakfastDescription = ["with mutti pizza sauce, ham, parmesan", "with tuna, zucchini, red onion, red pepper", "minced meat, cheese, presli, egg, onion", "with pears, parmesan, white wine, cold butter, onion, vegetable broth", "with spaghetti, chicken file, onion, presli, avocado, parmesan", "with rocket, lettuce, peach, prosciutto", "with zucchini, rocket, garlic, vinegar, olive oil", "with lemon, borccoli, tomatoes, olives, presli", "with bread, red pepper, green pepper, eggplant, tomatoes", "with butter, yogurt, ham, cheese, ketchup, dried persun"];


var menuMealsImages = ["10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg"];
var menuMealsTitle = ["Pasta with pronto formagio", "Green mix", "Pasta with prosciutto", "Fusilli", "Risotto with mushroom", "Sicilian caponata", "Goulash in Italian way", "Pizza with multi polpa", "Pumpkin burgers", "Panzanella"];
var menuMealsPrice = ["10.17", "15.3", "13.07", "14.27", "17.05", "16.35", "18.7", "16.00", "13.29", "14.7"];
var menuMealsDescription = ["pasta with pronto formgio cheese, champignons, basil", "with pine nuts, parmigiano reggiano cheese, garlic", "with butter, prosciutto, parsley, cheese", "with zucchini, cheese, vinegar, basil", "with Cantharellus cibarius, parmesan, butter", "with zucchini, eggplant, green olives, pasta", "with beef, red wine, onion, olive oil, bay leaf", "with multi popa, olives, fresh parsley, cheese", "with potato, pumpkin, butter, flour, nutmeg", "with crispy bread, mutti pelat, olives, onion, mozzarella"];

var menuDessertsImages = ["20.jpeg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg"];
var menuDessertsTitle = ["Italian butter cake", "Cake di mele", "Gelato italiana", "Caprese lemon cake", "Italian rice pudding", "Cantuccini", "Torrone", "Biancomangiare", "Cannola with orange", "Affogato"];
var menuDessertsPrice = ["15.7", "7.7", "5.50", "8.45", "6.89", "10.7", "15.35", "15.7", "10.5", "7.3"];
var menuDessertsDescription = ["wild blueberry, whipped lemon creme, cinnamon crumble, basil", "with apples, vanilla, flour, eggs, butter, milk", "with cream, chocolate, vanilla, eggs, milk", "with white chocolate, lemon juice, cream, lime", "with rice, brown suggar, milk, butter, vanilla", "with flour, almond, rum, vanilla, butter", "with honey, egg white, hazelnut, suggar", "with almond milk, suggar, creame, chocolate", "with orange, brown suggar, honey, milk, butter", "a ball of ice cream in coffee"];

var menuDrinksImages = ["30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg"];
var menuDrinksTitle = ["juices", "Frappuccino", "Mocha", "Espresso", "Milkshake", "Beer", "Wine", "Whiskey", "Sparkling water", "Coca-cola"];
var menuDrinksPrice = ["3.25", "5.20", "4.35", "3.25", "3.10", "6.5", "11.67", "10.85", "3", "5.7"];



menuBreakfast1.innerHTML = "";
for(let i = 0; i < 5; i++){
    menuBreakfast1.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuBreakfastImages[i]}" alt="${menuBreakfastTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuBreakfastTitle[i]}</p>
                                        <p class="menu-item-price">${menuBreakfastPrice[i]} &euro;</p>
                                        <p class="menu-item-description">${menuBreakfastDescription[i]}</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuBreakfast2.innerHTML = "";
for(let i = 5; i < menuBreakfastImages.length; i++){
    menuBreakfast2.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuBreakfastImages[i]}" alt="${menuBreakfastTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuBreakfastTitle[i]}</p>
                                        <p class="menu-item-price">${menuBreakfastPrice[i]} &euro;</p>
                                        <p class="menu-item-description">${menuBreakfastDescription[i]}</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuMeals1.innerHTML = "";
for(let i = 0; i < 5; i++){
    menuMeals1.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuMealsImages[i]}" alt="${menuMealsTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuMealsTitle[i]}</p>
                                        <p class="menu-item-price">${menuMealsPrice[i]} &euro;</p>
                                        <p class="menu-item-description">${menuMealsDescription[i]}</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuMeals2.innerHTML = "";
for(let i = 5; i < menuMealsImages.length; i++){
    menuMeals2.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuMealsImages[i]}" alt="${menuMealsTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuMealsTitle[i]}</p>
                                        <p class="menu-item-price">${menuMealsPrice[i]} &euro;</p>
                                        <p class="menu-item-description">${menuMealsDescription[i]}</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuDesserts1.innerHTML = "";
for(let i = 0; i < 5; i++){
    menuDesserts1.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuDessertsImages[i]}" alt="${menuDessertsTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuDessertsTitle[i]}</p>
                                        <p class="menu-item-price">${menuDessertsPrice[i]} &euro;</p>
                                        <p class="menu-item-description">${menuDessertsDescription[i]}</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuDesserts2.innerHTML = "";
for(let i = 5; i < menuDessertsImages.length; i++){
    menuDesserts2.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuDessertsImages[i]}" alt="${menuDessertsTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuDessertsTitle[i]}</p>
                                        <p class="menu-item-price">${menuDessertsPrice[i]} &euro;</p>
                                        <p class="menu-item-description">${menuDessertsDescription[i]}</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuDrinks1.innerHTML = "";
for(let i = 0; i < 5; i++){
    menuDrinks1.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuDrinksImages[i]}" alt="${menuDrinksTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuDrinksTitle[i]}</p>
                                        <p class="menu-item-price">${menuDrinksPrice[i]} &euro;</p>
                                    </div>
                                    </div>
                                </li>`;
}
menuDrinks2.innerHTML = "";
for(let i = 5; i < menuDrinksImages.length; i++){
    menuDrinks2.innerHTML += `<li class="menu-item">
                                    <div class="row">
                                    <div class="col-12 col-lg-3 text-center text-md-left">
                                        <img src="assets/img/${menuDrinksImages[i]}" alt="${menuDrinksTitle[i]}">
                                    </div>
                                    <div class="col-12 col-lg-9 text-center text-md-left">
                                        <p class="menu-item-title">${menuDrinksTitle[i]}</p>
                                        <p class="menu-item-price">${menuDrinksPrice[i]} &euro;</p>
                                    </div>
                                    </div>
                                </li>`;
}


/*FORM FOR RESERVATION*/
document.querySelector("#resSubmit").addEventListener("click", checkReservationData)
function checkReservationData(){
    var regName = /^[A-Z][a-z]{2,20}(\s[A-Z][a-z]{2,20})*$/;
    var regEmail = /^\w+(\.\w+)*@[a-z]+(\.[a-z]+)*(\.[a-z]{2,3})$/;
    var regPhone = /^\+39\-\d{4}\-\d{3}$/;
    var numberOfErrors = 0;
    var firstName = document.querySelector("#firstName");
    if(!regName.test(firstName.value)){
        firstName.classList.add("incorrect");
        document.querySelector("#error1").innerHTML = '*Name must start with capital letter and needs to have two or more characters';
        numberOfErrors++;
    }
    else {
        firstName.classList.remove("incorrect");
        document.querySelector("#error1").innerHTML = "";
    }

    var lastName = document.querySelector("#lastName");
    if(!regName.test(lastName.value)){
        lastName.classList.add("incorrect");
        document.querySelector("#error2").innerHTML = '*Last name must start with capital letter and needs to have two or more characters';
        numberOfErrors++;
    }
    else {
        lastName.classList.remove("incorrect");
        document.querySelector("#error2").innerHTML = "";
    }

    var email = document.querySelector("#email");
    if(!regEmail.test(email.value)){
        email.classList.add("incorrect");
        document.querySelector("#error3").innerHTML = '*Email must have @ character in it. Allowed entry is letters [a-z], digits [0-9], periods (.) and underscores (_)';
        numberOfErrors++;
    }
    else{
        email.classList.remove("incorrect");
        document.querySelector("#error3").innerHTML = "";
    }

    var phone = document.querySelector("#phone");
    if(!regPhone.test(phone.value)){
        phone.classList.add("incorrect");
        document.querySelector("#error4").innerHTML = '*Phone format: +39-2222-222';
        numberOfErrors++;
    }
    else{
        phone.classList.remove("incorrect");
        document.querySelector("#error4").innerHTML = "";
    }

    var people = document.querySelector("#numbOfGuests");
    if(people.selectedIndex == 0){
        people.classList.add("incorrect");
        document.querySelector("#error5").innerHTML = '*You must select an option';
        numberOfErrors++;
    }
    else {
        people.classList.remove("incorrect");
        document.querySelector("#error5").innerHTML = "";
    }

    var date = document.querySelector("#date");
    if(date.value == ""){
        date.classList.add("incorrect");
        document.querySelector("#error6").innerHTML = '*You must select a date';
        numberOfErrors++;
    }
    else{
        date.classList.remove("incorrect");
        document.querySelector("#error6").innerHTML = "";
    }

    var messageCorrect = document.querySelector("#messageCorrectReservation");
    messageCorrect.innerHTML = "";
    if(numberOfErrors == 0){
        messageCorrect.innerHTML = "You have successfully entered the data!";
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        people.selectedIndex = 0;
        date.value = "";
    }
}

//Chefs

var chefs = document.querySelector("#chefs");

var chefsImages = ["chef1.jpg", "chef2.jpg", "chef3.jpg", "chef4.jpg"];
var chefsNames = ["Marty Fukuda", "Miley Johnsons", "Greg Hong", "John Wilson"];
var chefsJobs = ["Burger Chef", "Pizza Chef", "Head Chef", "Grill Chef"];

chefs.innerHTML = "";
for(indeks in chefsImages){
    chefs.innerHTML += `<div class="card col-6 col-md-3">
                            <img src="assets/img/${chefsImages[indeks]}" class="card-img-top" alt="${chefsJobs[indeks]}">
                            <div class="card-body">
                                <p class="card-text text-center">${chefsNames[indeks]}</p>
                                <p class="card-text text-center">${chefsJobs[indeks]}</p>
                            </div>
                        </div>`;
}


/*Testimonials*/

   var testimonialMessage = ["The food and ambient was great, I enjoyed every bite. I'll be happy to come again. ", 
   "The service is at a very high level. The staff is very kind. I recommend everyone who has not been here to come.",
    "The experience was amazing. I am delighted with how the restaurant is decorated, and even more so with the taste of the food."];
    
    var testimonialMessageSignature = ["-David Muller", "-Anna Peters", "-Mike Sheran"];

    var testimonial = document.querySelector("#testimonials-message-text");

    var testDots = document.querySelectorAll("#testimonials-message > ul > .dots-item");
    var testDotsArray = Array.from(testDots);

    var testimonialMess = document.createElement("p");
    var testimonialMessSignature = document.createElement("p");

    testimonial.appendChild(testimonialMess);
    testimonial.appendChild(testimonialMessSignature);

   var counter = 0;
   testimonialSlideShow();
   function testimonialSlideShow(){

    testimonialMess.innerHTML = testimonialMessage[counter];
    testimonialMessSignature.innerHTML = testimonialMessageSignature[counter];

    for (i = 0; i < testDotsArray.length; i++) {
        testDotsArray[i].className = testDotsArray[i].className.replace("dots-item-active", "");
    }

    testDotsArray[counter].className += " dots-item-active";
    
    counter++;
    if(counter > 2) counter = 0;
       setTimeout(testimonialSlideShow, 4000);

   }

/*FORM FOR CONTACT*/

document.querySelector("#contactSumbit").addEventListener("click", checkContactData);
function checkContactData(){

    var regName = /^[A-Z][a-z]{2,20}(\s[A-Z][a-z]{2,20})*$/;
    var regEmail = /^\w+(\.\w+)*@[a-z]+(\.[a-z]+)*(\.[a-z]{2,3})$/;
    var regMessage = /^[\w\.\,\?\!\-\;\:\'\"]{1,30}(\s[\w\.\,\?\!\-\;\:\'\"]{1,20})*$/;

    var numberOfErrorsContact = 0;

    var contactFirstName = document.querySelector("#contactName");
    if(!regName.test(contactFirstName.value)){
        contactFirstName.classList.add("incorrect");
        document.querySelector("#error7").innerHTML = '*Name must start with capital letter and needs to have two or more characters';
        numberOfErrorsContact++;
    }
    else{
        contactFirstName.classList.remove("incorrect");
        document.querySelector("#error7").innerHTML = "";
    }

    var contactLastName = document.querySelector("#contactLastName");
    if(!regName.test(contactLastName.value)){
        contactLastName.classList.add("incorrect");
        document.querySelector("#error8").innerHTML = '*Last name must start with capital letter and needs to have two or more characters';
        numberOfErrorsContact++;
    }
    else{
        contactLastName.classList.remove("incorrect");
        document.querySelector("#error8").innerHTML = "";
    }

    var contactEmail = document.querySelector("#contactEmail");
    if(!regEmail.test(contactEmail.value)){
        contactEmail.classList.add("incorrect");
        document.querySelector("#error9").innerHTML = '*Email must have @ character in it. Allowed entry is letters [a-z], digits [0-9], periods (.) and underscores (_)';
        numberOfErrorsContact++;
    }
    else{
        contactEmail.classList.remove("incorrect");
        document.querySelector("#error9").innerHTML = "";
    }

    var messageContact = document.querySelector("#contactMessage");
    if(messageContact.value == ""){
        messageContact.classList.add("incorrect");
        document.querySelector("#error10").innerHTML = '*You did not enter a message.'
        numberOfErrorsContact++;
    }
    else if(!regMessage.test(messageContact.value) && messageContact.value != ""){
        messageContact.classList.add("incorrect");
        document.querySelector("#error10").innerHTML = '*Message was entered incorrectly.';
        numberOfErrorsContact++;
    }
    else{
        messageContact.classList.remove("incorrect");
        document.querySelector("#error10").innerHTML = "";
    }

    var messageCorrectContact = document.querySelector("#messageCorrectContact");
    messageCorrectContact.innerHTML = "";
    if(numberOfErrorsContact == 0){
        messageCorrectContact.innerHTML = "You have successfully entered the data!";
        contactFirstName.value = "";
        contactLastName.value = "";
        contactEmail.value = "";
        messageContact.value = "";
    }
}

/* jQuery */

$(document).ready(function(){

    //ANIMATION FOR FADE IN EFFECT
  
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
    
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
    $window.on('scroll', check_if_in_view);
  
      // Scroll to top 
  
      $(window).scroll(function (){
          if($(this).scrollTop() > 300){
              $("#scrollToTop").fadeIn();
          }
          else{
              $("#scrollToTop").fadeOut();
          }
      })
  
      $('#scrollToTop').click(function(){
          $('html').animate({scrollTop : 0}, 800);
        });
  
    //Navigation scrolling 
    var topMenu = $("#header");
        var topMenuHeight = topMenu.outerHeight()+13;
        var menuItems = topMenu.find('a[href^=\\#]');
  
        var scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        })
  
        menuItems.click(function(e){
          var href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight;
          $('html, body').stop().animate({ 
              scrollTop: offsetTop
          }, 1500);           
          e.preventDefault();
        })
  
        $(window).scroll(function(){
           var fromTop = $(this).scrollTop()+topMenuHeight;
            var cur = scrollItems.map(function(){
              if ($(this).offset().top < fromTop)
                return this;
            })
          })
  
    // Responsive navigation 
  
        $("#collapse-button").click(function (){
            $("#navigationUl").slideToggle("slow");
        })
  
  
    //INFORMATION
  
      var a = 0;
      $(window).scroll(function() {
  
        var oTop = $('#information').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
  
              {
                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
  
              });
          });
          a = 1;
        }
  
      })
        
    /*TABS*/
        $("#tabs > div:not(:first)").hide();
  
        $("#tabs-links > li").click(function (e){
          $("#tabs > div").hide();
          $(" .active").removeClass("active");
          $(this).addClass("active");
          
          e.preventDefault();
          var clicked = $(this).find("a").attr("href");
          $("#tabs " + clicked).fadeIn("fast");
        }).eq(0).addClass("active");
        
        
        /*reservation*/
        $(":submit").click(function (){
          return false;
        })
  
        /*RESERVATION - DATE ENTRY RESTRICTION*/
        var dateToday = new Date();
        var day = dateToday.getDate();
        var month = dateToday.getMonth() + 1;
        var year = dateToday.getFullYear();

        if(day < 10){
            day = '0' + day;
        }
        if(month < 10){
            month = '0' + month;
        }
        var currentDate =year + '-' + month + '-' + day;
        $("#date").attr("min", currentDate);
        
  });