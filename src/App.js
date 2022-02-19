import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>React - Redux</h2>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
