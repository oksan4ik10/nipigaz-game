import imgUrlArrow from "../../../assets/images/arrow-code.png";
interface IProps {
    value: number;
    click : (data: number) => void;
    className: string;
}
export const Answer= (props:IProps) => {
    const {value, click, className} = props;
    const clickArrowUp = ()=>{
        const newValue = value + 1;
        if (newValue > 9) return;
        click(newValue)
    }
    const clickArrowDown = ()=>{
        const newValue = value - 1;
        if(newValue < 0) return;
        click(newValue)
    }
    return <div className={className}>
            <img src={imgUrlArrow} alt="arrowUp" onClick={clickArrowUp}/>
            {value}
            <img src={imgUrlArrow} alt="arrowDown" onClick={clickArrowDown}/>
        </div>
}