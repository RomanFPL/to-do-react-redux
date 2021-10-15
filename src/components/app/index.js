import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from "../modal"
import SummaryTable from '../summaryTable';
import MainTable from '../mainTable';
import { useSelector } from "react-redux";
import { selectModalSatus } from "../../store/statusApp";

function App() {
  const modalStatus = useSelector(selectModalSatus);
  modalStatus && (document.body.style.overflow = "hidden");
  return (
    <>
      {modalStatus && <Modal/>}
      <section className="main container">
        <MainTable/>
        <SummaryTable/>
      </section>
    </>
  );
}

export default App;