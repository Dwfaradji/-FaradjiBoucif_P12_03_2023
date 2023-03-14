import React, { useRef } from "react";

function InputWithFocusButton() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.focus())
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    );
}
export default InputWithFocusButton
