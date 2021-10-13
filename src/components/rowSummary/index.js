const RowSummary = ({item}) => {
    const {name, act, arc} = item;
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{act}</td>
            <td>{arc}</td>
        </tr>
    )
}

export default RowSummary
