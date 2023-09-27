export interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
    active: number[];
}

export interface IPropsAnswer {
    correct: boolean;
    answer: string;
}

