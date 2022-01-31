
import './App.css';
import { Counter } from './components/counter';
// import { UserDetails } from './components/userDetails';

function App() {
  return (
    <div className="App">
      {/* <UserDetails name="john" add="Mumbaui" age={18} aboveAge={true}/>
      <UserDetails name="Lucky" add="Pune" age="17" aboveAge={false} /> */}

    <Counter />
    </div>
  );
}

export default App;
