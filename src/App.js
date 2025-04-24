import React, {componentDidUpdate} from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/logo.png"

// const root = ReactDOM.createRoot(document.getElementById('app'));

// // Рендерим элемент
// root.render(<div><h1>hello</h1><p>world!!!</p></div>);



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        helpText: "введите текст",
        userData: ""
    }
    this.inputClick = this.inputClick.bind(this);
  }

  componentDidUpdate(preProp){
    if(this.state.helpText !== "Help"){
        console.log("Some")
    }
  }

  render(){
    return (<div className="class">
      <Header title="Шапка сайта!"/> 
      <h1>Input</h1>
      <h2>{this.state.userData}</h2>
      <input placeholder={this.state.helpText} 
        onChange={event => this.setState({userData: event.target.value})}
        
        onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
      <p>{this.state.helpText === "введите текст"? "yes!": "no"}</p>
      <Image image={logo}/>
  </div>)
  }
  inputClick(){
    this.setState({helpText: "Changed"})
    console.log("click!")
  }
  mouseOver(){console.log("mouse over!")}
}

export default App
