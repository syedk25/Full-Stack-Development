import { useReducer } from 'react';
 

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME": return { ...state, name: action.payload };
    case "SET_AGE": return { ...state, age: action.payload };
    case "SUBMIT": return { ...state, submitted: true };
    default: return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: 0, submitted: false });
  return (
    <div>
      <input type="text" value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
      <input type="number" value={state.age}
        onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })} />
      <button onClick={() => dispatch({ type: "SUBMIT" })}>Submit</button>
      {state.submitted && <p>Form Submitted!</p>}
    </div>
  );
}

export default Form;