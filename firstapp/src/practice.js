import React from 'react'
function Practice() {
  const list=["Ram","Shyam","Mohan","Lakan","Sitaram"];
  const nameElement=[];
   for(let i=0;i<list.length;i++)
   {
    nameElement.push(<h2 key={i}>Hello, I am {list[i]}</h2>);
   }
   return nameElement
}
export default Practice;
