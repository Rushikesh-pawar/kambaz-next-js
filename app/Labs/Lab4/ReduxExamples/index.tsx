import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
console.log("TodoList import:", typeof TodoList, TodoList);
export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
        <CounterRedux/>
        <AddRedux/>
        <TodoList/>
    </div>
  );
};