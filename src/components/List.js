import { useState } from "react"

function List() {
    const [list, setList] = useState([]);
    const [count,setCount] = useState(1)

    function addItem() {
        const number = +count;
        setList((previousState) => {  return [...previousState,number]})
        setCount((previousState) => { return previousState+1})
    }
    function subItem() {
        const number = -count;
        setList((previousState) => {  return [...previousState,number]})
        setCount((previousState) => { return previousState-1})
    }


    console.log('current state',list)

    return <>
        <div className="flex items-center justify-between px-48 bg-white" >
            <button onClick={addItem} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl">Add a Number</button>
            <button onClick={subItem} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl">Sub a Number</button>
            <h1 className="text-4xl font-bold mb-4">{count}</h1>
        </div>
    </>
          
}

export default List;