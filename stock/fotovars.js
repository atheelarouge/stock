function Myrand(max,min){
  arr=[];
  for (i = 0; i < max; i++) {
      x = Math.floor( Math.random() * max) + min;
      if(arr.includes(x) == true){
          i=i-1;
      }else{
          if(x>max==false){
              arr.push(x);
          }
      }
  }
  return arr;
}

module.exports = Myrand