import { useEffect, useState } from 'react'

const Test = () => {
  const [sso, setSso] = useState('')
  const [visible, setVisible] = useState(false)

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
  //   )
  // }, [sso])

  useEffect(() => {
    handleVisible()
  }, [sso])

  useEffect(() => {
    handleVisible()
  }, [])

  return (
    <>
      {sso}
      <input onChange={handleSsoNameChange} />
      <button onClick={handleVisible}>보여요 토글 버튼</button>
      {visible && <div>보여요</div>}
    </>
  )
}

export default Test
