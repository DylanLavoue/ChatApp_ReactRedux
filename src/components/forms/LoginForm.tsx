import { Link } from "react-router-dom";
import { InputContainer, InputField, InputLabel, Button} from "../../utils/styles";
import styles from './index.modules.scss'
import { useForm } from "react-hook-form";

export const LoginForm = () => {
    
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    
    const onSubmit = (data:any) => {
            
    }
        
    return (
    <form className={styles.form} onSubmit={onSubmit}>
        <InputContainer>
            <InputLabel htmlFor="email" >Email</InputLabel>
            <InputField type="email" id="email" {...register('email', {
                required: true,
            })}/>
        </InputContainer>
        <InputContainer className={styles.nameContainer}>
            <InputLabel htmlFor="lastName">Password</InputLabel>
            <InputField type="password" id="password" {...register('password', {
                required:true,
            })}/>
        </InputContainer>
        <Button className={styles.button}>Create my Account</Button>
        <div className={styles.footerText}>
            <span>Don't have an account?</span>
            <Link to="/login">Sign Up</Link>
        </div>
        
    </form>)
}