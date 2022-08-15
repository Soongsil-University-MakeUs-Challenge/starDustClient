const Hong = ({ banana }) => {
  localStorage.setItem('hong', 'honga')
  const hong = localStorage.getItem('hong')
  console.log(hong)
  return (
    <>
      <div>--------------------</div>
      <div>{banana}</div>
      <div>--------------------</div>
    </>
  )
}

export default Hong
