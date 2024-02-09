import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { useProducts } from "../api/hooks";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data, isPending } = useProducts();
  return (
    <Box flex="1">
      <Filters />
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
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Center position="absolute" w="full" top={52}>
            <Loader />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default Products;
