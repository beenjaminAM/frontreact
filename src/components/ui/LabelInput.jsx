import { useState } from 'react'


const LabelInput = ({ label, htmlFor, placeholder, state,  setState, required}) => {
    const [test, setTest] = useState()
    return (
        <>
            <label htmlFor={htmlFor? htmlFor: ""}>{label}:</label>
            {required? 
            (<input
                type="text"
                id={htmlFor? htmlFor: ""}
                placeholder={placeholder? placeholder: ""}
                required
                value={state? state: test? test: ""}
                onChange={setState? (e) => setState(e.target.value): (e) => setTest(e.target.value)}
            />): (<input
                type="text"
                id={htmlFor? htmlFor: ""}
                placeholder={placeholder? placeholder: ""}
                value={state? state: test? test: ""}
                onChange={setState? (e) => setState(e.target.value): (e) => setTest(e.target.value)}
            />)
            }
        </>
    );
}

export default LabelInput