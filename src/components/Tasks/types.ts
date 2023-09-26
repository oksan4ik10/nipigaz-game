export interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
    active: number[];
}

export interface IPropsAnswer {
    answer: number;
    correct: boolean;
}

