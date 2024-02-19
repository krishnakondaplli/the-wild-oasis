import UpdateSettingsForm from "../features/settings/UpdateSettingForm.jsx";
import Row from "../ui/Row.jsx";
import Heading from "./Heading.jsx";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
