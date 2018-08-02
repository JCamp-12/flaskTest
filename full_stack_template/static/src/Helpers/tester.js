import React from 'react';

const Tester = () => {
  let num = Number(Math.floor(Math.random() * 1000)) 
  console.log('tester ran here: ' + num);
  return num
}

export default Tester;