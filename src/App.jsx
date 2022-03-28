import "./App.css";
import { AddMeetup } from "./Components/AddMeetup/AddMeetup";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routers } from "./Components/Routers/Routers";

function App() {
  return (
    <div className="App">
      <Routers />
      <Navbar/>
      <AddMeetup/>
    </div>
  );
}

export default App;
