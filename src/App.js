import { useEffect, useState, useRef } from "react";
import "./styles.css";

function SignUpForm({ isVisible, onSignUp }) {
  const emailInput = useRef();
  useEffect(() => {
    if (isVisible) {
      emailInput.current.focus();
    }
  }, [isVisible]);
  return (
    <form style={{ display: isVisible ? "block" : "none" }}>
      <label>
        Email
        <input ref={emailInput} />
      </label>
      <button onClick={onSignUp}>Sign up</button>
    </form>
  );
}

export default function App() {
  const [isSignUpFormVisible, setSignUpFormVisibility] = useState(false);
  const timeoutId = useRef();
  useEffect(() => {
    timeoutId.current = setTimeout(() => setSignUpFormVisibility(true), 3000);
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);
  return (
    <div className="App">
      <button onClick={() => setSignUpFormVisibility((prev) => !prev)}>
        Show sign up form
      </button>
      <SignUpForm
        isVisible={isSignUpFormVisible}
        onSignUp={(event) => {
          event.preventDefault();
          setSignUpFormVisibility(false);
          clearTimeout(timeoutId.current);
        }}
      />
    </div>
  );
}
