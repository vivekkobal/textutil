
import React, { useState } from 'react';

export default function TextForm(props) {


    const handleclick = () => {
        console.log("uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success")



    }
    const handleloclick = () => {
        //console.log("uppercase was clicked: "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase", "success")


    }

    const handleclclick = () => {
        //console.log("uppercase was clicked: "+text);
        let newText = '';
        setText(newText);

        props.showAlert("cleared ","success")



    }
    // const handleBlclick = () => {
    //     //console.log("uppercase was clicked: "+text);
    //     var text = document.getElementById("MyBox")
    //     text.bold();
    //     let newText = text();

    //     setText(newText);




    // }
    const handlecopy = () => {
        //console.log("uppercase was clicked: "+text);
        var text = document.getElementById("MyBox")
        text.select();
        navigator.clipboard.writeText(text.value)

        props.showAlert(" Copied","success")



    }


    const handleOnchange = (event) => {
        console.log(" on change");
        setText(event.target.value)



    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="MyBox" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnchange} rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclick} >To uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleloclick} >To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclclick} >Clear</button>
                {/* <button className="btn btn-primary mx-2 my-2" onClick={handleBlclick} >Bold Text</button> */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy} >Copy</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2> Your text summary</h2>
                <p>{text.split(" ").length -1} words and {text.length} charachters</p>
                <p>{0.008 * text.split(" ").length}minutes to read text</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
            </div>
        </>
    )
}
