import React, {useEffect, useState} from "react";
import IUserChoose from "../../../interfaces/IUserChoose";

interface InputItemProps {
    blockName: string
    urlTag: keyof IUserChoose
    changeHandler: (urlTag: keyof IUserChoose, newValue: string) => void
    userChoose: IUserChoose
}

const InputItem = ({blockName, urlTag, changeHandler, userChoose}: InputItemProps) => {

    const [value, setValue] = useState(userChoose[urlTag] || '');
    useEffect(() => changeHandler(urlTag, value), [value])

    return (
        <>
            <p className='text-red-500'>{blockName}</p>
            <input className='text-center w-[80px] outline-none' value={value} onChange={(event)=>setValue(event.target.value)}/>
        </>
    )
}
export default InputItem