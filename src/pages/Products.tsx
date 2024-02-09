import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useProducts } from "../api/hooks";
import Filters from "../components/Filters";
import LogoutButton from "../components/LogoutButton";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data, isPending } = useProducts();
  return (
    <>
      <Box flex="1">
        <Flex justify="space-around" align="center">
          <Filters />
          <LogoutButton />
        </Flex>
        <Box position="relative">
          {!isPending && Array.isArray(data) ? (
            <Grid
              p={4}
              templateColumns={{
                base: "repeat(1, minmax(200px, 1fr))",
                md: "repeat(1, minmax(200px, 1fr))",
                lg: "repeat(3, minmax(200px, 1fr))",
              }}
              gap={6}
            >
              {data.map((product) => (
                <GridItem key={product.id} w="100%">
                  <ProductCard product={product} />
                  {/* <RepoCard repo={product} /> */}
                </GridItem>
              ))}
            </Grid>
          ) : (
            <Center position="absolute" w="full" top={52}>
              {/* <Loader /> */}
            </Center>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Products;
