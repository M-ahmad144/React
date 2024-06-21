import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleOnChange = (e) => {
    // e is the event object It is automatically passed to the event handler by the browser when the event is triggered.
    // e.target refers to the element that triggered the event. In this case, it’s the textarea element.
    // e.target.value is the current value of the textarea
    setText(e.target.value);
  };

  const handleupperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handlClearButton = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text", "success");
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText(text);

    props.showAlert("Copy", "success");
  };
  return (
    <>
      <div className="conatiner">
        <form>
          <div className="form-group">
            <label htmlFor="myBox">
              <h1>{props.heading}</h1>
            </label>
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
        </form>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupperCase}>
          Covert to upper case
        </button>
        <button
          className="btn btn-secondary mx-2   my-1"
          onClick={handleLowerCase}
        >
          Covert to lower case
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2  my-1"
          onClick={handlClearButton}
        >
          Clear text
        </button>
        <button
          type="button"
          className="btn btn-dark   mx-2 my-1"
          onClick={handleCopyButton}
        >
          Copy to click board
        </button>
      </div>

      <div className="conatiner my-3">
        <div className="row">
          <h1>Your Text Summary</h1>
          <p>
            Your text has{" "}
            {text.split(/\s+/).filter((word) => word.length > 0).length} words
            and {text.length} characters.
          </p>

          <p>
            {0.008 * text.split("").filter((char) => char !== " ").length}{" "}
            Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
