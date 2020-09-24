import React from "react";

function App() {
  return (
    <div className="App">
      <form>
        <label for="fname">First Name: </label>
        <br />
        <input type="text" id="fname" />
        <br />
        <label for="lname">Last Name: </label>
        <br />
        <input type="text" id="lname" />
        <br />
      </form>
    </div>
  );
}

export default App;
