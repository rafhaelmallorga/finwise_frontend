import { FormBox, FormFrame, RegisterForm, LogoFrame, MainFrame } from "../../components/form-components";

const RegisterPage = () => {
    return (
        <MainFrame>
            <FormFrame>
                <FormBox>
                    <RegisterForm />
                </FormBox>
            </FormFrame>
            <LogoFrame />
        </MainFrame>
    )
}

export default RegisterPage;