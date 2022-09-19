import React from "react";
import IUserChoose from "../../interfaces/IUserChoose";
import ISelectValues from "../../interfaces/ISelectValues";
import FilterItem from "./Filter/FilterItem";
import IInputFields from "../../interfaces/IInputFields";
import InputItem from "./Input/InputItem";

interface FiltersProps {
    selectValues: ISelectValues[]
    userChoose: IUserChoose
    chooseHandler: (event: React.MouseEvent) => void
    inputFields: IInputFields[]
    changeHandler: (urlTag: keyof IUserChoose, newValue: string) => void
}

const Filters = ({selectValues, userChoose, chooseHandler, inputFields, changeHandler}: FiltersProps) => {

    const allBlocksWithValues = selectValues.map(({blockName, content, urlTag}) => {
            const contentArray = content.map(obj => Object.values(obj))
            const allProps = {blockName, content: contentArray, urlTag, userChoose}
            return <FilterItem key={blockName} {...allProps}/>
        }
    )

    const allInputs = inputFields.map(({blockName, urlTag}) =>
        <InputItem blockName={blockName} urlTag={urlTag} changeHandler={changeHandler} key={blockName} userChoose={userChoose}/>
    )

    return (
        <nav className='items-center gap-5 grid grid-cols-2 '>
            <ul className='h-[40px] w-full bg-black rounded-[15px] mb-5 mx-auto flex items-center px-3 justify-around relative'
                onClick={chooseHandler}>
                {allBlocksWithValues}
            </ul>
            <ul className='h-[40px] w-full bg-black rounded-[15px] mb-5 mx-auto flex items-center px-3 justify-around relative'>
                {allInputs}
            </ul>
        </nav>
    )
}
export default Filters