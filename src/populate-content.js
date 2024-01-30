// module to populate website page with homepage content

import menu from './load-menu.js';


const populate = function () {
    console.log ("I'm here, from populate-content.js!")
    
    const content = document.getElementById("content");
    content.innerHTML = ''; //wipe any existing content before loading 


    
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
    FCHeader.textContent = "BREAKFAST SANDWICH SPECIAL";
    FCbody.textContent = "Don't miss out on the heavenly goodness of our french toast and berry breakfast sandwiches, now available for a limited time at 90% OFF!";
    firstCardText.id = "FCtext"

    // order button 
    const FCbtn = document.createElement('button');
    FCbtn.id= "FCbtn";
    FCbtn.textContent = "ORDER NOW";

    
    firstCardText.appendChild(FCHeader);
    firstCardText.appendChild(FCbody);
    firstCardText.appendChild(FCbtn);
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

    //second card text content
    const secondCardText = document.createElement('div');
    secondCardText.id = "SCtext";
    const SCHeader = document.createElement('h3');
    const SCBody = document.createElement('p');
    SCHeader.textContent = "LUNCH OPTION HIGHLIGHTS";
    SCBody.textContent = "Gift yourself with a savoury warm treat with our special lunch offers, including our special chicken noodle stew. ";


    // extra menu button 
    const SCbtn = document.createElement('button');
    SCbtn.id= "SCbtn";
    SCbtn.textContent = "VIEW MENU";

    secondCardText.appendChild (SCHeader);
    secondCardText.appendChild (SCBody);
    secondCardText.appendChild (SCbtn);

    secondCard.appendChild(secondCardImage);
    secondCard.appendChild(secondCardText);
    content.appendChild(secondCard);


    // both buttons will load the menu tab
    FCbtn.addEventListener('click', menu);
    SCbtn.addEventListener('click', menu);
}

export default populate;