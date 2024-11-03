import React,{useState} from 'react'



export default function TextForm(formdata) {
  const [text, setText] = useState('');

  const handleTOUppercase=()=>{
    let newState = text.toUpperCase();
    setText(newState);
    formdata.showAlert("Your data change to UpperCase","success")
  }

  const handleTOLowerCase=()=>{
    let newState = text.toLowerCase();
    setText(newState);
    formdata.showAlert("Your data change to LowerCase","success")
  }

  const handleOnChanged=(event)=>{
    setText(event.target.value);
  };

  const handlecopy=()=>{
    navigator.clipboard.writeText(text);
    formdata.showAlert("Your data Copy Successfully use ctrl+v to check","success")
  }
 

  const handleExtraSpaces = ()=>{
     let newState = text.split(/[ ]+/);
     setText(newState.join(' '));
     formdata.showAlert("Extra data Removed Successfully","success")

  }

  const handleClear=()=>{
    setText('');
    formdata.showAlert("Text data Removed Successfully","success")
  }



  return (
    <>
    <div className='container' style={{color: formdata.mode === 'light' ? 'black' : 'white'}} >
        <h1>{formdata.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChanged} name="text" style={{backgroundColor: formdata.mode === 'light' ? 'white' : '#e4d9d9',color: formdata.mode === 'light' ? 'black' : '#000000'}} id="text" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTOUppercase}>Convert to upperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTOLowerCase}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    </div>

    <div className="container" style={{color: formdata.mode === 'light' ? 'black' : 'white'}}>

    <h1 className='my-3'>Your Text Summarty</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h2>
      Preview
    </h2>
    <p>{text.length>0?text:'Enter Something to preview'}</p>

    </div>
    </>
  )
}
