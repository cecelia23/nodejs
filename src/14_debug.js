function test1 () {
  let a = parseInt(Math.random()*10);
  let b = parseInt(Math.random()*10);
  let res = test2(a,b);
  console.log(res);
  
}

function test2(a, b) {
  if (a<b){
    a *= 2;
  }else {
    a = a-b;
  }
  return a;
}

test1();
// node --inspect-brk file_name.js
// chrome://inspect/#devices
