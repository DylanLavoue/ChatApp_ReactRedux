import { RegisterForm } from "../components/forms/RegisterForm";
import { Page } from "../utils/styles";

export const RegisterPage = () => {
    return (
    <Page display='flex' justify-content="center"
    align-items="center"
    >
        <RegisterForm/>
    </Page>
    );
}