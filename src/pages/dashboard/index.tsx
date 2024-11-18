import { useState } from "react";
import { ContentFrame, Header, MainFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, SavingsSection, OverlayTransactions, OverlayEdit } from "../../components/dashboard-components";

const DashboardPage = () => {
    const [overlay, setOverlay] = useState(false);
    const [edit, setEdit] = useState(false);

    return (
        <MainFrame>
            { overlay ? <OverlayTransactions overlay={overlay} setOverlay={setOverlay}/> : <></>}
            { edit ? <OverlayEdit edit={edit} setEdit={setEdit} /> : <></>}
            <Header/>
            <ContentFrame>
                <MenuBar overlay={overlay} setOverlay={setOverlay}/>
                <MainSection>
                    <LeftColum>
                        <BalanceSection/>
                        <AccountsSection edit={edit} setEdit={setEdit}/>
                        <SavingsSection edit={edit} setEdit={setEdit}/>
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