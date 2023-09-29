import logo from './logo.svg';
import './App.css';
let name="Chetan Bhagwat"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <h1>Hello{name}</h1>
    <div className='Container'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate tempore dolores? Magni 
        obcaecati nostrum temporibus ipsum dolore aliquam nisi,
         laudantium et facere eius unde quis amet ipsa ducimus dolorum.</p>

    </div>
    </>
  );
}

export default App;
