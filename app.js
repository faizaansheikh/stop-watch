// function move(){
//     console.log("hi")
// }
// var interval  = setInterval(move,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

var min = 0;
var sec = 0;
var msec= 0;

var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

function miliSec(){
    msec++;
    msecHeading.innerHTML = msec;

    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        sec = 0
        minHeading.innerHTML = min;
       
    }else if(msec > 1){
        var a = document.getElementById("btn")
        a.disabled = true
    }
    
}
function enables(){
    var a = document.getElementById("btn")
    a.disabled = false
}
var intervals;
function start(){
     intervals = setInterval(miliSec,10)
     
}

function stopWat(){
    clearInterval(intervals)
}

function reset(){
    var min = "00";
    // var sec = 0;
    sec = "00"
    var msec = "00";
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    
    
    clearInterval(intervals)
}

function lap(){
    var save = document.getElementById("save")
    var li = document.createElement("li")
    var r = min +" "+":"+" "+sec +" "+":"+" "+ msec
    var read = document.createTextNode(r)
    li.appendChild(read)
    save.appendChild(li)
}