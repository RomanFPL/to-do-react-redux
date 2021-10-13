const Modal = () => {
    return (
        <div className="modal bg-secondary" tabindex="-1">
            <div className="modal-dialog modal-row-display">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Current row</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <input type="text" name="name" className="form-row-value form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" autocomplete="false"/>
                                </th>
                                <td>
                                    <input type="date" name="date" className="form-row-value form-control" placeholder="Date" aria-label="Username" aria-describedby="basic-addon1" disabled/>
                                </td>
                                <td>
                                    <select className="form-row-value form-select" name="category" aria-label="Default select example">
                                        <option selected>Open category</option>
                                        <option value="1">Task</option>
                                        <option value="2">Random Thought</option>
                                        <option value="3">Idea</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" name="content" className="form-row-value form-control" placeholder="Task explanation" aria-label="Username" aria-describedby="basic-addon1"/>
                                </td>
                                <td>
                                    <input type="text" name="dates" className="form-row-value form-control" placeholder="Mentioned dates" aria-label="" aria-describedby="basic-addon1" disabled/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;