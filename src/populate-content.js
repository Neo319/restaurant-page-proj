// module to populate website page with its content


const populate = function () {
    console.log ("I'm here, from populate-content.js!")

    const content = document.getElementById("content");
    const header = document.querySelector("header");

    //test
    const temp = document.createElement("div");
    temp.textContent = "content...";
    content.appendChild(temp);

    //header logo    
    const logo = new Image()
    logo.src = "../src/logo.png"
    logo.id = "logo"
    header.insertBefore(logo, header.firstChild)



    //first image
    const firstCard = document.createElement("div");
    const firstCardImage = new Image();
    firstCardImage.src = '../src/food-1.jpg';
    firstCardImage.id = 'food-1';
    firstCardImage.alt = "french toast with berries";

    firstCard.appendChild(firstCardImage);
    content.appendChild(firstCard);


    //second image
    const secondCard = document.createElement("div");
    const secondCardImage = new Image();
    secondCardImage.src = '../src/food-2.jpg';
    secondCardImage.id = 'food-2';
    secondCardImage.alt= "chicken noodle soup";

    secondCard.appendChild(secondCardImage);
    content.appendChild(secondCard);
}

export default populate;