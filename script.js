var newday='';
var day='';
let curretdate=new Date();
const body=document.querySelector('body');
const d=document.getElementById('days');
const h=document.getElementById('hours');
const m=document.getElementById('mins');
const s=document.getElementById('sec');
let show=document.querySelector('.time');
let form=document.querySelector('.form');
function val(){
    newday=document.getElementById('date1').value;
    day=new Date(newday);
    if(day>curretdate){
    show.style.display='flex';
    form.style.display='none';
    }
    else{
        show.style.display='none';
        alert('Enter valid date ');
        form.style.display='block';
    }
}
function countdown()
{
    curretdate=new Date();
    day=new Date(newday);
    seconds=(day-curretdate)/1000;
    days=Math.floor(seconds/3600/24);
    hours=Math.floor(seconds/3600)%24;
    mins=Math.floor(seconds/3600)%60;
    sec=Math.floor(seconds)%60;
    console.log(days,hours,mins,sec);
    d.innerHTML=days;
    h.innerHTML=format(hours);
    m.innerHTML=format(mins);
    s.innerHTML=format(sec);
}
function format(time)
{
    return time<10? ('0'+time):time;
}
countdown();
setInterval(countdown,1000);