import { Badge, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProduct } from "../api/hooks";
import Rating from "../components/Rating";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useProduct(+id!);
  return (
    <>
      {!product ? (
        <div></div>
      ) : (
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="1" p="5">
            <Image src={product.image} alt={product.title} />
          </Box>

          <Box flex="1" p="5">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {product.category}
            </Badge>

            <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {product.title}
            </Text>

            <Text>
              ${product.price}
              <Box as="span" color="gray.600" fontSize="sm">
                / unit
              </Box>
            </Text>

            <Box display="flex" mt="2" alignItems="center">
              <Rating value={product.rating.rate} />
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.rating.count} reviews
              </Box>
            </Box>

            <Text mt="2">{product.description}</Text>

            <Stack direction="row" spacing={4} align="center" mt="3">
              <Button colorScheme="teal" variant="outline">
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ProductDetails;
