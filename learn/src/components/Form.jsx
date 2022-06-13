import React, {Component} from "react";

import {Input} from "./Input";
import {Button} from "./Button";

export class Form extends Component {
    state={
        name:"Click",
        value:'',
        messages:[],
        visible:true
    }
    handleClick=()=>{
        this.setState({messages:[...this.state.messages, this.state.value]})
        this.setState({value:''})
    }
    handleChange = (ev)=>{
        this.setState({value:ev.target.value})
    }
    render() {
        return <>
            <button onClick={()=>this.setState({visible : !this.state.visible})}>{this.state.visible ?"скрыть" :"показать"} </button>
            {this.state.visible && <ul>
                {this.state.messages.map(message => <li>{message}</li>)}
            </ul>}
            <Input change={this.handleChange} value={this.state.value}/>
            <Button name={this.state.name} click={this.handleClick} />
        </>
    }

}


