import { food } from '../../../constant/array'

const test = food.map((item) => <div key={item.id}>{item.name}</div>)
const Yeon = ({ banana }) => {
  const filteredFood = food.filter((item) => item.id > 0)
  return (
    <>
      <div>--------------------</div>
      <div>{banana}</div>
      {test}

      {filteredFood.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <div>--------------------</div>
    </>
  )
}

export default Yeon
