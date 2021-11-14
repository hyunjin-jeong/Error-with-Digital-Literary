

let container = document.querySelector('#container');
let imgBtns = document.querySelectorAll('.imgBtn');

let imgSrc = ['error.png', 'error.png', 'error.png'];

for(let i=0; i<imgBtns.length; i++){
    imgBtns[i].addEventListener('click', testFn);
}

let tempX, tempY, tempWidth;

function testFn(e)
{
    console.log(e);
    //console.log(e.path[0]);
    tempX = e.pageX;
    tempY = e.pageY;
    tempWidth = 300 + Math.random()*200;
    tempHeight = tempWidth * 0.35;
    tempImagIndex = Math.floor(Math.random()*3); // 0~2
    makeWindow(tempX, tempY, tempWidth, tempHeight, tempImagIndex);
}

function makeWindow(x, y, width, height, imgid)
{
    let tempWindow = document.createElement('img');
    tempWindow.style.width = width + 'px';
    tempWindow.style.height = height + 'px';
    tempWindow.src = imgSrc[imgid];
    tempWindow.style.position = 'absolute';
    tempWindow.style.left = (x - width/2)+'px';
    tempWindow.style.top = y - height/2 + 'px';

    container.appendChild(tempWindow);

}








    var bDisplay = true;
    function doDisplay(){
        var con = document.getElementById("box");
        if(con.style.display=='block'){
            con.style.display = 'none';
        }else{
            con.style.display = 'block';
        }
    }


   

