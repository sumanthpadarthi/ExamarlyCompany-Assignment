import './App.css';

function App() {
  return (
    <div className="bgContainer">
      <button className="historyButton">History</button>
      <div className="linescontainer">
      <hr className="lineone" /> 
      <hr className="lineone2" /> 
      <hr className="lineone2" />
      </div>
      <div className="vlinescontainer">
      <hr className="vline"/>
      </div>
      <div className="barContainer">
        <div className="imagecontainer">
        <img className="crossimage" src="/images/Icon ionic-ios-close.svg" alt="cross"/>
        </div>
        <h1 className="heading">Strength Bar</h1>
        <p className="description">Introducing strength bar to <br/>
           help you know your week <br/>
           subjects.
          </p>
        <img src="/images/Group 7681.svg" alt="group"/>
        <div className="buttoncontainer">
          <button className="finishbutton">Finish</button>
        </div>
        
        






      </div>





     
    </div>
    
  );
}

export default App;
