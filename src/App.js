
import './App.css';

import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing'

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
}

export default App;
