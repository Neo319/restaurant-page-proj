//module for loading menu page

const menu = function () {
    console.log("loading menu page");

    const content = document.getElementById("content");
    content.innerHTML = '';

    //title
    const title = document.createElement('h2');
    title.textContent = "MENU";
    content.appendChild(title);

    //breakfast section
    const brk = document.createElement('div');
    brk.classList = "menu-item";
    const brkHead = document.createElement('h3');
    brkHead.textContent = "BREAKFAST";

    //first item
    const brk1 = document.createElement('div');
    const brk1Head = document.createElement('h4');
    const brk1Body = document.createElement('p');
    brk1Head.textContent = "French Toast Breakfast Sandwich";
    brk1Body.textContent = "A sweet and filling treat that combines light, fluffy cream cheese and sweet blueberries and strawberries with pan-fried french toast.";
    brk1.appendChild(brk1Head);
    brk1.appendChild(brk1Body);

    //second item
    const brk2 = document.createElement('div');
    const brk2Head = document.createElement('h4');
    const brk2Body = document.createElement('p');
    brk2Head.textContent = "The Works";
    brk2Body.textContent = "Your standard breakfast-diner fare: eggs (done how you like them) and breakfast sausages with hashbrowns and your choice of toast on the side.";
    brk2.appendChild(brk2Head);
    brk2.appendChild(brk2Body);

    brk.appendChild(brkHead);
    brk.appendChild(brk1);
    brk.appendChild(brk2);



    //lunch section
    const lun = document.createElement('div');
    lun.classList = "menu-item";
    const lunHead = document.createElement ('h3');
    lunHead.textContent = "LUNCH";

    //first item 
    const lun1 = document.createElement('div');
    const lun1Head = document.createElement('h4');
    const lun1Body = document.createElement('p');
    lun1Head.textContent = "Chicken Noodle Soup Special";
    lun1Body.textContent = "Our famous, deliciously savoury chicken noodle soup, with a classy, down-to-earth charm.";
    lun1.appendChild(lun1Head);
    lun1.appendChild(lun1Body);

    //second item 
    const lun2 = document.createElement('div');
    const lun2Head = document.createElement('h4');
    const lun2Body = document.createElement('p');
    lun2Head.textContent = "Cucumber Sandwich";
    lun2Body.textContent = "A smaller snack, but not passing up on flavor, as this sandwich comes stacked with sliced cucumber, tomato, red onion, and lettuce, with the option to include extra mayonnaise. ";
    lun2.appendChild(lun2Head);
    lun2.appendChild(lun2Body); 

    lun.appendChild(lunHead);
    lun.appendChild(lun1);
    lun.appendChild(lun2);


    // dinner section 
    const din = document.createElement('div');
    din.classList = "menu-item";
    const dinHead= document.createElement('h3');
    dinHead.textContent = "DINNER";
    
    //first item
    const din1 = document.createElement('div');
    const din1Head = document.createElement('h4');
    const din1Body = document.createElement('p');
    din1Head.textContent = "Pizza & Wings Combo";
    din1Body.textContent = "The ultimate in comfort food! Try our fresh, wood-stove cooked pies today!";
    din1.appendChild(din1Head);
    din1.appendChild(din1Body);

    //second item 
    const din2 = document.createElement('div');
    const din2Head = document.createElement('h4');
    const din2Body = document.createElement('p');
    din2Head.textContent = "Beef Stew";
    din2Body.textContent = "Our beef stew is slow-cooked from the start of each morning to bring you the ultimate in savory goodness. Served with fresh buns for dipping.";
    din2.appendChild(din2Head);
    din2.appendChild(din2Body);

    din.appendChild(dinHead);
    din.appendChild(din1);
    din.appendChild(din2);    


    content.appendChild(brk);
    content.appendChild(lun);
    content.appendChild(din);
    

};

export default menu;