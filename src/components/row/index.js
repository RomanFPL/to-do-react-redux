import { ArchiveTableBtn, MainTableBtn } from "../tableBtn";

const Row = ({item}) => {    
    const {id, name, date, category, dates, content, status} = item;

    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{date}</td>
            <td>{category}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>
                {status ? <MainTableBtn id={id}/> : <ArchiveTableBtn id={id}/>}
            </td>
            </tr>
    )
}

export default Row
