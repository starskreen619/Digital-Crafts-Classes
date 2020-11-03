let i = 1;

  while(i < 10){
      console.log(i)
      i++
  }
  console.log(i)


  for(let i = 0; i < 10; i++){
    console.log(i)


    //optional leave out initial value   not common

  let i = 1
  for(; i<20; i++){
      console.log(i)
  }


  //best way

  let i = 0;
  while(i<10){
    if (i > 5)break;
    console.log(i)
    i++
  }

////////////////////////////////

  for(let i = 0;i<20;i++){
    if(!(i % 2)) continue;
    console.log(i)
}