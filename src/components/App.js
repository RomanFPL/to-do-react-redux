import { useDispatch, useSelector } from 'react-redux';
import { addNewRow, selectItemList } from '../store/starterList';
import './App.css';

function App() {
  const items = useSelector(selectItemList);
  const dispatch = useDispatch();
  const data = {
    id: "1caw9hq9i",
    name: "Pick raspberry",
    date: "2021-08-01",
    category: "Task",
    content: "Go to the garden, and pick it",
    dates: "",
    status: 1,
}
  console.log(items);
  return (
    <div className="App">
      <h1>Hi there</h1>
      <button onClick={() => {dispatch(addNewRow(data))}}>Add</button>
    </div>
  );
}

export default App;
