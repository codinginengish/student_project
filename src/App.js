import logo from "./logo.svg";
import "./App.css";
import { Title } from "./Typography"
import { Cell, Menu, Header } from "./Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Anna's (Not Rob's) Pizza Shop</Title>
        <Menu>
          <Header>Entrée</Header>
          <Header>Price</Header>
          <Header>Tax</Header>
          <Header>Total</Header>
          <Cell>Pizza Slice</Cell>
          <Cell>$3.29</Cell>
          <Cell>5%</Cell>
        </Menu>
      </header>
    </div>
  );
}

export default App;
