

var renk = document.getElementsByTagName('body');
var renk2 = document.getElementsByTagName('p');
var renk3 = document.getElementsByTagName('li');
var renk4 = document.getElementsByTagName('h2');
var renk5 = document.getElementsByTagName('span');
var renk6 = document.getElementsByClassName('bbox');
var renk7 = document.getElementsByClassName('this-not');
var renk8 = document.getElementsByClassName('this-not');



function koyu() {




    for (var i = 0; i < renk.length; i++) {
        renk[i].style.backgroundColor = "#252524";

    }

    for (var i = 0; i < renk2.length; i++) {
        renk2[i].style.color = "white";

    }

    for (var i = 0; i < renk3.length; i++) {
        renk3[i].style.color = "aqua";


    }

    for (var i = 0; i < renk4.length; i++) {
        renk4[i].style.color = "white";

    }

    for (var i = 0; i < renk5.length; i++) {
        renk5[i].style.display = "none";

    }

    for (var i = 0; i < renk6.length; i++) {

        renk6[i].style.backgroundColor = "#252524";


    }

    for (var i = 0; i < renk7.length; i++) {
        renk7[i].style.display = "block";

    }
    for (var i = 0; i < renk8.length; i++) {
        renk8[i].style.color = "#eee";

    }





}






function acik() {


    for (var i = 0; i < renk.length; i++) {
        renk[i].style.backgroundColor = "white";

    }

    for (var i = 0; i < renk2.length; i++) {
        renk2[i].style.color = "black";

    }

    for (var i = 0; i < renk3.length; i++) {
        renk3[i].style.color = "gray";

        document.getElementById('color').style.color = "white";

    }

    for (var i = 0; i < renk4.length; i++) {
        renk4[i].style.color = "#191919";

    }

    for (var i = 0; i < renk5.length; i++) {
        renk5[i].style.display = "block";

    }

    for (var i = 0; i < renk6.length; i++) {

        renk6[i].style.backgroundColor = "white";


    }

    for (var i = 0; i < renk8.length; i++) {
        renk8[i].style.color = "#eee";

    }


}





