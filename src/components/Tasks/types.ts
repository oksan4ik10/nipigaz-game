export interface IProps {
    selectAnswer: (data: boolean) => void;
    checkClick: boolean;
    active: number[];
}

export interface IPropsAnswer {
    answer: string;
    correct: boolean;
}

