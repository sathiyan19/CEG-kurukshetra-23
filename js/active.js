const g = document.getElementById("nav");
const p = document.getElementById("playing");

function toggleMenuOpen() {
    g.classList.toggle("open");
    p.classList.toggle("open");
}

var flags = 0;

function dark() {
    console.log("hi");
    const but = document.getElementById("out");
    const gut = document.getElementById("in");
    const bod = document.body;
    const d = document.getElementsByClassName("navbar");
    const head = document.getElementsByClassName("head");
    const cout = document.getElementsByClassName("card-out");
    const soname = document.getElementsByClassName("songname");
    const op = document.getElementsByClassName("op");
    const st = document.getElementsByClassName("stime");
    const co = document.getElementsByClassName("copy");
    const fi = document.getElementsByClassName("first");
    const mu = document.getElementsByClassName("mud");
    if (flags == 0) {
        // h[0].style.background = "black";
        but.style.justifyContent = "end";
        d[0].style.backgroundColor = '#404040';
        but.style.backgroundColor = "#f2f2f2";
        gut.style.backgroundColor = "black";
        // n[0].style.background = 'grey';
        bod.style.background = '#cccccc';


        for (let index = 0; index < head.length; index++) {
            const element = head[index];
            element.style.color = "black";
        }

        for (let index = 0; index < cout.length; index++) {
            const element = cout[index];
            element.style.backgroundColor = "black";
        }

        for (let index = 0; index < soname.length; index++) {
            const element = soname[index];
            element.style.color = "white";
        }

        for (let index = 0; index < op.length; index++) {
            const element = op[index];
            element.style.backgroundColor = "black";
        }
        for (let index = 0; index < co.length; index++) {
            const element = co[index];
            element.style.color = "black";
        }

        for (let index = 0; index < fi.length; index++) {
            const element = fi[index];
            element.style.color = "black";
        }

        for (let index = 0; index < mu.length; index++) {
            const element = mu[index];
            element.style.color = "black";
        }
        for (let index = 0; index < st.length; index++) {
            const element = st[index];
            element.style.color = "white";
        }

        flags = 1;
    } else {
        but.style.justifyContent = "start";
        but.style.backgroundColor = "grey";
        gut.style.backgroundColor = "white";
        d[0].style.backgroundColor = '#070707';
        // n[0].style.background = '#070707';
        bod.style.background = "linear-gradient(180deg, #404040, #000000)";
        for (let index = 0; index < head.length; index++) {
            const element = head[index];
            element.style.color = "white";
        }
        for (let index = 0; index < cout.length; index++) {
            const element = cout[index];
            element.style.backgroundColor = "white";
        }
        for (let index = 0; index < soname.length; index++) {
            const element = soname[index];
            element.style.color = "black";
        }
        for (let index = 0; index < op.length; index++) {
            const element = op[index];
            element.style.backgroundColor = "white";
        }
        for (let index = 0; index < st.length; index++) {
            const element = st[index];
            element.style.color = "black";
        }

        for (let index = 0; index < co.length; index++) {
            const element = co[index];
            element.style.color = "white";
        }

        for (let index = 0; index < fi.length; index++) {
            const element = fi[index];
            element.style.color = "white";
        }

        for (let index = 0; index < mu.length; index++) {
            const element = mu[index];
            element.style.color = "#999999";
        }

        flags = 0;
    }

}