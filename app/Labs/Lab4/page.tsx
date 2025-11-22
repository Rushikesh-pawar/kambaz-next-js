'use client';
import ArrayStateVariable from "./ArrayStateVariable";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import store from "./store"
import { Provider } from "react-redux";


export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return(
    <Provider store={store}>
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent/>
    <PassingDataOnEvent/>
    <PassingFunctions theFunction={sayHello} />
    <Counter/>
    <StringStateVariables/>
    <DateStateVariable/>
    <ObjectStateVariable/>
    <ArrayStateVariable/>
    <ParentStateComponent/>
    <ReduxExamples/>
    </div>
</Provider>
  );
}