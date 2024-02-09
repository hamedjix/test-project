import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Tag, Text } from "@chakra-ui/react";
import { useAuthentications } from "../api/hooks";

const Login = () => {
  const { mutate } = useAuthentications();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      username: HTMLInputElement;
      password: HTMLInputElement;
    };
    mutate({ username: formElements.username.value, password: formElements.password.value });
  };
  return (
    <Flex className="h-screen justify-center bg-blue-400-normal" width="full" align="center" justify="center" flex="1" direction="column">
      <Box p={8} mb={20} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={onFormSubmit}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="username" type="text" placeholder="Enter Your Name" defaultValue="mor_2314" />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" placeholder="*******" defaultValue="83r5^_" />
            </FormControl>
            <Button type="submit" colorScheme="teal" variant="outline" width="full" mt={4}>
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
      <Tag position="absolute" bottom={5} colorScheme="blue">
        <Text>Note : I filled form with a username and password that works! but you can change it based on api docs if you want</Text>
      </Tag>
    </Flex>
  );
};

export default Login;
