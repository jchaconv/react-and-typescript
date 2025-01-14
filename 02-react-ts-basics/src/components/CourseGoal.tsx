
// Es una buena práctica ponerle el type a estos tipos:
import { type PropsWithChildren } from "react";

/*
interface CourseGoalProps {
    title: string;
    children: ReactNode;
}
*/

//Otra manera de definir props con children
type CourseGoalProps = PropsWithChildren<{
    id: number,
    title: string,
    onDelete: (id: number) => void
}>;

export default function CourseGoal({ id, title, onDelete, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}

//FC de React es para indicar que es un functional component y se puede escribir de esta manera:
/*
const CourseGoal:FC<CourseGoalProps> = ({title, children}) => {

    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    );

}
*/

/*
const CourseGoal = ({ title, children }: CourseGoalProps) => {

    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    );

}
*/    

//export default CourseGoal;