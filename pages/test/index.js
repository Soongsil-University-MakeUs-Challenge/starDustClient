import { useState } from 'react'
import Hong from './_components/Hong'
import Yeon from './_components/Yeon'

const Test = () => {
  const [visible, setVisible] = useState(false)
  const [sso, setSso] = useState('')

  const handleSsoNameChange = (text) => {
    setSso(text.target.value)
  }

  const handleVisible = () => {
    // setVisible(true)
    // setVisible(!visible)
    setVisible((prev) => {
      console.log(prev)
      return !prev
    })
  }

  // useEffect(() => {
  //   console.log(
  //     'ssssssssssssssssssssssssssssssssssoooooooooooooooooooooooooooo',
  //   )
  // }, [])

  // useEffect(() => {
  //   console.log(
  //     'ssssssssssssssssssssssssssssssssssoooooooooooooooooooooooooooo',
  //   )hi
  // }, [sso])

  // useEffect(() => {
  //   handleVisible()
  // }, [])

  // useEffect(() => {
  //   handleVisible()
  // }, [])

  return (
    <>
      <button onClick={handleVisible}>보여요 토글 버튼</button>
      <input onChange={handleSsoNameChange} />
      <Hong banana={sso} />
      <Yeon banana={sso} />
      {visible && <div>보여요</div>}
    </>
  )
}

export default Test
