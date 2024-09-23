const pages = document.querySelectorAll('.page') 
currentPage = 0;

function showPage(index){
    pages.forEach((page,i)=>{
        page.classList.remove('active')
        if(i===index){
            page.classList.add('active')
        }
    })
    PageNumber();
    document.getElementById('prevBtn').disabled = (currentPage === 0)
    document.getElementById('nextBtn').disabled = (currentPage === pages.length - 1)
}

function nextPage (){
    if(currentPage < pages.length - 1)
        currentPage++;
        showPage(currentPage)
}

function prevPage(){
    if (currentPage > 0){
        currentPage--;
        showPage(currentPage)
    }
}

function PageNumber(){
const pageNum = document.getElementById('pageNum')
pageNum.innerHTML = `Viewing Page ${currentPage+1}/5` 
}

let timeElapsed = 1*60;

function startTimer(){
    const timer = document.getElementById('timer')
    const countDown = setInterval(function(){
        const mins = Math.floor(timeElapsed/60)
        const secs = timeElapsed % 60 ;
        timer.textContent = (mins < 10 ? '0' + mins : mins) + ':' + (secs<10 ? '0' + secs : secs) 
        timeElapsed--;
        if(timeElapsed === 0){
            clearInterval(countDown)
            timer.textContent = 'Time is up ! '
        } 
    },1000)
}



window.onload= alert("Hello , You will have a Timer count Down when you say okay , just remember to relax and sit down dont worry about the timer ") , startTimer();
showPage(currentPage)