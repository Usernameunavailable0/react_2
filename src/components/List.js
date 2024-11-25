import { useState } from "react"

function List(props) {
    const {count}=props;
    const [list, setList] = useState([]);
    // const [count,setCount] = useState(1)

    function addItem() {
        const number = 'Your '+count+' added successfully';
        setList((previousState) => {  return [...previousState,number]})
        // setCount((previousState) => { return previousState+1})
    }
    // function subItem() {
    //     const number = -count;
    //     setList((previousState) => {  return [...previousState,number]})
    //     setCount((previousState) => { return previousState-1})
    // }
        
    return <>
        {/* <div className="flex-col items-center justify-between px-48 bg-white" >
            <button onClick={addItem} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl">Add my Name</button>
            <h1 className="text-4xl font-bold mb-4">{count}</h1>
            <ul className="text-4xl font-bold mb-4">
                {
                    list.map((el,index)=> <li Key={index}>{el}</li>)
                }
            </ul>
        </div> */}
        addItem()
        <h1 className="text-4xl font-bold mb-4">{count}</h1>       
    </>
          
}

export default List;