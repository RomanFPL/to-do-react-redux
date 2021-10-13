import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewRow } from "../../store/starterList";
import { changeStatusModal } from "../../store/statusApp";

const gatCurentDate = () => {
    const date = new Date();
    const month = date.getMonth()+1;
    return `${date.getFullYear()}-${month<10 ? "0"+month : month}-${date.getDate()<10 ? "0"+date.getDate() : date.getDate()}`;
}

const Modal = () => {
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState("");
    const [inputDate, setInputDate] = useState(gatCurentDate());
    const [inputCategory, setInputCategory] = useState("");
    const [inputContent, setInpuContent] = useState("");
    const [inputDates, setInputDates] = useState("");

    
    
    const findDateText = (str) => {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/gm;
        const findedData = str.split(" ").reduce((acc, word) => {
            if(word.match(regex) !== null){
                acc.push(word.match(regex));
            }
            return acc;
            
        }, []).join(", ")
        return findedData;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputName || inputCategory || inputContent){
            const rowData = {
                id: (Math.random() + 1).toString(36).substring(4),
                name: inputName,
                date: inputDate,
                category: inputCategory,
                content: inputContent,
                dates: inputDates,
                status: 1,
            }
            
            dispatch(addNewRow(rowData));
            dispatch(changeStatusModal(false))

        } else {
            alert('The "Name","Category" and "Content" fields should contain some text!')
        }
    }

    return (
        <div className="modal bg-secondary" tabIndex="-1">
            <div className="modal-dialog modal-row-display">
                <div className="modal-content">
                <form onSubmit={handleSubmit} className="curent-row">
                    <div className="modal-header">
                        <h5 className="modal-title">Current row</h5>
                        <button onClick={() => dispatch(changeStatusModal(false))} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <th scope="row">
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
                                    </th>
                                    <td>
                                        <input 
                                            type="date" 
                                            name="date" 
                                            value={inputDate} 
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
                        <button onClick={() => dispatch(changeStatusModal(false))} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-success">Save changes</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;