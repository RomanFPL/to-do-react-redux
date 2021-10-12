import { useSelector } from 'react-redux';
import { selectItemList } from '../store/starterList';
import './App.css';

function App() {
  const items = useSelector(selectItemList);
  console.log(items);
  return (
    <div className="App">
      <h1>Hi there</h1>
    </div>
  );
}

export default App;
