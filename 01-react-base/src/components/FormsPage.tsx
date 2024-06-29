import { useForm } from 'react-hook-form'

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPages = () => {

    // TODO fx register -> permite no tener q poner en el input value={123} onChange={ e => setState(e.target.value)}
    // TODO fx handleSubmit -> permite reemplazar el tener q capturar el evento y pasarlo en el form como { (e) => onSubmit }
    // TODO fx formState --> muestra el esstado del formulario
    // TODO fx watch ---> muestra cuando el campo cambia
    const { register, handleSubmit, formState, watch,  } = useForm<FormInputs>({
        defaultValues: {
            email: 'asd@asd.com',
            password: '123',
        }
    });

const onSubmit = ( myForm: FormInputs) => {
    console.log ({ myForm})
}

console.log(watch('email' ));
    return (
        <>
            <form onSubmit={handleSubmit( onSubmit ) } >
                <h3>Forms</h3>

                <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <input type="text" placeholder="Email" { ...register('email', { required: true }) }  />
                    <input type="password" placeholder="Password" {...register('password') }  />

                    <button type="submit">Submit</button>

                </div>
            </form>


            <pre>
                { JSON.stringify(formState, null, 2) }
            </pre>
        </>

    )
}