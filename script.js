document.querySelector(".width-height").innerHTML=window.screen.width+"/"+window.screen.height;
document.querySelector(".retina").innerHTML=window.devicePixelRatio;
document.querySelector(".resolution").innerHTML=
    window.screen.width * window.devicePixelRatio +
      "/" +
      window.screen.height * window.devicePixelRatio;
