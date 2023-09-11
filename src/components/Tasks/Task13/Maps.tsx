interface IProps {
    value: number;
    color: string;
}
export const Maps = (props: IProps) =>{
    const {value, color} = props;
    switch (value) {
        case 0:
            return <>
                <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="5" r="5" fill={color}/>
                    <path d="M16 5.5L1 29" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </>
            
        case 1: 
            return     <>
            <svg width="18" height="68" viewBox="0 0 18 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill={color}/>
                <path d="M5 5.5L16.5 67" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
        case 2:
            return <>
                <svg width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="5" r="5" fill={color}/>
                    <path d="M16 5.5L1 40.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </>
        case 3: return <>
        <svg width="11" height="36" viewBox="0 0 11 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="5" r="5" fill={color}/>
            <path d="M6 5.5L1 34.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        </>
    }

}