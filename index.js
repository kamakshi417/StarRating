// WRITE SOLUTION HERE
const starContainer = document.querySelector("#star-container");
const countval = document.querySelector('#count');
var finalIndex=-1;
starContainer.addEventListener("mouseover",function(event){
    console.log(event);
    if(event.target.classList.contains('star')){
        let index = parseInt(event.target.getAttribute('data-index'));
        for(let i=0;i<event.currentTarget.childElementCount;i++){
            if(i<index)
            event.currentTarget.querySelectorAll('.star')[i].classList.add('star-filled');
        }
    }

});
starContainer.addEventListener("click",function(event){
    console.log(event);
    if(event.target.classList.contains('star')){
        finalIndex  = parseInt(event.target.getAttribute('data-index'));
        countval.textContent = finalIndex;
        
    }

});
starContainer.addEventListener("mouseleave",function(event){
    console.log(event);
   const allStar =  event.currentTarget.querySelectorAll('.star');
   for(let j=0;j<allStar.length;j++){
    if(event.currentTarget.getElementsByClassName('star')[j].classList.contains('star-filled') && j>=finalIndex){
        event.currentTarget.getElementsByClassName('star')[j].classList.remove('star-filled');
    }
   }
   
    // if(event.target.classList.contains('star')){
    //     let index = event.target.getAttribute('data-index');
    //     for(let i=0;i<event.currentTarget.childElementCount-1;i++){
    //         event.currentTarget.querySelectorAll('.star')[i].setAttribute('class','star-filled');
    //     }
    // }

});