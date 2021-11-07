import './App.css';
import ListState from './context/list/ListState';
import Form from './components/form/Form';
import List from './components/list/List';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <ListState>
      <div className="App">
        <div className="form-list">
          <Form />
          <List />
        </div>
        <Nav />
      </div>
    </ListState>
  );
}

export default App;
