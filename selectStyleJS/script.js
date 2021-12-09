let footer = document.querySelector('.footer');
footer.style.cssText = `
display : flex ;
justify-content: center;
flex-wrap : wrap;
text-align : center;
`;
/* footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.flexWrap = 'wrap';
footer.style.textAlign = 'center'; */

function styleTheDesc() {
  let foodDesc = document.querySelectorAll('.food-desc'); //Nodelist 
  let backcolor = colorGenerator();
  foodDesc.forEach((item) => {
    item.style.flex = '25%';
    item.style.margin = '2em';
    item.style.maxWidth = '8em';
    item.style.minHeight = '8em';
    item.style.lineHeight = '5em';
    item.styletextAlign = 'center';
    item.style.border = 'orange solid 3px';
    item.style.borderRadius = '50%';
    item.style.backgroundColor = backcolor;
  });
}

function changeMenuColors() {
  let foodCat = document.getElementsByClassName('food-category'); //html collection
  for (i = 0; i < foodCat.length; i++) {
    foodCat[i].style.backgroundColor = colorGenerator();
    foodCat[i].style.flex = '25%';
    foodCat[i].style.margin = '1em';
    foodCat[i].style.minWidth = '12em';
    foodCat[i].style.minHeight = '6em';
    foodCat[i].style.lineHeight = '2em';
  }
}
