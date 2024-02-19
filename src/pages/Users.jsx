import SignupForm from "../features/authentication/SignupForm.jsx";
import Heading from "./Heading.jsx";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
