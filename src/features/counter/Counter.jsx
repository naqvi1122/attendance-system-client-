
import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { increment,decrement ,reset,incrementbyamount} from "./counterSlice"
import { useNavigate  } from 'react-router-dom';

const Counter=()=>{
const [amount,setamount] = useState(0)
console.log( 'aaaaaaaaaaa',amount)
const navigate = useNavigate();
const count=useSelector((state)=>state.counter.count)
const dispatch=useDispatch()


    function incrementby1(){
        dispatch(increment())
    }
function decremenetby1(){
    dispatch(decrement())
}
function resetdata(){
   
    dispatch(reset())
    setamount(0);
}

function addusernumber(){

    dispatch(incrementbyamount(amount))


}
const tokken =localStorage.getItem("tokken")
console.log('ssssssssssssss',tokken)
if(!tokken){
    navigate("/login")
    return null;
}
return(
    <>
    
    <section>

        <p>{count}</p>
        <div>
            <button onClick={incrementby1}>+</button>
            <button onClick={decremenetby1}>-</button>
            <button onClick={resetdata}>reset</button>
            <input type="number"   onChange={(e)=>setamount(e.target.value)}/>
            <button onClick={addusernumber}>add number </button>
        </div>
    </section>
    
    
    </>
)


}
export default Counter