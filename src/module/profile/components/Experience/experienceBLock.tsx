import {Work} from "../../../../types/user";
import {Card} from "antd";
import styled from "styled-components";
import Avatar from "../../../../components/Avatar";
import FeatureToggle from "../../../auth/auth";
import {PERMISSION_MAP} from "../../../auth/permissionList";
import EditIcon from "../../../../components/EditIcon";
import {useCallback} from "react";
import {RESUME_MAPS} from "../../constants";

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.8rem;
`;

const CompanyInfo = styled.div`
    display: flex;
    align-items: center;

    span {
        display: inline-block;
        margin-right: 0.5rem;
    }
`;
const DateInfo = styled.p`
    font-size: 1.5rem;
`;
const Title = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
`;
const Pre = styled.pre`
    font-size: 1.3rem;
    overflow: hidden;
    text-align: left;
    white-space: pre-line;
`;
const Main = styled.main``;
const EditorContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface ExperienceBLockProps {
    work: Work;
    clickHandler: (templateType: string, workId: string) => void;
}

const ExperienceBLock = (props: ExperienceBLockProps) => {
    const {work, clickHandler} = props;
    const {
        startDate = "",
        endDate = "",
        title = "",
        company = "",
        companyLogo = "",
        description = "",
        isCurrent = false,
        id,
    } = work;
    const editorHandler = useCallback(() => {
        clickHandler(RESUME_MAPS.experience, id);
    }, [clickHandler, id]);
    return (
        <Card style={{marginBottom: "1rem"}}>
            <FeatureToggle permissions={[PERMISSION_MAP.EXPERIENCE_EDIT]}>
                <EditorContainer>
                    <EditIcon size={16} openEditModal={editorHandler} />
                </EditorContainer>
            </FeatureToggle>
            <Header>
                <CompanyInfo>
                    <Avatar imageUrl={companyLogo} size={18} />
                    <span>{company}</span>
                </CompanyInfo>

                <DateInfo>
                    {startDate}~{isCurrent ? "PRESENT" : endDate}
                </DateInfo>
            </Header>
            <Title>Title: {title}</Title>
            <Main>
                <Pre>{description}</Pre>
            </Main>
        </Card>
    );
};

export default ExperienceBLock;
