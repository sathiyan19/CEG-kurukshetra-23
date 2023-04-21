let runtime = [74, 120, 50, 22, 80, 340, 400, 72, 10];
let names = ["Dusk till dawn", "Intentions", "Faded", "Hope", "Lovely", "Superman", "New Rules", "Anti Hero", "Levitating"];
let imag = ['/pic/mad.jpg', '/pic/pic2.jpg', '/pic/pic3.jpg', '/pic/pic4.jpg', '/pic/pic5.jpg', '/pic/pic6.png', '/pic/pic7.png', '/pic/pic8.jpg', '/pic/pic7.png'];
let liked = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let song = 8;
let flag = [1, 1, 1, 1, 1, 1, 1, 1, 1],
    identity;
var current = 1;
let cursong = 0;
var element = document.getElementById("progbar");
var runningtime = document.getElementById("running");
var totaltime = document.getElementById("total");
var playbutton = document.getElementById("h");
var sname = document.getElementById("sname");
var spic = document.getElementById("spic");

function change(j) {
    cursong += j;
    if (cursong < 0) {
        cursong = song - 1;
    } else if (cursong >= song) {
        cursong = 0;
    }
    update(cursong);
}

function play() {
    update(cursong);
}

function update(n) {
    console.log("inside");
    if (flag[n] == 1) {
        cursong = n;
        for (i = 0; i < song; i++) {
            flag[i] = 1;
            // console.log(flag[i]);
        }
        clearInterval(identity);
        current = 0;
        console.log("condition1");
        flag[n] = 2;
        playbutton.classList.replace("fa-play", "fa-pause");
        sname.innerHTML = names[n];
        spic.src = imag[n];
        var tot = runtime[n];
        console.log(tot);
        identity = setInterval(scene, 1000);
    } else if (flag[n] == 2) {
        flag[n] = 3;
        playbutton.classList.replace("fa-pause", "fa-play");
        console.log("condition2");
        clearInterval(identity);
        // console.log(identity);
    } else if (flag[n] == 3) {
        flag[n] = 2;
        playbutton.classList.replace("fa-play", "fa-pause");
        console.log("condition3");
        var tot = runtime[n];
        identity = setInterval(scene, 1000);
    }


    function scene() {
        // console.log(current);
        // console.log("up");
        current++;
        var width = (current / tot) * 100;
        // console.log(width);
        if (current > tot) {
            for (i = 0; i < song; i++) {
                flag[i] = 1;
                playbutton.classList.replace("fa-pause", "fa-play");

                // console.log(flag[i]);
            }
            current = 1;
            clearInterval(identity);
        } else {

            var rmin = Math.floor(current / 60).toString();
            var rsec = (current % 60).toString();

            var tmin = Math.floor(tot / 60);
            var tsec = (tot % 60).toString();
            if (rsec.length == 1) {
                rsec = '0' + rsec;
            }
            if (tsec.length == 1) {
                tsec = '0' + tsec;
            }
            runningtime.innerHTML = rmin + ":" + rsec;
            totaltime.innerHTML = tmin + ":" + tsec;
            element.style.width = width + '%';
        }
    }
}