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

const languageDutch = () => {
  document.getElementsByClassName("french")[0].setAttribute("style", "display: none;");
  document.getElementsByClassName("dutch")[0].setAttribute("style", "display: contents;");
  localStorage.setItem("vierkantshoeve_language", "dutch");
  console.log("dutch", localStorage.getItem("vierkantshoeve_language"));
}

const languageFrench = () => {
  document.getElementsByClassName("french")[0].setAttribute("style", "display: contents;");
  document.getElementsByClassName("dutch")[0].setAttribute("style", "display: none;");
  localStorage.setItem("vierkantshoeve_language", "french");
  console.log("french", localStorage.getItem("vierkantshoeve_language"));
  console.log(document.getElementById("dutchBtn"));

}

// dutch button when pressed
document.getElementById("dutchBtn").addEventListener("click", languageDutch);

// french button when pressed
document.getElementById("frenchBtn").addEventListener("click", languageFrench);



//video.js
document.getElementsByClassName("introBtn").addEventListener("click", () => {
  document.getElementsByClassName("vidStart").click();
});

//nav.js
const init = () => {
  [...document.getElementsByClassName("childnavlink")].forEach((linkElem) => {
    linkElem.addEventListener("click", () => {
      window.location = `${linkElem.href}`
    });
  });
}

//put everything between src in href
const sourceAndLinkEqualizer = () => {
  let imgArray = document.getElementsByTagName('img');
  for (i = 0; i < imgArray.length; i++) {
    let imgTag = imgArray[i];
    let sourceAttribute = imgTag.getAttribute('src');
    imgTag.setAttribute('href', sourceAttribute);
  }
};

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
}

// LOAD
window.onload = () => {
  init();
  // starting;
  sourceAndLinkEqualizer();
  setLanguage();
}