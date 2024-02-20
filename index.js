var vidBtn = document.getElementsByClassName(".vid-title-click")
var vidBox = document.getElementsByClassName(".vidBox")
var display = 0;


function toggle() {
  
    if(display == 1)
    {
        vidBox.style.display ='block'
        display = 0;
    }
    else 
    {
        vidBox.style.display = "none"
        display = 1;
    }

}
vidBtn.addEventListener("click", toggle())