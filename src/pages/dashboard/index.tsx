import { useState } from "react";
import { ContentFrame, Header, MainFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, SavingsSection, OverlayTransactions } from "../../components/dashboard-components";

const DashboardPage = () => {
    const [overlay, setOverlay] = useState(false);

    return (
        <MainFrame>
            { overlay ? <OverlayTransactions overlay={overlay} setOverlay={setOverlay}/> : <></>}
            <Header/>
            <ContentFrame>
                <MenuBar overlay={overlay} setOverlay={setOverlay}/>
                <MainSection>
                    <LeftColum>
                        <BalanceSection/>
                        <AccountsSection/>
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