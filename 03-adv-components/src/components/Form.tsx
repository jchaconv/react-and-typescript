import { ComponentPropsWithoutRef, forwardRef, useImperativeHandle, useRef, type FormEvent } from "react"


type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandle = {
    clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {

    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('Clearing');
                form.current?.reset();
            }
        }
    });

    //agregué esto para practicar que no se recargue el form 
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //para usar esto los elementos deben tener la prop name
        //por eso se agregó por default en <Input />
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        form.current?.reset(); //resetea el formulario
    }


    return <form {...otherProps} onSubmit={handleSubmit} ref={form}>{children}</form>
});

export default Form;