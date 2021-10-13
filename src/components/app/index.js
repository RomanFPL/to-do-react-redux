import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from "../modal"
import SummaryTable from '../summaryTable';
import MainTable from '../mainTable';
import { useSelector } from "react-redux";
import { selectModalSatus } from "../../store/statusApp";

function App() {
  const modalStatus = useSelector(selectModalSatus);
  return (
    <section className="main container">
      {modalStatus && <Modal/>}
      <MainTable/>
      <SummaryTable/>
    </section>
  );
}

export default App;