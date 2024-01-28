// module for loading the logo inside the header element.

const loadLogo = function () {
    const header = document.querySelector('header');

    const logo = new Image()
    logo.src = "../src/logo.png"
    logo.id = "logo"
    header.insertBefore(logo, header.firstChild)
};

export default loadLogo;