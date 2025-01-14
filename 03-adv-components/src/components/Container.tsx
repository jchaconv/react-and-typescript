import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react"


type ContainerProps<T extends ElementType> = { //se establece el valor genérico
    as?: T;
    children: ReactNode
} & ComponentPropsWithoutRef<T>; //se hace el merge y tendrá las props del genérico

export default function Container<C extends ElementType>({ as, children, props }: ContainerProps<C>) {

    const Component = as || 'div'; // para que por defecto tome div si no se recibe as

    return <Component className="container" {...props}>{children}</Component>

}