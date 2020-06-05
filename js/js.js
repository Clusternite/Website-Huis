const init = () => {
    [...document.getElementsByClassName("linkListInList")].forEach((linkElem) => {
        linkElem.addEventListener("click", () => {
            window.location = `${linkElem.href}`
        });
    });
}

window.onload = init;