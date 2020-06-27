let src = document.getElementById("images");
const pageNames = ["rental", "outside"];
let len = 100;
const starting = () => {
  let urlname = window.location.pathname.slice(0, -5);
  console.log(urlname)
  
  if (urlname == "/allimages") {
    pageNames.forEach(pageName => {
      addImagesToPageFromURl(`/${pageName}`)
    })
  } else
    addImagesToPageFromURl(urlname);


}

function addImagesToPageFromURl(urlname) {
  for (let i = 1; i <= len; i++) {
    console.log()
    let img = new Image();
    img.src = `./images${urlname}${urlname} (${i}).jpg`;
    img.onload = () => {
      if (img.width !== 0) {
        img.setAttribute("class", 'img-fluid');
        img.alt = 'Image';

        let a = document.createElement('a');
        a.href = `./images${urlname}${urlname} (${i}).jpg`;
        a.setAttribute("class", "d-block figure");
        a.appendChild(img);

        let div = document.createElement('div');
        div.setAttribute("class", "col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry");
        div.appendChild(a);

        src.appendChild(div);
      }
    }
  }
}

window.onload = starting();