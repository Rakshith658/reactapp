
import './App.css';

import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

function App() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
    
  );
}

export default App;
