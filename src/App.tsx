import React from "react";
import Yong from "./yong";
import Counter from "./counter";
import MyForm from "./myForm";
import Sample from "./sample";
import CounterRedux from "./components/Counter";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const onClick = (name: string) => {};
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className="App">
      <Yong name="Hello" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />;
      <Sample />
      <br />
      <CounterRedux />
      <br />
      <br />
      <br />
      <br />
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
