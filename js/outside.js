const starting = () => {
  var len = 6;
  var src = document.getElementById("images");
  for (var i = 1; i <= len; i++) {
    img = new Image();
    img.src = `./images/outside/outside (${i}).jpg`;
    img.setAttribute("class", 'img-fluid');
    img.alt = 'Image';

    var a = document.createElement('a');
    a.href = `./images/outside/outside (${i}).jpg`;
    a.setAttribute("class", "d-block figure");
    a.appendChild(img);

    var div = document.createElement('div');
    div.setAttribute("class", "col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry");
    div.appendChild(a);

    src.appendChild(div);
  }
}

window.onload = starting();