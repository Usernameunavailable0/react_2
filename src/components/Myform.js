// import { useState } from "react";
// function Myform() {
//     const [e, setname] = useState("");
//     const [list, setList] = useState([]);
//     const [count,setCount] = useState("");

//     function additem(count) {
//         const number = 'Your ' + count + ' added successfully';
//         setList((previousState) => { return [...previousState, number] })
//         setCount((previousState) => { return previousState++})
//     }

//     function handlesubmit(e) {
//         e.preventDefault();
//         additem(e)
//     }
    
//     // 
//     return (
//         <>
//             <form className="flex-col items-center justify-between px-48" onSubmit={handlesubmit}>
//                 <label className="p-10">Enter your Name : <input type="text" onChange={(e) => { setname(e.target.value) }} /></label>
//                 <input className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl" type="submit" value="Add my name" />
//                 {/* <button className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl">Add my Name</button> */}
//             </form>
//             <ul className="text-4xl font-bold mb-4">
//                 {
//                     list.map((el, index) => <li Key={index}>{el}</li>)
//                 }
//             </ul></>);
// }

// export default Myform;

import { useState } from "react";

function Myform() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    function addItem(name) {
        const message = `Your ${name} added successfully`;
        setList((previousState) => [...previousState, message]);
        setCount((previousState) => previousState + 1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name) { // Ensure that the name is not empty
            addItem(name);
            setName(""); // Clear the input field after submission
        }
        console.log(namefunction Myform() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const addItem = (name) => {
        if (!name.trim()) return; // Check for empty strings
        const message = `Your ${name} added successfully`;
        setList((previousState) => [...previousState, message]);
        setCount((previousState) => previousState + 1);
        setName(""); // Clear the input field after submission
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(name);
    };

    return (
        <>
            <form className="flex-col items-center justify-between px-48" onSubmit={handleSubmit}>
                <label className="p-10">
                    Enter your Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </label>
                <input
                    className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl"
                    type="submit"
                    value="Add my name"
                    disabled={!name.trim()} // Disable the button if the input field is empty
                />
            </form>
            <ul className="text-4xl font-bold mb-4">
                {list.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
            <p className="text-lg font-bold mb-4">Total count: {count}</p>
        </>
    );
})
    }

    return (
        <>
            <form className="flex-col items-center justify-between px-48" onSubmit={handleSubmit}>
                <label className="p-10">
                    Enter your Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <input className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl" type="submit" value="Add my name" />
            </form>
            <ul className="text-4xl font-bold mb-4">
                {list.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
        </>
    );
}

export default Myform;