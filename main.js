// x*2+5y

function math(x,y){
 try{
    
    console.log((x**2)+5*y)
    console.log("we can not catch an error")
  }
catch(err){
    console.log("this is error"+err)
}
}
math(3,5)

// try{
//      let x=2;
//      let y=5;
    
//     console.log((x**2)+5*y)
//     console.log("we can not catch an error")
//   }
// catch(err){
//     console.log("this is error"+err)
// }        give ans 29
