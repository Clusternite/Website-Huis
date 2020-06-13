const starting = () => {
  let urlname = window.location.pathname.slice(0, -5);
  console.log(urlname)
  let len = 100;
  let array = [];
  for (let i = 1; i <= len; i++) {
    img = new Image();
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

        array.push(div);
      }
    }
  }

  let src = document.getElementById("images");
  array.forEach(elem => {
    src.appendChild(elem);
    console.log(elem)
  })
}

window.onload = starting();