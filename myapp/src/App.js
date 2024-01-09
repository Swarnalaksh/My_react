import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Myfirst from './component/Myfirst'
import Data from './component/Data'
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import ParentComponent from './component/ParentComponent';
import NameList from './component/NameList';
import UserGreeting from './component/UserGreeting';
import Clickcounter from './component/Clickcounter';
import Hovercount from './component/Hovercount';
import Hookcounter from './component/Hookcounter';
import HookcounterTwo from './component/HookcounterTwo';
import HookcounterThree from './component/HookcounterThree';
import HookcounterFour from './component/HookcounterFour';
import ClassCounter from './component/Classcounter';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IncorrectDependency from './component/IncorrectDependency';

class App extends Component{
render(){
 return (
    <div className="App">
      <Data />
      {/* <IncorrectDependency /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassCounter /> */}
      {/* <HookcounterFour /> */}
      {/* <HookcounterThree /> */}
      {/* <HookcounterTwo /> */}
      {/* <Hookcounter /> */}
      {/* <Hovercount /> */}
      {/* <Clickcounter /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <ParentComponent /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter />
      <Message /> 
      <Myfirst name="Swarna" color="Black" /> 
      <Myfirst name="Laxmi" color="Pink" />
      <Data name="Swarna" names="how are you?" />
      <Data name="Laxmi" names="I'm fine" />
      <Hello />  */}
    </div>
  );
}
}
export default App;
