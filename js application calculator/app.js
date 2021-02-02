var ans;
// When user presses "AC", function "clearScr()" is called
function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
    var result = document.getElementById("output");
    result.value = "";
    
}


function getNum(digit) {
    var eqn = document.getElementById("output");
    eqn.value += digit;
    ans=eqn.value;
    console.log(ans);
}


function getresult(){
    // var eqn = document.getElementById("output").innerHTML;
    // eqn.value += digit;
    
    var result = document.getElementById("result");
    result.value = eval(ans);
    console.log(result.value);

  
  }
  

