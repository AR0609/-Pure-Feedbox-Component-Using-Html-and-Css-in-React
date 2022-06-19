import "./App.css";
import Feedbox from "./components/feedbox/Example/feedboxexample.js";

function App() {
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pure Feedbox Component Using Html and Css in React
      </div>

      <div className="App">
        <Feedbox />
      </div>
    </>
  );
}

export default App;
