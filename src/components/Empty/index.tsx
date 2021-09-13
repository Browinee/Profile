import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  object-fit: contain;
  width: 200px;
  height: 150px;
`;
const FigCaption = styled.figcaption`
  text-align: center;
`;
type EmptyProps = {
  content?: string;
};
const Empty = (props: EmptyProps) => {
  const { content = "No Repositories." } = props;
  return (
    <Container>
      <figure>
        <Image
          src=""
          alt="Empty"
        />
        <FigCaption>{content}</FigCaption>
      </figure>
    </Container>
  );
};

export default Empty;
