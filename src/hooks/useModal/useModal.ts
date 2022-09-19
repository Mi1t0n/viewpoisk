import {useState} from "react";

const useModal = (): [boolean, () => void] => {

    const [isShowing, setIsShowing] = useState(false)
    const modalToggle = () => setIsShowing(!isShowing)

    return [isShowing, modalToggle]
}
export default useModal

