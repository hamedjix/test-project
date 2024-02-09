import { Button } from "@chakra-ui/react";
import { unAuthorize } from "../api/axios";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const LogoutButton = (props: Props) => {
  const onLogout = () => {
    unAuthorize();
  };
  return (
    <Button onClick={onLogout} colorScheme="blue" size="md" variant="solid" {...props}>
      Logout
    </Button>
  );
};

export default LogoutButton;
