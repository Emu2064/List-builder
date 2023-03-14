import { useState } from 'react';
import './index.css'




export default function List() {
    const[item, setItem] = useState([]);

    function addItem(event) {
        console.log(event.target.parentNode.childNodes[0].value);
        const singleItem = event.target.parentNode.childNodes[0].value;
        if(singleItem === ""){
            alert('Invalid input');
            return;
        }
        const items = [...item,singleItem];
        setItem(items);
    }


    function handleCheckOnchange(e) {
        console.log(e.target.parentNode.childNodes[0], e.target);
        const chk = e.target.parentNode.childNodes[0];
        
        const singleElement = e.target.parentNode.childNodes[1];
        const att1 = document.createAttribute('class');
        const att2 = document.createAttribute('class');
        att1.value = 'singleElementAdd';
        att2.value = 'singleElementRemove';
        chk.checked? singleElement.setAttributeNode(att1) : singleElement.setAttributeNode(att2);
        
    }


    function handleRemoveItem(e) {
        const targetElement = e.target.parentNode.parentNode;
        targetElement.remove();
        console.log(targetElement);
        
    }


    function createItem(it,index) {
        return <tr key={index}>
                    <td>{index+1}</td>
                    <td><input type="checkbox" name="" id="" onChange={(event)=>handleCheckOnchange(event)}/>
                    <span className="element">{it}</span>
                    <button onClick={(e)=>handleRemoveItem(e)}>-</button>
                </td>
            </tr>
    }

    return(
        <div className='main'>
            <div className="container">
                <input type="text" name="" id="" />
                <button onClick={(e)=>addItem(e)}>Add</button>
            </div>
            <div className='items'>
                <table>
                    <thead>
                            <td>SL</td>
                            <td>Item</td>
                    </thead>
                    <tbody>
                        {
                        item.map((it,index)=>createItem(it,index))
                        } 
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}