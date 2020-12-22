import React from 'react'

const Book = ({ img, title, author,price }) => {
 // attribute, eventHandler
 // onClick, onMouseOver

 return (
  <article
   className='book'
   onMouseOver={() => {
    console.log(title);
   }}
  >
   <img src={img} alt='' />
   <h1 onClick={() => console.log(title)}>{title}</h1>
   <h3>{` $ ${price}`}</h3>
   <h4>{author}</h4>
  
  </article>
 );
};

export default Book;