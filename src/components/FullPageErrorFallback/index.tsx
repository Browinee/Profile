import styled from "@emotion/styled";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  color: red;
  font-size: 1.5rem;
`;
const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Content>{error?.message}</Content>;
  }
  return null;
};

const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
);

export default FullPageErrorFallback;
