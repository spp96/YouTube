let playvideo = () => {
    let video = JSON.parse(localStorage.getItem("video"));
let id = video.id.videoId;
    let play_video = document.getElementById("play_video");
    play_video.src = `https://www.youtube.com/embed/${id}`
  };