import { FormBox, FormFrame, LoginForm, LogoFrame, MainFrame } from "../../components/form-components";

const LoginPage = () => {
    return (
        <MainFrame>
            <FormFrame>
                <FormBox>
                    <LoginForm />
                </FormBox>
            </FormFrame>
            <LogoFrame />
        </MainFrame>
    )
}

export default LoginPage;