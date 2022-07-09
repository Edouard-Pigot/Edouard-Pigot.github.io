document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

window.addEventListener("scroll", function (e) {
    var features_top = document.getElementById("about").offsetTop;   
    var top_of_window = window.scrollY;
    if (top_of_window >= features_top) {   
        document.getElementById("main-navigation").style.top = "0";  
    } else {   
        document.getElementById("main-navigation").style.top = "-2.6em";
    }
});