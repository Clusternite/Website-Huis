// -------------------------- Lazy loading images  --------------------------
document.addEventListener("DOMContentLoaded", function () {
  let imgArray = document.getElementsByTagName("img");
  for (i = 0; i < imgArray.length; i++) {
    let imgTag = imgArray[i];
    let attribute = imgTag.getAttribute("class");
    imgTag.setAttribute("class", `${attribute} lazy`);
  }
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

// -------------------------- Change between languages --------------------------
const displayElementsInMenu = (displayFrench, displayDutch) => {
  const arrayFrench = document.getElementsByClassName("nav-frech");
  const arrayDutch = document.getElementsByClassName("nav-dutch");
  for (let i = 0; i < arrayFrench.length; i++) {
    let elemDutch = arrayDutch[i];
    elemDutch.style.display = displayDutch;
    let elemFrench = arrayFrench[i];
    elemFrench.style.display = displayFrench;
  }
};

const languageDutch = () => {
  document
    .getElementsByClassName("french")[0]
    .setAttribute("style", "display: none;");
  document
    .getElementsByClassName("dutch")[0]
    .setAttribute("style", "display: contents;");
  localStorage.setItem("vierkantshoeve_language", "dutch");

  displayElementsInMenu("none", "");
};

const languageFrench = () => {
  document
    .getElementsByClassName("french")[0]
    .setAttribute("style", "display: contents;");

  console.log(document.getElementsByClassName("french")[0]);
  console.log(document.getElementsByClassName("dutch")[0]);

  document
    .getElementsByClassName("dutch")[0]
    .setAttribute("style", "display: none;");
  localStorage.setItem("vierkantshoeve_language", "french");

  displayElementsInMenu("", "none");
};

// dutch button when pressed
document.getElementById("dutchBtn").addEventListener("click", languageDutch);

// french button when pressed
document.getElementById("frenchBtn").addEventListener("click", languageFrench);

// -------------------------- video.js --------------------------
document.getElementsByClassName("introBtn")[0].addEventListener("click", () => {
  document.getElementsByClassName("vidStart")[0].click();
});

// -------------------------- nav.js --------------------------
const init = () => {
  [...document.getElementsByClassName("childnavlink")].forEach((linkElem) => {
    linkElem.addEventListener("click", () => {
      window.location = `${linkElem.href}`;
    });
  });
};

// -------------------------- copy everything from src to href --------------------------
const sourceAndLinkEqualizer = () => {
  let imgArray = document.getElementsByTagName("img");
  for (i = 0; i < imgArray.length; i++) {
    let imgTag = imgArray[i];
    let sourceAttribute = imgTag.getAttribute("data-src");
    imgTag.setAttribute("href", sourceAttribute);
  }
};
// -------------------------- Local storage --------------------------
const setLanguage = () => {
  const language = localStorage.getItem("vierkantshoeve_language");
  switch (language) {
    case "dutch":
      languageDutch();
      break;
    case "french":
      languageFrench();
      break;
    default:
      languageDutch();
      break;
  }
};

//  -------------------------- LOAD --------------------------
window.onload = () => {
  init();
  sourceAndLinkEqualizer();
  setLanguage();
};

// let src = document.getElementById("images");
// const pageNames = ["primary", "rental", "multipurpose", "barn", "outside"];
// let len = 85;
// const starting = () => {
//   let urlname = window.location.pathname.slice(0, -5);
//   if (urlname == "/allimages") {
//     pageNames.forEach(pageName => {
//       addImagesToPageFromURl(`/${pageName}`)
//     })
//   } else
//     addImagesToPageFromURl(urlname);
// }

// function addImagesToPageFromURl(urlname) {
//   for (let i = 1; i <= len; i++) {
//     let img = new Image();
//     img.src = `./images${urlname}${urlname} (${i}).jpg`;
//     img.onload = () => {
//       if (img.width !== 0) {
//         img.setAttribute("class", 'img-fluid');
//         img.alt = 'Image';

//         let a = document.createElement('a');
//         a.href = `./images${urlname}${urlname} (${i}).jpg`;

//         a.setAttribute("class", "d-block figure");
//         a.setAttribute("data-fancybox", "gallery");
//         a.setAttribute("data-width", "500");
//         // a.setAttribute("data-thumb", `./images${urlname}${urlname} (${i}).jpg`)
//         a.setAttribute("data-caption", `${urlname}`);
//         a.appendChild(img);

//         let div = document.createElement('div');
//         div.setAttribute("class", "col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry");
//         div.appendChild(a);

//         src.appendChild(div);
//       }
//     }
//   }
// }
