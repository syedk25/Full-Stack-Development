window.onload = function(){

    let seconds = 0;
    let miliSeconds = 0;

    let interval;

    const addSeconds = document.querySelector(".seconds");
    const addMilliSeconds = document.querySelector(".milli");

    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    startBtn.onclick = function(){

        clearInterval(interval);
        interval = setInterval(start,10);

    }

    stopBtn.onclick = function(){
        clearInterval(interval);
    }

    resetBtn.onclick = function(){
        clearInterval(interval);
        seconds = 0;
        miliSeconds = 0;
        addSeconds.innerHTML = "00";
        addMilliSeconds.innerHTML = "00";
    }


    function start(){

        miliSeconds++;

        if(miliSeconds < 10 ){
            addMilliSeconds.innerHTML = "0" + miliSeconds;

        }else{
            addMilliSeconds.innerHTML =  miliSeconds;

        }

        ///  1 s = 1000 ms  /// 1s = 100ms

        if(miliSeconds > 99){
            seconds++;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds: seconds;
            miliSeconds = 0;
            addMilliSeconds.innerHTML = "00";
        }



    }


}; 