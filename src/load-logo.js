// module for loading the logo inside the header element.

const loadLogo = function () {
    const header = document.querySelector('header');
    const logoDiv = document.createElement('div');
    logoDiv.id = 'logoDiv';

    const logo = new Image()
    logo.src = "../src/logo.png"
    logo.id = "logo"

    const logoText = document.createElement("span");
    logoText.textContent = "Smilee's Diner";

    logoDiv.appendChild(logo);
    logoDiv.appendChild(logoText);

    header.insertBefore(logoDiv, header.firstChild)
};

export default loadLogo;