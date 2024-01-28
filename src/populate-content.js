// module to populate website page with its content


const populate = function () {
    console.log ("I'm here, from populate-content.js!")
    //next: add the content found in comments of index.html here.

    const content = document.getElementById("content");
    const header = document.querySelector("header");

    //test
    const temp = document.createElement("div");
    temp.textContent = "content...";
    content.appendChild(temp);


}

export default populate;