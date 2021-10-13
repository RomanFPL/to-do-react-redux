import { useSelector } from "react-redux"
import { selectItemList } from "../../store/starterList"
import { convertToSummaryData } from "../../utits"
import RowSummary from "../rowSummary"

const SummaryTable = () => {
    const notes = useSelector(selectItemList);
    const sumItems = convertToSummaryData(notes);
    return (
        <div className="wrap-table">
            <div className="name-table">
                <h2 className="text-center">
                    Summary
                </h2>
                <table className="summary-table table table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Note category</th>
                            <th scope="col">Active</th>
                            <th scope="col">Archived</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sumItems.map(item => (<RowSummary key={item.key} item={item}/>))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SummaryTable
