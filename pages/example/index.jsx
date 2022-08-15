import TestComponent from './_component/TestComponent'
import styles from './example.module.css'

const Example = () => {
  return (
    <>
      <div className={styles.contanier}>example</div>
      <TestComponent />
    </>
  )
}

export default Example
