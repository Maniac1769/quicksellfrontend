import ThreeDotsIcon from './icons_FEtask/3 dot menu.svg';
import InfoSquareIcon from './icons_FEtask/SVG - Urgent Priority colour.svg';
import Low from './icons_FEtask/Img - Low Priority.svg';
import Medium from './icons_FEtask/Img - Medium Priority.svg';
import High from './icons_FEtask/Img - High Priority.svg';
import CircleDottedIcon from './icons_FEtask/Backlog.svg';
import RegCircleIcon from './icons_FEtask/To-do.svg';
import CheckCircleIcon from './icons_FEtask/Done.svg';
import CircleXmarkIcon from './icons_FEtask/Cancelled.svg';
import { RxHalf2 } from "react-icons/rx";
const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <img src={ThreeDotsIcon} alt="No Priority" /> },
    { title: "urgent", color: "orange", icon: <img src={InfoSquareIcon} alt="Urgent" /> },
    { title: "high", color: "black", icon: <img src={High} alt="High Priority" /> },
    { title: "medium", color: "gray", icon: <img src={Medium} alt="Medium Priority" /> },
    { title: "low", color: "lightgray", icon: <img src={Low} alt="Low Priority" /> }
];
export const status = [
    { title: "backlog", color: "black", icon: <img src={CircleDottedIcon} alt="Backlog" /> },
    { title: "todo", color: "lightgrey", icon: <img src={RegCircleIcon} alt="Todo" /> },
    { title: "in progress", color: "#EBCB62", icon: <RxHalf2 />},
    { title: "done", color: "#606ACB", icon: <img src={CheckCircleIcon} alt="Done" /> },
    { title: "cancelled", color: "gray", icon: <img src={CircleXmarkIcon} alt="Cancelled" /> },
];


export const statusIcons = {
    backlog: {
        color: "black",
        icon: <img src={CircleDottedIcon} alt="Backlog" />,
    },
    todo: {
        color: "lightgrey",
        icon: <img src={RegCircleIcon} alt="Todo" />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <RxHalf2 />,
    },
    done: {
        color: "#606ACB",
        icon: <img src={CheckCircleIcon} alt="Done" />,
    },
    cancelled: {
        color: "gray",
        icon: <img src={CircleXmarkIcon} alt="Cancelled" />,
    },
};

export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};
