function myTurn(event){
  const item=event.currentTarget;
  const image=document.createElement('img');
  image.src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  item.appendChild(image);
  const index=freeBoxes.indexOf(item);
  const ind=filledBoxes.indexOf(item);
  filledBoxes[ind]=1;
  freeBoxes.splice(index,1); 
  item.removeEventListener('click',myTurn);
  //console.log(filledBoxes.join());
   if(winner()){
     displayResult();
  }
  else{
  compTurn();
   }
}
function displayResult()
{
    if(winner()===1){
    const result=document.querySelector('h1');
      result.textContent="YOU WON";
    }
    else if(winner()===2){
    const result=document.querySelector('h1');
      result.textContent="YOU LOSE";
    }
     else
       {
         const result=document.querySelector('h1');
      result.textContent="GAME OVER!! MATCH TIED";
       }
    for(const box of freeBoxes){ 
      box.removeEventListener('click',myTurn);
    }
  const again=document.querySelector('button');
  again.classList.remove('hidden');
  again.addEventListener('click',retry);
}
function retry(event){
  const element=event.currentTarget;
  freeBoxes.length=0;
const boxes=document.querySelectorAll('grid div');
for(const box of boxes){
  box.innerHTML="";
}
  filledBoxes.length=0;
  element.removeEventListener('click',retry);
 element.classList.add('hidden');
  const result=document.querySelector('h1');
      result.textContent="TIC TAC TOE";
  //console.log(filledBoxes.join());
 // console.log(freeBoxes.join());
  play();
}
function winner(){
  for(let i=0;i<3;i++){
 if(filledBoxes[i]===filledBoxes[i+3] && filledBoxes[i+3]===filledBoxes[i+6]  && filledBoxes[i]!=0){
    return filledBoxes[i];}
    else  if(filledBoxes[3*i]===filledBoxes[3*i+1] && filledBoxes[3*i+1]===filledBoxes[3*i+2]  && filledBoxes[3*i]!=0){
    return filledBoxes[3*i];}
    else  if(filledBoxes[0]===filledBoxes[4] && filledBoxes[4]===filledBoxes[8] && filledBoxes[0]!=0){
    return filledBoxes[0];}
    else  if(filledBoxes[2]===filledBoxes[4] && filledBoxes[4]===filledBoxes[6]  && filledBoxes[2]!=0){
    return filledBoxes[2];}
    else if(!freeBoxes.length && i==2){
      return 4;
    }
  }
   return 0;
}
function compTurn(){
  const index=Math.floor(Math.random()*freeBoxes.length);
  const item=freeBoxes[index];
  freeBoxes.splice(index,1);
  const image=document.createElement('img');
  image.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png";
  item.appendChild(image);
  item.removeEventListener("click",myTurn);
  const ind=filledBoxes.indexOf(item);
  filledBoxes[ind]=2;
   if(winner()){
     displayResult();
  }
  //console.log(filledBoxes.join());
}
freeBoxes=[];
filledBoxes=[];
function play(){
const boxes=document.querySelectorAll('grid div');
for(const box of boxes){
  filledBoxes.push(box);
}
for(const box of boxes){
box.addEventListener('click',myTurn);
  freeBoxes.push(box);
}
}
play();
//console.log(filledBoxes.join());