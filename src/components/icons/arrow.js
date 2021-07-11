import { useDarkMode } from "../../utils/hooks";

const Arrow = () => {

    const { isDarkMode } = useDarkMode();

    return (
        <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H10.5M10.5 6L5.5 1M10.5 6L5.5 11" stroke={isDarkMode ? 'white' : 'black'} strokeWidth="1.2"/>
        </svg>
    )
};

export default Arrow;