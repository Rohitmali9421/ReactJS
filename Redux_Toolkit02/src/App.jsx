
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./Features/Counter/CounterSlice"
function App() {
  const value = useSelector((state) => state.counter.value)
  const Dispatch = useDispatch()
  return (
    <>
      <div>{value}</div>
      <div onClick={() => { Dispatch(increment()) }}>Increment</div>
      <div onClick={() => { Dispatch(decrement()) }}>Decrement</div>
      <div onClick={() => { Dispatch(incrementByAmount(10)) }}>Increment by 10</div>
    </>
  )
}

export default App
