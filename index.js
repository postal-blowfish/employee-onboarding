const videoTitles = [ document.querySelector('#vid-title-cont1'), 
  document.querySelector('#vid-title-cont2'),
  document.querySelector('#vid-title-cont3'),
  document.querySelector('#vid-title-cont4'), 
  document.querySelector('#vid-title-cont5'),
  document.querySelector('#vid-title-cont6'),
  document.querySelector('#vid-title-cont7'), 
  document.querySelector('#vid-title-cont8'), 
  document.querySelector('#vid-title-cont9'),
  document.querySelector('#vid-title-cont10'),
  document.querySelector('#vid-title-cont11') ]
//  creating array of video titles to be used as buttons

 const videoBoxes = [document.querySelector('#vid1'),
 document.querySelector('#vid2'),
 document.querySelector('#vid3'),
 document.querySelector('#vid4'),
 document.querySelector('#vid5'),
 document.querySelector('#vid6'),
 document.querySelector('#vid7'),
 document.querySelector('#vid8'),
 document.querySelector('#vid9'),
 document.querySelector('#vid10'),
 document.querySelector('#vid11') ]

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

  const computedDisplay = window.getComputedStyle(videoBox).display;

  if (computedDisplay === "none") {
      videoBox.style.display = "block";
      video.style.display = "block";
      setTimeout(() => {
          videoBox.style.opacity = "1";
          video.style.opacity = "1";
      }, 10); // This small delay ensures the transition works correctly
  } else {
      videoBox.style.opacity = "0";
      video.style.opacity = "0";
      setTimeout(() => {
          videoBox.style.display = "none";
          video.style.display = "none";
      }, 800); // Adjust the timeout to match the transition duration
  }
};
  videoTitles.forEach((title, index) => {
    title.addEventListener('click', () => toggleVideo(index));
  });
//   adding a listener to the video titles in order to call the toggleVideo function upon click

const addTransitionStyles = () => {
    videoBoxes.forEach((box) => {
        box.style.transition = "opacity 0.8s ease, display 0.8s ease";
    });
    videos.forEach((vid) => {
        vid.style.transition = "opacity 0.8s ease, display 0.8s ease";
    });
};
// Add transition styles
  
  addTransitionStyles();