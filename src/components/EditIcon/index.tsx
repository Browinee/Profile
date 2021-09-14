import { EditFilled } from "@ant-design/icons";

interface EditIconProps {
  size?: number;
  openEditModal: (type?: any) => void;
}

const EditIcon = (props: EditIconProps) => {
  const { size = 22, openEditModal } = props;
  const clickHandler = () => {
    openEditModal();
  };

  return (
    <EditFilled style={{ fontSize: `${size}px` }} onClick={clickHandler} />
  );
};

export default EditIcon;
