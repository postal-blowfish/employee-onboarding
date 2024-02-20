const vidBtn1 = document.querySelector('#vid-title1')
let vidBtn2 = document.querySelector('#vid-title2')
let vidbtn3 = document.querySelector('#vid-title3')
let vidBtn4 = document.querySelector('#vid-title4')
let vidBtn5 = document.querySelector('#vid-title5')
let vidBtn6 = document.querySelector('#vid-title6')
let vidBtn7 = document.querySelector('#vid-title7')
let vidBtn8 = document.querySelector('#vid-title8')
let vidBtn9 = document.querySelector('#vid-title9')
let vidBtn10 = document.querySelector('#vid-title10')
let vidBtn11 = document.querySelector('#vid-title11')

const vidBox1 = document.querySelector('#vid-box1')
let vidBox2 = document.querySelector('#vid-box2')
let vidBox3 = document.querySelector('#vid-box3')
let vidBox4 = document.querySelector('#vid-box4')
let vidBox5 = document.querySelector('#vid-box5')
let vidBox6 = document.querySelector('#vid-box6')
let vidBox7 = document.querySelector('#vid-box7')
let vidBox8 = document.querySelector('#vid-box8')
let vidBox9 = document.querySelector('#vid-box9')
let vidBox10 = document.querySelector('#vid-box10')
let vidBox11 = document.querySelector('#vid-box11')

const vid1 = document.querySelector('#vid1')
let vid2 = document.querySelector('#vid2')
let vid3 = document.querySelector('#vid3')
let vid4 = document.querySelector('#vid4')
let vid5 = document.querySelector('#vid5')
let vid6 = document.querySelector('#vid6')
let vid7 = document.querySelector('#vid7')
let vid8 = document.querySelector('#vid8')
let vid9 = document.querySelector('#vid9')
let vid10 = document.querySelector('#vid10')
let vid11 = document.querySelector('#vid11')

function toggle1() {

     if (vidBox1.style.display && vid1.style.display == "none") {
         vidBox1.style.display = "block";
         vid1.style.display = "block";
         console.log('hello')
        } else {
            vidBox1.style.display = "none";
            vid1.style.display ="none";
        }
    }


vidBtn1.addEventListener('click', toggle1());