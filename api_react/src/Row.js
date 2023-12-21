import Cell from "./Cell";

const Row = ({datum}) => {
  return (
    <tr>
        {Object.entries(datum).map(([key, value]) => {
            return (
                <Cell key={key} cellData={JSON.stringify(value)} />
            )
        })}
    </tr>
  )
}

export default Row