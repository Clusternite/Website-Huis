const init = () => {
  [...document.getElementsByClassName("childnavlink")].forEach((linkElem) => {
    linkElem.addEventListener("click", () => {
      window.location = `${linkElem.href}`
    });
  });
}

window.onload = init;