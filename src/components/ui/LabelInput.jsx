import { useState } from 'react'


const LabelInput = ({ label, htmlFor, placeholder, state,  setState}) => {
    const [test, setTest] = useState()
    return (
        <>
            <label htmlFor={htmlFor? htmlFor: ""}>{label}:</label>
            <input
                type="text"
                id={htmlFor? htmlFor: ""}
                placeholder={placeholder? placeholder: ""}
                value={state? state: test? test: ""}
                onChange={setState? (e) => setState(e.target.value): (e) => setTest(e.target.value)}
            />
        </>
    );
}

export default LabelInput