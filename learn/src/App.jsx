import React, {Component} from "react";
import './App.css';
// import {Form} from "./components/Form";
import {FormClass} from "./components/formClass/FormClass"
import {Counter} from "./components/Counter";
import {Example} from "./components/Example";


// export class App extends Component  {
//   render(){
//     return <>
//     <Form/>
//
//     </>
//   }
//
// }
export const App=()=>{
  return <>
    <FormClass/>
    <br/>
    <Counter/>
    <Example/>
    </>
}