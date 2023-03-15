
import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { increment,decrement ,reset,incrementbyamount} from "./features/counter/counterSlice"
function Teststate(){

    const count=useSelector((state)=>state.counter.count)
    return(
        <>
        <p>{count}</p>
        </>
    )
}
export default Teststate;