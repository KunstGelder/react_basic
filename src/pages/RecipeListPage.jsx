import {
  Box, SimpleGrid, Image, Text, Input, Tag, Stack
} from '@chakra-ui/react';
import { useState } from 'react';

export const RecipeListPage = ({ recipes, onSelect }) => {
  const [search, setSearch] = useState('');

  const filtered = recipes.filter(({ recipe }) => {
    const nameMatch = recipe.label.toLowerCase().includes(search.toLowerCase());
    const labelMatch = recipe.healthLabels.some(label =>
      label.toLowerCase().includes(search.toLowerCase())
    );
    return nameMatch || labelMatch;
  });

  return (
    <Box p={6}>
      <Input
        placeholder="Search by recipe name or health label"
        mb={6}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filtered.map(({ recipe }) => (
          <Box
            key={recipe.label}
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            onClick={() => onSelect(recipe)}
            cursor="pointer"
            _hover={{ boxShadow: "lg" }}
          >
            <Image src={recipe.image} alt={recipe.label} />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">{recipe.label}</Text>
              <Text mt={2}><strong>Meal:</strong> {recipe.mealType?.join(', ')}</Text>
              <Text><strong>Dish:</strong> {recipe.dishType?.join(', ')}</Text>

              <Stack direction="row" wrap="wrap" mt={2}>
                {recipe.dietLabels.map(label => <Tag key={label}>{label}</Tag>)}
                {recipe.healthLabels.includes("Vegan") && <Tag colorScheme="green">Vegan</Tag>}
                {recipe.healthLabels.includes("Vegetarian") && <Tag colorScheme="purple">Vegetarian</Tag>}
              </Stack>

              {recipe.cautions.length > 0 && (
                <Text mt={2} color="red.500">⚠ {recipe.cautions.join(', ')}</Text>
              )}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
