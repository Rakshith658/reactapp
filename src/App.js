
import './App.css';

import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

/* const fst ={
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title:'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

function Book({img ,title,author}) {
  return (
    <article>
      <img src={img}/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
} */

function App() {
  console.log(greeting);
  return (
    <div>
      <h1 className="ok">Book store</h1>
      <section className='booklist'>
        {data.map((book, index) => {
          return <SpecificBook key={book.id} {...book}></SpecificBook>;
        })}
      </section>
      </div>
  );

  // return(
  //   <section className="booklist">
  //     <Book img={fst.img} title={fst.title} author={fst.author} />
  //   </section>
  // );
}



export default App;
