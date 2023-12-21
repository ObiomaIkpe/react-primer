import Row from "./Row";
const Table = ({data}) => {
  return (
    <div className="table-container">
        <table>
            <tbody>
                {data.map(datum => (
                    <Row key={datum.id} datum={datum} />
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default Table