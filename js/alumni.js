window.addEventListener("resize", calwidth);
window.addEventListener("scroll", scrollfunc);
var wid;

let row = document.getElementsByClassName("sat");
calwidth();

function calwidth() {
    wid = window.innerWidth;
    row[0].className = row[0].className.replace("row-cols-3", " ");
    row[0].className = row[0].className.replace("row-cols-2", " ");
    row[0].className = row[0].className.replace("row-cols-1", " ");

    if (wid < 1150 && wid > 650) {
        row[0].className += " row-cols-2";
    } else if (wid < 640) {
        row[0].className += " row-cols-1";
    } else if (wid > 1100) {
        row[0].className += " row-cols-3";
    }
}






// window.onscroll = function() { scrollfunc() };

function scrollfunc() {
    widths = window.innerWidth;
    home.className = home.className.replace(" active", "");
    about.className = about.className.replace(" active", "");
    events.className = events.className.replace(" active", "");
    workshop.className = workshop.className.replace(" active", "");
    contact.className = contact.className.replace(" active", "");
    if (widths > 430) {
        if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 800) {
            home.className += ' active';
        } else if (document.documentElement.scrollTop > 800 && document.documentElement.scrollTop <= 1600) {
            about.className += ' active';
        } else if (document.documentElement.scrollTop > 1600 && document.documentElement.scrollTop <= 3600) {
            events.className += ' active';
        } else if (document.documentElement.scrollTop > 3600 && document.documentElement.scrollTop <= 4500) {
            workshop.className += ' active';
        } else if (document.documentElement.scrollTop > 4500) {
            contact.className += ' active';
        }
    } else {
        if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 500) {
            home.className += ' active';
        } else if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop <= 1500) {
            about.className += ' active';
        } else if (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop <= 5000) {
            events.className += ' active';
        } else if (document.documentElement.scrollTop > 5000 && document.documentElement.scrollTop <= 6400) {
            workshop.className += ' active';
        } else if (document.documentElement.scrollTop > 6400) {
            contact.className += ' active';
        }
    }
}

var countDownDate = new Date("Apr 17, 2023 00:00:00").getTime();