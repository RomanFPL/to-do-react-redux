import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewRow, editRowById } from "../../store/starterList";
import { changeStatusModal, selectCurentRow, setSelectedRow } from "../../store/statusApp";
import { findDateText, gatCurentDate, generateRandomKey} from "../../utits";

const Modal = () => {
    const curentRow = useSelector(selectCurentRow);

    const name = curentRow.name || "";
    const date = curentRow.date || gatCurentDate();
    const category = curentRow.category || "";
    const dates = curentRow.dates || "";
    const content = curentRow.content || "";

    const dispatch = useDispatch();
    const [inputName, setInputName] = useState(name);
    const [inputCategory, setInputCategory] = useState(category);
    const [inputDates, setInputDates] = useState(dates);
    const [inputContent, setInpuContent] = useState(content);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputName && inputCategory && inputContent){
            const rowData = {
                id: generateRandomKey(),
                name: inputName,
                date: date,
                category: inputCategory,
                content: inputContent,
                dates: inputDates,
                status: 1,
            }

            if(curentRow.id){
                rowData.id = curentRow.id
                dispatch(editRowById(rowData));
            } else {
                dispatch(addNewRow(rowData));            
            }

            handleCloseModal();
        } else {
            alert('The "Name","Category" and "Content" fields should contain some text!')
        }
    }

    const handleCloseModal = () => {
        dispatch(changeStatusModal(false))
        dispatch(setSelectedRow({}))
    }

    return (
        <div className="modal bg-grey" tabIndex="-1">
            <div className="modal-dialog modal-row-display">
                <div className="modal-content">
                <form onSubmit={handleSubmit} className="curent-row">
                    <div className="modal-header">
                        <h5 className="modal-title">Current row</h5>
                        <button onClick={() => handleCloseModal()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className="note-table table table-light table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="responsive-row-width">Name</th>
                                    <th scope="col" className="responsive-row-width">Created</th>
                                    <th scope="col" className="responsive-row-width">Category</th>
                                    <th scope="col">Content</th>
                                    <th scope="col" className="responsive-row-width">Dates</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input 
                                            value={inputName} 
                                            onChange={(e) => setInputName(e.target.value)} 
                                            type="text" 
                                            name="name" 
                                            className="form-row-value form-control" 
                                            placeholder="Name" 
                                            aria-label="Username" 
                                            aria-describedby="basic-addon1" 
                                            autoComplete="false"/>
                                    </td>
                                    <td>
                                        <input 
                                            type="date" 
                                            name="date" 
                                            value={date} 
                                            className="form-row-value form-control" 
                                            placeholder="Date" 
                                            aria-label="Username" 
                                            aria-describedby="basic-addon1" 
                                            disabled/>
                                    </td>
                                    <td>
                                        <select 
                                            value={inputCategory} 
                                            onChange={(e) => setInputCategory(e.target.value)} 
                                            className="form-row-value form-select" 
                                            name="category" 
                                            aria-label="Default select example">
                                            <option defaultValue>Open category</option>
                                            <option value="Task">Task</option>
                                            <option value="Random Thought">Random Thought</option>
                                            <option value="Idea">Idea</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input 
                                            value={inputContent} 
                                            onChange={(e) => {
                                                setInpuContent(e.target.value)
                                                setInputDates(findDateText(e.target.value))
                                            }}
                                            type="text" 
                                            name="content" 
                                            className="form-row-value form-control" 
                                            placeholder="Task explanation" 
                                            aria-label="Username" 
                                            aria-describedby="basic-addon1"/>
                                    </td>
                                    <td>
                                        <input 
                                            value={inputDates} 
                                            type="text" 
                                            name="dates" 
                                            className="form-row-value form-control" 
                                            placeholder="Mentioned dates" 
                                            aria-label="" 
                                            aria-describedby="basic-addon1" 
                                            disabled/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => handleCloseModal()} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-success">Save changes</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;