var container = document.getElementById("main-container");

function spawnRandomObject() {
    var new_rot = document.createElement('div');
    new_rot.className = "decorator";
    new_rot.style.top = parseInt(100*Math.random()) + '%';
    new_rot.style.left = parseInt(100*Math.random()) + '%';
    container.appendChild(new_rot);
    setTimeout(function(){new_rot.style.opacity = '1';}, 0);
    setTimeout(function(){new_rot.style.transform = 'scale(' + (parseFloat(Math.random()))*10 + ')';}, 0);
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
    var offset = 500;
    $('section').each(function(i) {
        if($(this).position().top <= (position + header + offset))
        {
            $("li.active").removeClass('active');
            $("li").eq(i).addClass('active');
        }
    });
});

function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
    document.getElementById("theme-button").childNodes[0].src = currentTheme === "dark" ? "dark.png" : "light.png";
}