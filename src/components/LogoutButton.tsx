import { Button } from "@chakra-ui/react";
import { unAuthorize } from "../api/axios";
import { useAuth } from "../contexts/auth";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const LogoutButton = (props: Props) => {
  const { setUserStatus } = useAuth();
  const onLogout = () => {
    setUserStatus(false);
    unAuthorize();
  };
  return (
    <Button onClick={onLogout} colorScheme="blue" size="md" variant="solid" {...props}>
      Logout
    </Button>
  );
};

export default LogoutButton;
