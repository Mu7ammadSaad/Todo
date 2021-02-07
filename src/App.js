import React,{Component} from 'react'
import './App.css';
import AddItem from './Components/AddItem';
import TodoItems from './Components/TodoItem';

class App extends Component{
  state ={
    items :[
      {id:1, name: 'Ahmed', age:20},
      {id:2, name: 'Mohamed', age:21},
      {id:3, name: 'Mahmoud', age:22}
    ] 
  }

  deleteItem = (id) =>{
    /*
    //1st way
    let locItems = this.state.items;
    let i = locItems.findIndex(itemX => itemX.id === id)
    locItems.splice(i,1)
    */
    //2nd way 
    let locItems = this.state.items.filter( itemX => {return itemX.id !== id})
    this.setState({items:locItems}) //this.setState({items}) if locItems var is  items 
  }

  AddItem =(item) => {
    //item.id = Math.random();
    let items = this.state.items;
    let lastElement = items.length? items[items.length - 1]: 0;
    item.id = lastElement.id + 1;
    items.push(item)
    this.setState({items})

  }
  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items = {this.state.items}  delItem ={this.deleteItem}/>
        <AddItem AddItem={this.AddItem}/>
      </div>
    );
  }
}

export default App;
