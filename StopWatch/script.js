function run(){
    let num=1;
    let stp=document.getElementById("stop")
    // let isclicked=false
    let show=document.getElementById("num")

    // Got to know about "SET INTERVAL"
    let intervalid=setInterval(() => {
        show.innerText=num++
    }, 1000);

    // "CLEAR INTERVAL"
    stp.addEventListener("click", ()=>{
        clearInterval(intervalid)
        show.innerHTML+="<br>Timer Stopped!"
    })
}
