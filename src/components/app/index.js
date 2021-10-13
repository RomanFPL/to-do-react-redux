import { useDispatch, useSelector } from 'react-redux';
import { addNewRow, selectItemList } from '../../store/starterList';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from "../modal"
import SummaryTable from '../summaryTable';
import MainTable from '../mainTable';

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
    <section className="main container">
      {/* <Modal/> */}
      <MainTable/>
      <SummaryTable/>
    </section>
  );
}

export default App;