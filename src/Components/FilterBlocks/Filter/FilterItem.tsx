import IUserChoose from "../../../interfaces/IUserChoose";

export interface FilterItemProps {
    blockName: string
    content: string[][]
    urlTag: keyof IUserChoose
    userChoose: IUserChoose
}

const FilterItem = ({blockName, content, urlTag, userChoose}: FilterItemProps) => {

    const filterListOfValues = content.map(([pathvalue, title]) =>
        (
            <li key={title} data-pathvalue={pathvalue} data-urltag={urlTag}
                className={`block ${userChoose[urlTag] === pathvalue + '' ? 'text-red-600' : 'text-white-500'}
                     hover:text-white cursor-pointer w-[200px] py-2`}>
                {title}
            </li>
        )
    )

    return (
        <li className="z-10 group  dropdown  px-3 text-white hover:text-gray-400  tracking-wide " >
            <p className='cursor-pointer'>{blockName}</p>
            <div className="group-hover:block dropdown-menu absolute hidden  left-0 ">
                <ul className=" bg-black shadow px-3 py-1 rounded-[5px] overflow-x-hidden grid grid-cols-4 max-h-[700px] gap-x-3 text-center border-white border">
                    {filterListOfValues}
                </ul>
            </div>
        </li>
    )
}
export default FilterItem