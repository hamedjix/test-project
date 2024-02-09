import { Badge, Box, Button, Image, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { IProduct } from "../@types/product";
import Rating from "./Rating";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="hover:scale-105 transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        <Image height={200} objectFit="cover" objectPosition="center" src={product.image} alt={product.title} />
      </Link>

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
          <Box as="span" color="gray.300" fontSize="sm">
            / unit
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Rating value={product.rating.rate} />
          <Box as="span" ml="2" color="gray.300" fontSize="sm">
            {product.rating.count} reviews R
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
