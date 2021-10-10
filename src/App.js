import './App.css';
import {Games} from "./components/Games";
import {GAME} from "./data/data";
import {PROFILE} from "./data/data";
import {Profile} from "./components/Profile";

function App() {
  return (
      <div>
        <h1>League of legends</h1>
          <Profile profile={PROFILE}/>
          <Games games={GAME}/>

      </div>

  );
}

export default App;
