import React,{useState} from 'react'

export default function TextForm(props) {
    let clickHandler = ()=>{
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert('Text is successfully uppercase', "success")
    }
    let clickLoHandler = ()=>{
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert('Text is successfully lowercase', "success")
    }
    let clickClHandler = ()=>{
      let newText = "";
      settext(newText)
      props.showAlert('Text cleared', "success")
    }
    let clickCopHandler = ()=>{
      let texts = document.getElementById('myBox');
      texts.select();
      navigator.clipboard.writeText(texts.value);
      props.showAlert('Text copied', "success")
    }
      // let b = 'ibra'
      // let c = b.slice(1);
      // console.log(c);
      // console.log(b.charAt(0).toUpperCase().concat(c))
    let changeHandler = (event)=>{
        settext(event.target.value);
    }
    
    const [text, settext] = useState('');
    // if (text === " ") {
    //   console.log(0);
    // }
    // else{
    //   console.log();
    // }
  return (
      <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <textarea name="" className="form-control my-3" cols="30" rows="10" value={text} onChange={changeHandler} id="myBox" style={{backgroundColor : props.mode === 'light'?'white':'black' ,color : props.mode === 'light'?'black':'white' }}></textarea>
        <button className="btn btn-primary mx-1" onClick={clickHandler}>Upper case</button>
        <button className="btn btn-primary mx-1" onClick={clickLoHandler}>Lower case</button>
        {/* <button className="btn btn-primary mx-1" onClick={clickCapHandler}>Capatalize</button> */}
        <button className="btn btn-primary mx-1" onClick={clickClHandler}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={clickCopHandler}>Copy</button>
    </div>
    <div className="container">
    <h3>Summary</h3>
    <p>Words {text === '' ? 0 : text.trim().split(" ").length}, characters {text.length}</p>
    <h3>Can be read in :</h3>
    <p>{(0.008 * text.split(" ").length).toFixed(2)} minutes</p>
    <h3>Preview</h3>
    <p>{text}</p>
      
    </div>
    </>
  )
}
