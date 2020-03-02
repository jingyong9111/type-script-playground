import React from "react";
import Counter from "./counter";
import MyForm from "./myForm";
import Sample from "./sample";
import CounterRedux from "./components/Counter";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Sample_redux from "./components/Sample";

function App() {
  const onClick = (name: string) => {};
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className="App">
      <h1>Hook</h1>
      <br />
      <Counter />
      <Sample />
      <br />
      <h1>리덕스</h1>
      <br />
      <CounterRedux />
      <br />
      <br />
      <TodoInsert />
      <TodoList />
      <br />
      <h1>redux-thunk</h1>
      <br />
      <br />
      <Sample_redux />
    </div>
  );
}

export default App;
