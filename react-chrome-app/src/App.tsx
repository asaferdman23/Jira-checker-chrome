import {useState } from "react";
import strings from '../res/strings';
// global variables: value, counter, setValue

function App() {
  const [value, setValue] = useState("");
  let counter = 0;

  const addDescriptionButtonClick = () => {
    if (counter == 1){
      return;
    }

    let newValue = [strings.all.description] as unknown as string;
    setValue(newValue);

  }

  return (
    <div>
      <header>
        <h2>Hello From React App👋</h2>
        <button onClick={addDescriptionButtonClick}>Add Description, v1 (on a textArea)</button>
        <textarea
          value={value}
          onChange={({ target }) => setValue(target.value)}>
        </textarea>
      </header>
    </div>
  );
}


export default App;