import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from "../modal"
import SummaryTable from '../summaryTable';
import MainTable from '../mainTable';

function App() {
  return (
    <section className="main container">
      {/* <Modal/> */}
      <MainTable/>
      <SummaryTable/>
    </section>
  );
}

export default App;