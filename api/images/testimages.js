let ti =require('./images.js');

let fakeres= {
  send: (x) =>{
    console.log(x);
  },
  mend: (x) => {
    console.log(x);
  }
}

let fakenext= () => {
  console.log('next called');
}

let result = ti({url:'/api/images'},fakeres,fakenext);