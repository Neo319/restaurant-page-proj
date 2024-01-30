// module to populate website page with homepage content


const populate = function () {
    console.log ("I'm here, from populate-content.js!")
    
    const content = document.getElementById("content");
    content.innerHTML = ''; //wipe any existing content before loading 

    //test
    const temp = document.createElement("div");
    temp.textContent = "content...";
    content.appendChild(temp);

    
    //first image
    const firstCard = document.createElement("div");
    firstCard.id= "firstCard"
    const firstCardImage = new Image();
    firstCardImage.src = '../src/food-1.jpg';
    firstCardImage.id = 'food-1';
    firstCardImage.classList = "food-img";
    firstCardImage.alt = "french toast with berries";

    //contents of first card displayed over image
    const firstCardText = document.createElement("div");
    const FCHeader = document.createElement("h3");
    const FCbody = document.createElement("p");
    FCHeader.textContent = "Header";
    FCbody.textContent = "lorem uspum sum doloret ... etc."
    firstCardText.id = "FCtext"
    
    firstCardText.appendChild(FCHeader);
    firstCardText.appendChild(FCbody);
    firstCard.appendChild(firstCardText);


    firstCard.appendChild(firstCardImage);
    content.appendChild(firstCard);


    //second image
    const secondCard = document.createElement("div");
    secondCard.id = "secondCard"
    const secondCardImage = new Image();
    secondCardImage.src = '../src/food-2.jpg';
    secondCardImage.id = 'food-2';
    secondCardImage.classList = "food-img"
    secondCardImage.alt= "chicken noodle soup";

    secondCard.appendChild(secondCardImage);
    content.appendChild(secondCard);
}

export default populate;