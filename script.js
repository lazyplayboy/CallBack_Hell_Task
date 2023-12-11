function one(cb =() => {}){
    console.log('10')
    countDown('10')
    cb();
}
function two(cb =() => {}){
    console.log('9')
    countDown('9')
    cb();
}
function three(cb =() => {}){
    console.log('8')
    countDown('8')
    cb();
}
function four(cb =() => {}){
    console.log('7')
    countDown('7')
    cb();
}
function five(cb =() => {}){
    console.log('6')
    countDown('6')
    cb();
}
function six(cb =() => {}){
    console.log('5')
    countDown('5')
    cb();
}
function seven(cb =() => {}){
    console.log('4')
    countDown('4')
    cb();
}
function eight(cb =() => {}){
    console.log('3')
    countDown('3')
    cb();
}
function nine(cb =() => {}){
    console.log('2')
    countDown('2')
    cb();
}
function ten(cb =() => {}){
    console.log('1')
    countDown('1')
    cb();
}
function zero(cb =() => {}){
    console.log('HAPPY NEW YEAR')
    countDown('HAPPY NEW YEAR')
    cb();
}

function countDown(message){
    const para = document.getElementById("countDown")
    para.innerText = message;
}

function greet() {
    one(() => setTimeout(() =>{
     two(() => setTimeout(() =>{
      three(() => setTimeout(() =>{
       four(() => setTimeout(() =>{
        five(() => setTimeout(() =>{
         six(() => setTimeout(() => {
          seven(() => setTimeout(() =>{
           eight(() => setTimeout(() => {
              nine(() => setTimeout(() => {
              ten(() => setTimeout(() =>{
                zero()
              },1000));       
              }, 1000));       
           }, 1000));
          },1000));
         },1000));
        }, 1000));
       }, 1000));
      }, 1000));
     }, 1000));
    }, 1000));
   }
   
  greet();
