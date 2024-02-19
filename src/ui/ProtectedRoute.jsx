import styled from "styled-components";
import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1).Load Authonticated user
  const { isLoading, isAuthenticated, fetchStatus } = useUser();

  //2).If there is no authenticated user. redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && isLoading && fetchStatus !== "fetching") {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, fetchStatus, navigate]
  );
  //3).While loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  //4).If there is a user ,render app
  if (!isAuthenticated) return children;
}

export default ProtectedRoute;
