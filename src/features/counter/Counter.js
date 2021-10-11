import styles from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

export default function Counter(){
    const count = useSelector ((state) => state.counter.value)
    const fontColor=useSelector((state)=>state.theme.value)
    const dispatch=useDispatch()
    return (
    <>
        <div>
            <div className={styles.row}>
                <button className={styles.button} aria-label="Decrement value" onClick={()=>dispatch(decrement())}> - </button>
                    <span className={styles.value} style={{color: fontColor}}>{count}</span>
                <button className={styles.button} aria-label="Increment value" onClick={()=>dispatch(increment())}> + </button>
            </div>
            <div className={styles.row}>
                <input className={styles.textbox} aria-label="Set increment amount" id='get-value'/>
                <button className={styles.button} onClick={()=>dispatch(incrementByAmount(document.getElementById('get-value').value))}> Add Amount </button>
                {/* <button className={styles.asyncButton} > Add Async </button>
                <button className={styles.button}> Add If Odd</button> */}
            </div>
        </div>
    </>
)
}