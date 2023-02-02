import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button className="action-btn" onClick={doStuff}>
          GENERATE
        </button>
        <div style={{marginLeft: '10px'}} />
        <button className="action-btn" onClick={() => window.location.reload(true)}>HOME</button>
      </div>
      
      <h3 className="result-text">{ result ? result : "" }</h3>
    </div>
  );
}