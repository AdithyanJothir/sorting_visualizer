var cursor = document.getElementById("cursor");

var box1 = document.getElementById("box1");

var box2 = document.getElementById("box2");

var box3 = document.getElementById("box3");

var box4 = document.getElementById("box4");

var box5 = document.getElementById("box5");


const first = getComputedStyle(document.documentElement).getPropertyValue('--first'),
second =getComputedStyle(document.documentElement).getPropertyValue('--second'),
third = getComputedStyle(document.documentElement).getPropertyValue('--third'),
fourth =  getComputedStyle(document.documentElement).getPropertyValue('--fourth');


const arr = [box1, box2, box3, box4, box5];
var anims = ["anim1","anim2","anim3","anim4"];
var borders = [first,second,third,fourth];
var i=0 , j=0;



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


async function swap(){
  for (var i = 0; i < 5; i++) 
  {
    for (var j = 0; j < 5 - i - 1; j++) {
      let val1 = parseInt(arr[j].value);
      let val2 = parseInt(arr[j + 1].value);
      cursor.classList.add(anims[j]);
      cursor.style.marginLeft = borders[j];
      cursor.classList.remove(anims[j]);
      await sleep(1000);
      if (val1 > val2) {
        cursor.style.borderColor = "#f23535";
        await sleep(200);
        var temp = arr[j].value;
        arr[j].value = arr[j + 1].value;
        arr[j + 1].value = temp;
        cursor.style.borderColor = "#42ff58";
       
      }
      
    }
    
  }

}





