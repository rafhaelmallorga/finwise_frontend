import { ContentFrame, Header, MainFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, CreditCardsSection, SavingsSection } from "../../components/dashboard-components";

const DashboardPage = () => {
    return (
        <MainFrame>
            <Header/>
            <ContentFrame>
                <MenuBar/>
                <MainSection>
                    <LeftColum>
                        <BalanceSection/>
                        <AccountsSection/>
                        <CreditCardsSection/>
                        <SavingsSection/>
                    </LeftColum>
                    <RightColum>
                        <HistorySection/>
                    </RightColum>
                </MainSection>
            </ContentFrame>
        </MainFrame>
    )
}

export default DashboardPage;