import _ from 'lodash';
import './style.css';
// import img from './1.png';
// import data from './data.xml';
import printMe from './print';


function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = "click me and check the console.";
  btn.onclick = printMe;

  element.appendChild(btn);

  // var image = new Image();
  // image.src = img;
  // element.appendChild(image);

  // console.log(data);

  return element;
}

// document.body.appendChild(component());  
let element = component();    //赋予变量中，减少dom操作
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js',function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}