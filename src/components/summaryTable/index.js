const SummaryTable = () => {
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

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SummaryTable
