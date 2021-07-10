var container = document.getElementById("main-container");

function spawnRandomObject() {
  var new_scale = document.createElement('div');
  new_scale.className = "decorator";
  new_scale.style.top = parseInt(100*Math.random()) + '%';
  new_scale.style.left = parseInt(100*Math.random()) + '%';
  var new_rot = document.createElement('div');
  var new_hex = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 483.013 483.013" style="enable-background:new 0 0 483.013 483.013;" xml:space="preserve"> <path d="M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923,0-30.628,8.49-38.608,22.292 L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462,170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926 c15.925,0,30.634-8.491,38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z"/>';
  new_rot.innerHTML += new_hex;
  new_scale.appendChild(new_rot);
  container.appendChild(new_scale);
  setTimeout(function(){new_scale.style.opacity = '1';}, 0);
  new_rot.style.transform = 'rotate(' + (parseFloat(Math.random()))*360 + 'deg)';
  setTimeout(function(){new_scale.style.transform = 'scale(' + (parseFloat(Math.random()))*10 + ')';}, 0);
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
  var offset = 200;
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
  var currentTheme = document.body.getAttribute("data-theme");
  var switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", switchToTheme);
  document.getElementsByClassName("theme-button")[0].removeChild(document.getElementsByClassName("theme-button")[0].childNodes[0]);
  document.getElementsByClassName("theme-button")[0].innerHTML += (currentTheme === "dark" ? '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#000000"><rect fill="none" height="20" width="20"/><path d="M8.04,4.86C7.88,5.39,7.8,5.94,7.8,6.5c0,3.14,2.56,5.7,5.7,5.7c0.56,0,1.11-0.08,1.64-0.24c-0.79,2.07-2.8,3.54-5.14,3.54 c-3.03,0-5.5-2.47-5.5-5.5C4.5,7.66,5.97,5.65,8.04,4.86z M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7 c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42 C10.72,3.03,10.36,3,10,3L10,3z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#000000"><rect fill="none" height="20" width="20"/><path d="M10,7.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S7.5,11.38,7.5,10S8.62,7.5,10,7.5z M10,6c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S12.21,6,10,6L10,6z M3.75,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2C1.34,9.25,1,9.59,1,10 s0.34,0.75,0.75,0.75H3.75z M18.25,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2c-0.41,0-0.75,0.34-0.75,0.75 s0.34,0.75,0.75,0.75H18.25z M9.25,3.75C9.25,4.16,9.59,4.5,10,4.5c0.41,0,0.75-0.34,0.75-0.75v-2C10.75,1.34,10.41,1,10,1 S9.25,1.34,9.25,1.75V3.75z M13.89,5.05c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L13.89,5.05z M3.99,14.95c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06 c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0L3.99,14.95z M5.05,6.11c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 L5.05,3.99c-0.29-0.29-0.77-0.29-1.06,0s-0.29,0.77,0,1.06L5.05,6.11z M14.95,16.01c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.77,0,1.06L14.95,16.01z M9.25,18.25C9.25,18.66,9.59,19,10,19 c0.41,0,0.75-0.34,0.75-0.75v-2c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75V18.25z"/></svg>');
  document.getElementsByClassName("theme-button")[1].removeChild(document.getElementsByClassName("theme-button")[1].childNodes[0]);
  document.getElementsByClassName("theme-button")[1].innerHTML += (currentTheme === "dark" ? '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#000000"><rect fill="none" height="20" width="20"/><path d="M8.04,4.86C7.88,5.39,7.8,5.94,7.8,6.5c0,3.14,2.56,5.7,5.7,5.7c0.56,0,1.11-0.08,1.64-0.24c-0.79,2.07-2.8,3.54-5.14,3.54 c-3.03,0-5.5-2.47-5.5-5.5C4.5,7.66,5.97,5.65,8.04,4.86z M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7 c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42 C10.72,3.03,10.36,3,10,3L10,3z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#000000"><rect fill="none" height="20" width="20"/><path d="M10,7.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S7.5,11.38,7.5,10S8.62,7.5,10,7.5z M10,6c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S12.21,6,10,6L10,6z M3.75,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2C1.34,9.25,1,9.59,1,10 s0.34,0.75,0.75,0.75H3.75z M18.25,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2c-0.41,0-0.75,0.34-0.75,0.75 s0.34,0.75,0.75,0.75H18.25z M9.25,3.75C9.25,4.16,9.59,4.5,10,4.5c0.41,0,0.75-0.34,0.75-0.75v-2C10.75,1.34,10.41,1,10,1 S9.25,1.34,9.25,1.75V3.75z M13.89,5.05c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L13.89,5.05z M3.99,14.95c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06 c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0L3.99,14.95z M5.05,6.11c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 L5.05,3.99c-0.29-0.29-0.77-0.29-1.06,0s-0.29,0.77,0,1.06L5.05,6.11z M14.95,16.01c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.77,0,1.06L14.95,16.01z M9.25,18.25C9.25,18.66,9.59,19,10,19 c0.41,0,0.75-0.34,0.75-0.75v-2c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75V18.25z"/></svg>');
}

var slideIndex = 0;

function plusSlides(n) {
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
  while (document.getElementById("project-text-container").firstChild) {
    document.getElementById("project-text-container").removeChild(document.getElementById("project-text-container").firstChild);
  }
  while (document.getElementById("carousel-inner").firstChild) {
    document.getElementById("carousel-inner").removeChild(document.getElementById("carousel-inner").firstChild);
  }
  slideIndex = 0;

  document.body.style.overflow = "hidden";
  document.getElementById("project-viewer").style.display = "block";

  var title = data.getAttribute("data-title");
  var subtitle = data.getAttribute("data-subtitle");
  var tags = data.getAttribute("data-tags");
  var description = data.getAttribute("data-description");
  var images = data.getAttribute("data-images");
  var videos = data.getAttribute("data-videos");
  
  var tagsList = tags.split(",");
  var imagesList = images.split(",");
  if(videos != null){
    var videosList = videos.split(",");
  }

  var titleElement = document.createElement('h2');
  titleElement.innerText = title;
  document.getElementById("project-text-container").appendChild(titleElement);

  var subtitleElement = document.createElement('h3');
  subtitleElement.innerText = subtitle;
  document.getElementById("project-text-container").appendChild(subtitleElement);

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
  if(videos != null){
    for (let index = 0; index < videosList.length; index++) {
      var divElement = document.createElement('div');
      divElement.className += "carousel-item";
      if(index == 0){
        divElement.className += " active-slide";
      }
      var videoElement = document.createElement('iframe');
      videoElement.src = videosList[index];
      videoElement.width = "100%";
      videoElement.height = "100%";
      divElement.appendChild(videoElement);
      carrousel.appendChild(divElement);
    }
  }

  for (let index = 0; index < imagesList.length; index++) {
    var divElement = document.createElement('div');
    divElement.className += "carousel-item";
    if(videos != null){
      if(videosList.length == 0 && index == 0){
        divElement.className += " active-slide";
      }
    }else{
      if(index == 0){
        divElement.className += " active-slide";
      }
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

function toggleMobileMenu() {
  if ($("#menu.displayed").length > 0) {
    $("#menu.displayed").removeClass('displayed');
  } else {
    $("#menu").addClass('displayed');
  }

  if ($("#mobile-theme-button.displayed").length > 0) {
    $("#mobile-theme-button.displayed").removeClass('displayed');
  } else {
    $("#mobile-theme-button").addClass('displayed');
  }
}