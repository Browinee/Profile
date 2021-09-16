import {PlusCircleOutlined} from "@ant-design/icons";
import styled from "styled-components";

interface AddIconProps {
    size?: number;
    openEditModal?: (type?: any) => void;
}

const Container = styled.span<{size: number}>`
    display: inline-block;
    margin-right: 0.5rem;
    font-size: ${props => props.size};
`;
const AddIcon = (props: AddIconProps) => {
    const {size = 22, openEditModal = () => {}} = props;
    const clickHandler = () => {
        openEditModal();
    };

    return (
        <Container size={size}>
            <PlusCircleOutlined onClick={clickHandler} />
        </Container>
    );
};

export default AddIcon;
