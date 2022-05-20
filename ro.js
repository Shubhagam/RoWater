console.log("bike");
var img=[];
var time=2500;
var i=0;
img[0]="image1.jpg";
img[1]="image2.jpg";
img[2]="image3.jpg";
function change()
{
   document.slide.src=img[i];
    if(i<img.length-1)
    {
        console.log("hsjk");
        i++;
    }
    else
    {
        i=0;
    }
    setTimeout("change()",time);
}
window.onload=change;