let myh = document.querySelector('h1');
myh.textContent = 'THere Were A SimPle Story...'

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/001 (2).jpg'){
        myImage.setAttribute('src','images/4xz89v.jpg');
    }else{
        myImage.setAttribute('src','images/001 (2).jpg');
    }
}

function setHeading(name) {
    let myheading = document.querySelector('h2')
    myheading.textContent = '你好' + name +'...'
}
function getname() {
    let username = prompt('你谁？')
    localStorage.setItem('name',username)
    setHeading(username)
}
let a = localStorage.getItem('name');
if(!a) {
    getname();
}else {
    setHeading(a);
}
let button = document.querySelector('button');
button.onclick = getname;