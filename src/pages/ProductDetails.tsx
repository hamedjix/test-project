import { Badge, Box, Button, Image, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProduct } from "../api/hooks";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useProduct(+id!);
  return (
    <>
      {!product ? (
        <div></div>
      ) : (
        <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.title} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {product.category}
              </Badge>
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {product.title}
            </Box>

            <Box>
              ${product.price}
              <Box as="span" color="gray.600" fontSize="sm">
                / unit
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {/* {Array(5)
            .fill("")
            .map((_, i) => (
              <Rating key={i}  />
            ))} */}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.rating.count} reviews
              </Box>
            </Box>

            <Box mt="2">{product.description}</Box>

            <Stack direction="row" spacing={4} align="center" mt="3">
              <Button colorScheme="teal" variant="outline">
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductDetails;
