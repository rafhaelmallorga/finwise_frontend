import { useState } from "react";
import { ContentFrame, Header, MainFrame, MenuBar, MainSection, LeftColum, RightColum, HistorySection, BalanceSection, AccountsSection, SavingsSection, OverlayTransactions, OverlayEdit, OverlayCreate } from "../../components/dashboard-components";

const DashboardPage = () => {
    const [overlay, setOverlay] = useState(false);
    const [edit, setEdit] = useState(false);
    const [createModal, setCreateModal] = useState(false)

    return (
        <MainFrame>
            { overlay ? <OverlayTransactions overlay={overlay} setOverlay={setOverlay}/> : <></>}
            { edit ? <OverlayEdit edit={edit} setEdit={setEdit} /> : <></>}
            { createModal ? <OverlayCreate createModal={createModal} setCreateModal={setCreateModal} /> : <></>}
            <Header/>
            <ContentFrame>
                <MenuBar overlay={overlay} setOverlay={setOverlay}/>
                <MainSection>
                    <LeftColum>
                        <BalanceSection/>
                        <AccountsSection edit={edit} setEdit={setEdit} createModal={createModal} setCreateModal={setCreateModal}/>
                        <SavingsSection edit={edit} setEdit={setEdit} createModal={createModal} setCreateModal={setCreateModal}/>
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