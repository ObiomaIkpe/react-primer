import ListItem from './ListItem';

const List = ({data, setData}) => {
  return (
    <ul>
      {data.map(datum => (
        <ListItem key={datum.id} datum={datum} />
))}
    </ul>
  )
}

export default List
