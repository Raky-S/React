class App extends Component {
 
 
 
 
 
 
 
    constructor() {
      super();
      this.sayHello = this.sayHello.bind(this);
      this.state = {
      activeTab: "add",
      items: [],
      }
    };
  
    sayHello() {
      let hey = "Je suis une bakery en carton";
      alert(hey);
      return hey;
    }
  
    
  
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <h1>Bakery</h1>
          </div>
          
           
            <button className="btn btn-danger" onClick={() => {this.sayHello()}}> Clic Me</button>   
  
            <button className="btn btn-secondary" onClick={this.state.activeTab.Add}> Clic Me</button> 
          
          
          <Button onClick={this.sayHello} children="Add" isSelectid={this.state.activeTab}></Button>
          <Button children="List" isSelected onClick></Button>
          <Button children="Pay" isSelected onClick></Button>
        </div>
      );
    }
  }
  
  export default App;
  