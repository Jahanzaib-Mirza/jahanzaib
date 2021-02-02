// var arr=["karachi","lahore","islamabad","sargodha","hyderabad","multan"];

// // var a=arr.splice(2,2,"Rohri","peshawar")
// document.write(arr + "<br>");
// var b=arr.slice(1,3);
// document.write(b);
// var city=prompt("enter city name");
// var fletter=city.slice(0,1);
// var oletter=city.slice(1,city.length1);
// var a=fletter.toUpperCase();
// var b=oletter.toLowerCase();
// city=a + b;
// alert(city);

// var text=prompt("enter text");
// var a=text.length;
// console.log(a);
// for(i=0;1<a;i++)
// {
//     if(text.slice(i,i+2)==="  "){
//         alert("Double spaces found")
//     }
// // }
// var text="The New Yorker magazine doesn't allow the phrase World War II."
// var a=text.length;
// for(i=0;i<a;i++){
//     if(text.slice(i,i+12)==="World War II"){
//         text=text.slice(0,i) +"Second World War"+text.slice(i+12) ;
//         console.log(text);
//     }
// } 

// var text="Sir Muhammad Iqbal was a poet, philosopher, lawyer, theorist and politician from Punjab, British India, whose poetry in Urdu and Persian is considered to be among the greatest of the modern era, and whose vision of an independent state for the Muslims of British India was to inspire the creation of Pakistan."
// var a=text.indexOf("Pakistan");
// console.log(a);
// if(a!==-1){
//     text=text.slice(0,a)+"Islamic Republic of Pakistan"+text.slice(a+8);
//     console.log(text);
// }
//  var dob= new Date("3 march, 2002 ");
//  console.log(dob);
//  var dobmili=dob.getTime();
//  console.log(dobmili);
//  var today=new Date();
//  console.log(today);
//  var todaymili=today.getTime();
//  console.log(todaymili);
//  var diff=todaymili-dobmili ;
//  console.log(diff);
//  var accAge=(diff/(1000*60*60*24*30*12));
//  document.write(accAge);
//  console.log(accAge);
var min = 0;
var hour = 0;
var seconds = 0;
var msec = 0;
var interval;
var minhead = document.getElementById("min");
var hourhead = document.getElementById("hour");
var secondshead = document.getElementById("seconds");
var msechead = document.getElementById("msec");

function timer() {
      msec++;
      msechead.innerHTML =msec;
    if (msec == 100) {
        seconds++;
        msec = 00;
        msechead.innerHTML = msec;
        secondshead.innerHTML = seconds;
        // console.log(seconds);
        // console.log(msec);
    }
    else if (seconds == 60) {
        min++;
        seconds = 00;
        secondshead.innerHTML = seconds;
        minhead.innerHTML = min;
    }
    else if (min == 60) {
        hour++;
        min = 00;
        minhead.innerHTML = min;
        hourhead.innerHTML = hour;
    }
}
function startTime() {
    interval = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
}
function stopTime() {

    clearInterval(interval);
    document.getElementById("start").disabled = false;

}
function resetTime() {
    min = 0;
    hour = 0;
    seconds = 0;
    msec = 0;
    minhead.innerHTML = min;
    hourhead.innerHTML = hour;
    msechead.innerHTML = msec;
    secondshead.innerHTML = seconds;
    stop();
    document.getElementById("start").disabled = false;
}
