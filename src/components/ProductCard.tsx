import { Badge, Box, Button, Image, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { IProduct } from "../@types/product";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image h={200} objectFit="cover" src={product.image} alt={product.title} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.category}
          </Badge>
        </Box>
        <Link to={`/products/${product.id}`}>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {product.title}L
          </Box>
        </Link>

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
              <Rating key={i} defaultIsChecked={i < product.rating.rate} isReadOnly />
            ))} */}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.rating.count} reviews
          </Box>
        </Box>

        <Stack direction="row" spacing={4} align="center" mt="3">
          <Button colorScheme="teal" variant="outline">
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
