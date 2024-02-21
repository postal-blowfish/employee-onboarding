const videoTitles = [ document.querySelector('#vid-title1'), document.querySelector('#vid-title2'), document.querySelector('#vid-title3'), document.querySelector('#vid-title4'), document.querySelector('#vid-title5'), document.querySelector('#vid-title6'), document.querySelector('#vid-title7'), document.querySelector('#vid-title8'), document.querySelector('#vid-title9'),
 document.querySelector('#vid-title10'),
 document.querySelector('#vid-title11') ]
//  creating array of video titles to be used as buttons

 const videoBoxes = [document.querySelector('#vid-box1'),
 document.querySelector('#vid-box2'),
 document.querySelector('#vid-box3'),
 document.querySelector('#vid-box4'),
 document.querySelector('#vid-box5'),
 document.querySelector('#vid-box6'),
 document.querySelector('#vid-box7'),
 document.querySelector('#vid-box8'),
 document.querySelector('#vid-box9'),
 document.querySelector('#vid-box10'),
 document.querySelector('#vid-box11') ]

// creating an array of the boxes containing the videos

const videos = [document.querySelector('#vid1'),
 document.querySelector('#vid2'),
 document.querySelector('#vid3'),
 document.querySelector('#vid4'),
 document.querySelector('#vid5'),
 document.querySelector('#vid6'),
 document.querySelector('#vid7'),
 document.querySelector('#vid8'),
 document.querySelector('#vid9'),
 document.querySelector('#vid10'),
 document.querySelector('#vid11')]
// creating an array of the videos themselves

 const toggleVideo = (index) => {
    const videoBox = videoBoxes[index];
    const video = videos[index];
  
    videoBox.style.display = videoBox.style.display === "none" ? "block" : "none";
    video.style.display = video.style.display === "none" ? "block" : "none";
  };
//   creating a function to toggle between displaying and hiding the videos upon click
  
  videoTitles.forEach((title, index) => {
    title.addEventListener('click', () => toggleVideo(index));
  });
//   adding a listener to the video titles in order to call the toggleVideo function upon click