import React ,{Component}from 'react';


class AddItem extends Component{
    state = {
        name : '',
        age : ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target.namevalue ==='' || e.target.age.value ==='')
        //if(this.state.name ==='' || this.state.age ==='')
            alert("Enter the Item first")
        else {
            this.props.AddItem(this.state);
            console.log(this.state)
            e.currentTarget.reset()
        }
    }
    render(){
        return(
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your name"
                        id="name" onChange={this.handleChange} />
                    <input type="number" placeholder="Enter your age"
                        id="age" onChange={this.handleChange} />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}

export default AddItem;

/*
this.setState({
            name:'',
            age:''
        })
        value={this.state.name}
        value={this.state.age}
*/