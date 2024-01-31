//module for loading about page

const about = function () {

    //wipe current content
    const content = document.getElementById("content");
    content.innerHTML = '';


    const title = document.createElement('h2');
    title.textContent = "ABOUT";
    content.appendChild(title);

    const mainDiv = document.createElement('div');
    mainDiv.id = 'about-main'

    //left side paragraph
    const leftPara = document.createElement('div');
    leftPara.id = "leftPara";
    const leftP1 = document.createElement('p');
    const leftP2 = document.createElement('p');
    leftP1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula orci justo. Maecenas mi sapien, lacinia sit amet mattis vitae, dapibus non purus. Duis tincidunt vehicula dictum. Proin luctus, purus id varius rhoncus, ex ipsum maximus lectus, scelerisque pretium metus arcu eu dui. Praesent dignissim pharetra ligula pulvinar gravida. Duis in volutpat mi. Suspendisse vel risus vitae arcu tempus feugiat. Aliquam tincidunt feugiat tellus non sollicitudin.";
    leftP2.textContent = "Duis fermentum dapibus sapien quis dignissim. Integer ac lectus ac arcu luctus molestie ac eget odio. Ut porttitor massa sapien, malesuada posuere odio viverra non. Nam a auctor odio. Suspendisse rutrum lobortis libero, vel tempus ex maximus vitae. Donec dapibus pretium metus eu vehicula. In hac habitasse platea dictumst. Praesent dignissim posuere aliquet. Nunc eget libero ac turpis facilisis scelerisque. Duis viverra rhoncus arcu, sed mollis tellus aliquet vel. Etiam ante ex, placerat sit amet lacinia auctor, placerat nec lacus. Integer sed dapibus ante.";
    leftPara.appendChild(leftP1);
    leftPara.appendChild(leftP2);
    mainDiv.appendChild(leftPara);

    //right side paragraph 
    const rightPara = document.createElement('div');
    rightPara.id = "rightPara";
    const rightP1 = document.createElement ('p');
    const rightImg = new Image();
    rightImg.src = "../src/cup.jpg";
    rightImg.id = "about-page-image";
    rightP1.textContent = "Phasellus nec sodales erat. Fusce in nulla at libero tincidunt sagittis. In ut magna nec tellus laoreet gravida. Nunc consequat neque ac velit malesuada, ac fringilla libero ullamcorper. Duis finibus urna quis arcu sodales accumsan. Sed eleifend augue ut justo sodales, at congue augue molestie. Morbi sodales ante quis mattis elementum. Donec elementum bibendum leo, et dapibus justo dictum in. Quisque ac purus cursus, consectetur purus nec, facilisis nunc. Aenean dictum consequat risus, ac ornare mauris porta eu. Fusce ultrices neque id fringilla vulputate. Integer tincidunt enim vitae bibendum aliquet. Morbi pharetra eros quis tortor commodo, eu facilisis purus vulputate. Sed venenatis mi est, sit amet luctus lacus posuere et. Quisque tempor nec elit id vulputate.";
    rightPara.appendChild(rightImg);
    rightPara.appendChild(rightP1);
    mainDiv.appendChild(rightPara);

    
    content.appendChild(mainDiv);
    
}

export default about;