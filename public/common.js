function setLeft(id,x){document.getElementById(id).style.left=x+"px";}
function setTop(id,y) {document.getElementById(id).style.top=y+"px";}
function getLeft(id) {return document.getElementById(id).offsetLeft;}
function getTop(id) {return document.getElementById(id).offsetTop;}
function randomNumber(low, high){ return(Math.floor(low+Math.random()*(1+high-low)))};
function isOverlapping(obj1,obj2, offset) {
    return ((getLeft(obj1)+offset>getLeft(obj2)) 
        && (getLeft(obj1)<getLeft(obj2)+offset) 
        && (getTop(obj1)+offset>getTop(obj2)) 
        && (getTop(obj1)<getTop(obj2)+offset));
}