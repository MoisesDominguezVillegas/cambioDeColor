const randomColor = () =>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let divTest = `<div id="test" style="background-color:rgb(${r},${g},${b})"></div>`;
    return divTest;
}
document.body.innerHTML = randomColor();