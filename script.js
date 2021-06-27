var container = document.getElementById("main-container");

function spawnRandomObject() {
    var new_rot = document.createElement('div');
    new_rot.className = "decorator";
    new_rot.style.top = parseInt(100*Math.random()) + '%';
    new_rot.style.left = parseInt(100*Math.random()) + '%';
    var new_hex = document.createElement('img');
    new_hex.src = "hexagon.png";
    new_rot.appendChild(new_hex);
    container.appendChild(new_rot);
    setTimeout(function(){new_rot.style.opacity = '1';}, 0);
    setTimeout(function(){new_rot.style.transform = 'scale(' + (parseFloat(Math.random()))*10 + ') rotate(' + (parseFloat(Math.random()))*360 + 'deg)';}, 0);
}

for(var i = 0; i < 40; i++){
    spawnRandomObject();
}

var btns = document.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$(document).scroll(function () {
    var position = $(document).scrollTop();
    var header = $('#navbar').outerHeight();
    var offset = 400;
    $('section').each(function(i) {
        if($(this).position().top <= (position + header + offset))
        {
            $("li.active").removeClass('active');
            $("li").eq(i).addClass('active');
        }
    });
});

var date = new Date();
var hour = date.getHours();
if(hour > 20 || hour < 10) toggleTheme();
function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
    document.getElementById("theme-button").removeChild(document.getElementById("theme-button").childNodes[0]);
    document.getElementById("theme-button").innerHTML += (currentTheme === "dark" ? '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#000000"><rect fill="none" height="20" width="20"/><path d="M8.04,4.86C7.88,5.39,7.8,5.94,7.8,6.5c0,3.14,2.56,5.7,5.7,5.7c0.56,0,1.11-0.08,1.64-0.24c-0.79,2.07-2.8,3.54-5.14,3.54 c-3.03,0-5.5-2.47-5.5-5.5C4.5,7.66,5.97,5.65,8.04,4.86z M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7 c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42 C10.72,3.03,10.36,3,10,3L10,3z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#000000"><rect fill="none" height="20" width="20"/><path d="M10,7.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S7.5,11.38,7.5,10S8.62,7.5,10,7.5z M10,6c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S12.21,6,10,6L10,6z M3.75,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2C1.34,9.25,1,9.59,1,10 s0.34,0.75,0.75,0.75H3.75z M18.25,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2c-0.41,0-0.75,0.34-0.75,0.75 s0.34,0.75,0.75,0.75H18.25z M9.25,3.75C9.25,4.16,9.59,4.5,10,4.5c0.41,0,0.75-0.34,0.75-0.75v-2C10.75,1.34,10.41,1,10,1 S9.25,1.34,9.25,1.75V3.75z M13.89,5.05c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L13.89,5.05z M3.99,14.95c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06 c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0L3.99,14.95z M5.05,6.11c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 L5.05,3.99c-0.29-0.29-0.77-0.29-1.06,0s-0.29,0.77,0,1.06L5.05,6.11z M14.95,16.01c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.77,0,1.06L14.95,16.01z M9.25,18.25C9.25,18.66,9.59,19,10,19 c0.41,0,0.75-0.34,0.75-0.75v-2c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75V18.25z"/></svg>');
}

var slideIndex = 0;

function plusSlides(n) {
  console.log(slideIndex);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("carousel-item");
  //var dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  $(".carousel-item.active-slide").removeClass('active-slide');
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex].className += " active-slide";
  //dots[slideIndex-1].className += " active";
}

function displayProject(data){
  document.body.style.overflow = "hidden";
  document.getElementById("project-viewer").style.display = "block";

  var title = data.getAttribute("data-title");
  var tags = data.getAttribute("data-tags");
  var description = data.getAttribute("data-description");
  var images = data.getAttribute("data-images");
  
  var tagsList = tags.split(",");
  var imagesList = images.split(",");

  var titleElement = document.createElement('h2');
  titleElement.innerText = title;
  document.getElementById("project-text-container").appendChild(titleElement);

  var tagsElement = document.createElement('ul');
  document.getElementById("project-text-container").appendChild(tagsElement);
  for (let index = 0; index < tagsList.length; index++) {
    var tagElement = document.createElement('li');
    tagElement.innerText = tagsList[index];
    tagsElement.appendChild(tagElement);
  }

  var descriptionElement = document.createElement('p');
  descriptionElement.innerText = description;
  document.getElementById("project-text-container").appendChild(descriptionElement);

  var carrousel = document.getElementById("carousel-inner");
  for (let index = 0; index < imagesList.length; index++) {
    var divElement = document.createElement('div');
    divElement.className += "carousel-item";
    if(index == 0){
      divElement.className += " active-slide";
    }
    var imageElement = document.createElement('img');
    imageElement.src = imagesList[index];
    divElement.appendChild(imageElement);
    carrousel.appendChild(divElement);
  }
}

function closeProject(){
  document.body.style.overflowY = "scroll";
  document.getElementById("project-viewer").style.display = "none";
  while (document.getElementById("project-text-container").firstChild) {
    document.getElementById("project-text-container").removeChild(document.getElementById("project-text-container").firstChild);
  }
  while (document.getElementById("carousel-inner").firstChild) {
    document.getElementById("carousel-inner").removeChild(document.getElementById("carousel-inner").firstChild);
  }
  slideIndex = 0;
}

$(document).keyup(function(e) {
  if (e.key === "Escape") { 
    closeProject();
  }
  else if (e.key === "ArrowLeft") { 
    plusSlides(-1);
  }
  else if (e.key === "ArrowRight") { 
    plusSlides(1);
  }
});