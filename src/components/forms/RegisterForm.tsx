import { Link } from "react-router-dom";
import { InputContainer, InputField, InputLabel, Button} from "../../utils/styles";
import styles from './index.modules.scss'
import { useForm } from "react-hook-form";

export const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data:any) => {
            
        }


    return (
    <form className={styles.form} onSubmit={(handleSubmit(onSubmit))}>
        <InputContainer>
            <InputLabel htmlFor="email" >Email</InputLabel>
            <InputField type="email" id="email" {...register('email', {
                required: 'Email is required',
            })}/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
        <InputContainer className={styles.nameContainer}>
            <InputLabel htmlFor="firstName" >First Name</InputLabel>
            <InputField type="text" id="firstName" {...register('firstname', {
                required: 'First Name is required',
            })}/>
        </InputContainer>
        <InputContainer className={styles.nameContainer}>
            <InputLabel htmlFor="lastName" >Last Name</InputLabel>
            <InputField type="text" id="lastName" {...register('lastname', {
                required: 'Last Name is required',
            })}/>
        </InputContainer>
        <InputContainer className={styles.nameContainer}>
            <InputLabel htmlFor="password" >Password</InputLabel>
            <InputField type="password" id="password" {...register('password', {
                required: 'Password is required',
            })}/>
        </InputContainer>
        <Button className={styles.button}>Create my Account</Button>
        <div className={styles.footerText}>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
        </div>
        </section>
    </form>)
}