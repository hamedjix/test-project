import { Flex, FormControl, FormLabel, HStack, Select, useColorModeValue } from "@chakra-ui/react";
import { useFilterParams } from "../contexts/filter";
const Filters = () => {
  const { updateFilters } = useFilterParams();
  const onFilterChange = (value: string, type: "sort" | "limit") => {
    switch (type) {
      case "sort":
        updateFilters({ sort: value as "asc" | "desc" });
        break;
      case "limit":
        updateFilters({ limit: parseInt(value) });
        break;

      default:
        updateFilters({
          limit: parseInt(value),
          sort: "asc",
        });
        break;
    }
  };
  const bg = useColorModeValue("#EEF1FF", "#1A202C");
  return (
    <Flex p={4} justify="space-between" overflowX="auto" bg={bg}>
      <HStack spacing={5}>
        <FormControl display="flex" alignItems="center">
          <FormLabel fontSize={16} my={0}>
            limit:
          </FormLabel>
          <Select size="sm" w={170} minW={120} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onFilterChange(e.target.value, "limit")}>
            <option value="5" defaultChecked>
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </Select>
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel fontSize={16} my={0}>
            Sort:
          </FormLabel>
          <Select size="sm" w={170} minW={120} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onFilterChange(e.target.value, "sort")}>
            <option value="asc" defaultChecked>
              Ascending
            </option>
            <option value="desc">Descending</option>
          </Select>
        </FormControl>
      </HStack>
    </Flex>
  );
};

export default Filters;
