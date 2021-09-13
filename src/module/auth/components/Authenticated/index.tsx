import React from "react";
import styled from "styled-components";
// import ProjectList from "../../../projectLIst";
// import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
// import { Button, Dropdown, Menu } from "antd";
// import { useAuth } from "../../../../context/auth-context";
// import { Navigate, Route, Routes } from "react-router";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import ProjectScreen from "../../../projectScreen";
// import { resetRoutes } from "../../../../utils";

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
// const Header = styled(Row)`
//   padding: 3.2rem;
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
//   z-index: 1;
// `;
// const HeaderLeft = styled(Row)``;
// const HeaderRight = styled.div``;
const Main = styled.main`
  display: flex;
  overflow: hidden;
`;

const Authenticated = () => {
  return (
    <Container>
      {/*<PageHeader />*/}
      <Main>
        <Router>
          <Switch>
            <Route path={"/profile"}>div</Route>
            <Redirect to="/profile" />
          </Switch>
        </Router>
      </Main>
    </Container>
  );
};
// const PageHeader = () => {
//   const { logout, user } = useAuth();
//   return (
//     <Header between={true}>
//       <HeaderLeft gap={true}>
//         <Button type={"link"} onClick={resetRoutes}>
//           <SoftwareLogo width={"18rem"} color={"rgb(38.132, 255)"} />
//         </Button>
//         <h2>Item</h2>
//         <h2>User</h2>
//       </HeaderLeft>
//       <HeaderRight>
//         <Dropdown
//           overlay={
//             <Menu>
//               <Menu.Item key={"logout"}>
//                 <Button type={"link"} onClick={logout}>
//                   Logout
//                 </Button>
//               </Menu.Item>
//             </Menu>
//           }
//         >
//           <Button type={"link"} href="" onClick={(e) => e.preventDefault()}>
//             Hi, {user?.name}
//           </Button>
//         </Dropdown>
//       </HeaderRight>
//     </Header>
//   );
// };

export default Authenticated;
