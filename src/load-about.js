const about = function () {
    console.log("loading about page!");

    //wipe current content
    const content = document.getElementById("content");
    content.innerHTML = '';

    //load about page (temp)
    const temp = document.createElement("div");
    temp.textContent = "Hi! I'm an about page!"
    content.appendChild(temp);
}

export default about;