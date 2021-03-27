import './App.css';
import List from './List';


// Create a simple todo list. Data is not stored permanently and it will disappear, if you refresh your browser 
// (this could be fixed using local storage). UI is really simple (and some Bootstrap could be used to make it more pretty).
function App() {
  return (
    <div>
      <List />
      
    </div>
  );
}

export default App;
