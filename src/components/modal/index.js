const Modal = () => {
    return (
        <div class="modal bg-secondary" tabindex="-1">
            <div class="modal-dialog modal-row-display">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Current row</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="note-table table table-light table-hover">
                        <thead>
                            <tr>
                                <th scope="col" class="responsive-row-width">Name</th>
                                <th scope="col" class="responsive-row-width">Created</th>
                                <th scope="col" class="responsive-row-width">Category</th>
                                <th scope="col">Content</th>
                                <th scope="col" class="responsive-row-width">Dates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <input type="text" name="name" class="form-row-value form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" autocomplete="false"/>
                                </th>
                                <td>
                                    <input type="date" name="date" class="form-row-value form-control" placeholder="Date" aria-label="Username" aria-describedby="basic-addon1" disabled/>
                                </td>
                                <td>
                                    <select class="form-row-value form-select" name="category" aria-label="Default select example">
                                        <option selected>Open category</option>
                                        <option value="1">Task</option>
                                        <option value="2">Random Thought</option>
                                        <option value="3">Idea</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" name="content" class="form-row-value form-control" placeholder="Task explanation" aria-label="Username" aria-describedby="basic-addon1"/>
                                </td>
                                <td>
                                    <input type="text" name="dates" class="form-row-value form-control" placeholder="Mentioned dates" aria-label="" aria-describedby="basic-addon1" disabled/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;