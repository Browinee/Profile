import React from "react";
import styled from "styled-components";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Profile from "../../../profile";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Authenticated = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path={"/profile"}>
            <Profile />
          </Route>
          <Redirect to="/profile" />
        </Switch>
      </Router>
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
