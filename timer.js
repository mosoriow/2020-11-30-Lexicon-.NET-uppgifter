var timerRunning=false;

function timer() {
    $("#start-timer").on("click", function () {
            if(!timerRunning) {
                timer=setInterval(step,1000);
                timerRunning=true;
            }
        }
    );
    $("#stop-timer").on("click", function () {
            if(timerRunning) {
                clearInterval(timer);
                timerRunning=false;
            }
        }
    );
    console.log("added functions");
}

function step() {
    let hour=parseInt($("#hours")[0].innerText);
    let min =parseInt($("#minutes")[0].innerText);
    let sec =parseInt($("#seconds")[0].innerText);

    sec++;
    if(sec==60) {
        sec=0;
        min++;
        if(min==60) {
            min=0;
            hour++;
            if(hour==100)
                hour=0;
            if(hour<10) $('#hours').text('0'+hour.toString());
            else $('#hours').text(hour.toString());            
        }
        if(min<10) $('#minutes').text('0'+min.toString());
        else $('#minutes').text(min.toString());
    }
    if(sec<10) $('#seconds').text('0'+sec.toString());
    else $('#seconds').text(sec.toString());
}

