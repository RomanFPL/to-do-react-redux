import { useDispatch, useSelector } from "react-redux";
import { selectItemList } from "../../store/starterList";
import { changeStatusModal, changeStatusTable, selectTableSatus } from "../../store/statusApp";
import Row from "../row";


const MainTable = () => {
    const dispatch = useDispatch();

    const items = useSelector(selectItemList);
    const tableStatus = useSelector(selectTableSatus);


    const itemsSorted = (items, status) => {
        return items.reduce((acc, row)  => { 
            row.status === status && acc.push(row)
            return acc;           
        },[])
    }


    return (
        <div className="wrap-table mb-5">
            <div className="name-table m-2">
                <h2 className="text-center">
                    To do list
                </h2>
            </div>

            <table className="note-table table table-light table-hover">
                <thead>
                    <tr>
                    <th scope="col" className="responsive-row-width">Name</th>
                    <th scope="col" className="responsive-row-width">Created</th>
                    <th scope="col" className="responsive-row-width">Category</th>
                    <th scope="col">Content</th>
                    <th scope="col" className="responsive-row-width">Dates</th>
                    <th onClick={() => dispatch(changeStatusTable())} scope="col" className="toArchive onIcon fixed-row-width" onMouseDown={(e) => e.preventDefault()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="onIcon bi bi-box-seam" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                        </svg>      
                        To archive
                    </th>
                </tr>
                </thead>
                <tbody className="note-table-main">
                    {itemsSorted(items, tableStatus).map((item) => <Row key={item.id} item={item}/>)}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <button onClick={() => dispatch(changeStatusModal(true))} type="button" className="add-btn btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add a row</button>
            </div>
        </div>
    )
}

export default MainTable;
