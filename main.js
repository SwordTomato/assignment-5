//alert("“Welcome to the Forum");
window.onload = start;
var count = 0;

function start(){
    
    var top = document.getElementById("top");
    var topic = document.getElementById("topic");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    
    top.innerHTML = "Welcome to the Forum"
}

function postFunction() {
    var message = document.getElementById("message").value;
    switch(count)
    {
        case(0):
            var topic = document.getElementById("topic");
            topic.innerHTML = message;
            break;
        case(1):
            var reply1 = document.getElementById("reply1");
            reply1.innerHTML = message;
            break;
        case(2):
            var reply2 = document.getElementById("reply2");
            reply2.innerHTML = message;
            break;
    }

    document.getElementById("message").value = "";
    count++;
}

function clearFunction() {
    var topic = document.getElementById("topic").innerHTML = "";
    var reply1 = document.getElementById("reply1").innerHTML = "";
    var reply2 = document.getElementById("reply2").innerHTML = "";
    var message = document.getElementById("message").value = "";
    count = 0;
d
}