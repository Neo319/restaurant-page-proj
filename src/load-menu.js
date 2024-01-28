//module for loading menu page

const menu = function () {
    console.log("loading menu page");

    const content = document.getElementById("content");
    content.innerHTML = '';

    content.textContent = "Menu page here!"
};

export default menu;