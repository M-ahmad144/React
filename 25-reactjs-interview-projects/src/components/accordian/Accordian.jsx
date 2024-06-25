import React, { useState } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AccordianStyle.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (selectedId) => {
    setSelected(selected === selectedId ? null : selectedId);
  };

  const handleMultipleSelection = (selectedId) => {
    if (multiple.includes(selectedId)) {
      setMultiple(multiple.filter((id) => id !== selectedId));
    } else {
      setMultiple([...multiple, selectedId]);
    }
  };

  return (
    <center className="wrapper">
      {/* Button for selecting multiple selections */}
      <button
        style={{ backgroundColor: enableMultiSelection ? "red" : "grey" }}
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable multiple selection
      </button>

      <div className="container accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>

                <span
                  style={{
                    transform:
                      selected === dataItem.id ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </div>

              <div>
                {(selected === dataItem.id ||
                  (enableMultiSelection && multiple.includes(dataItem.id))) && (
                  <p>{dataItem.answer}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </center>
  );
}
