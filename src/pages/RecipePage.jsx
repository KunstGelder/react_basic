import { Box, Image, Text, Button, Stack, Tag, UnorderedList, ListItem } from '@chakra-ui/react';

export const RecipePage = ({ recipe, goBack }) => {
  const nutrients = recipe.totalNutrients;

  return (
    <Box p={6}>
      <Button onClick={goBack} mb={4}>← Back to Recipes</Button>

      <Image src={recipe.image} alt={recipe.label} borderRadius="xl" />

      <Text fontSize="2xl" fontWeight="bold" mt={4}>{recipe.label}</Text>

      <Text mt={2}><strong>Meal type:</strong> {recipe.mealType?.join(', ')}</Text>
      <Text><strong>Dish type:</strong> {recipe.dishType?.join(', ')}</Text>
      <Text><strong>Total time:</strong> {recipe.totalTime} min</Text>
      <Text><strong>Servings:</strong> {recipe.yield}</Text>

      <Stack direction="row" wrap="wrap" spacing={2} mt={3}>
        {recipe.dietLabels.map(label => (
          <Tag key={label}>{label}</Tag>
        ))}
        {recipe.healthLabels.map(label => (
          <Tag key={label} colorScheme="green">{label}</Tag>
        ))}
      </Stack>

      {recipe.cautions.length > 0 && (
        <Text mt={2} color="red.500"><strong>Cautions:</strong> {recipe.cautions.join(', ')}</Text>
      )}

      <Box mt={6}>
        <Text fontWeight="bold">🧂 Ingredients:</Text>
        <UnorderedList>
          {recipe.ingredientLines.map((line, idx) => (
            <ListItem key={idx}>{line}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box mt={6}>
        <Text fontWeight="bold">📊 Nutritional Info:</Text>
        <UnorderedList>
          <ListItem>Energy: {nutrients.ENERC_KCAL?.quantity.toFixed(0)} kcal</ListItem>
          <ListItem>Protein: {nutrients.PROCNT?.quantity.toFixed(1)} g</ListItem>
          <ListItem>Fat: {nutrients.FAT?.quantity.toFixed(1)} g</ListItem>
          <ListItem>Carbs: {nutrients.CHOCDF?.quantity.toFixed(1)} g</ListItem>
          <ListItem>Cholesterol: {nutrients.CHOLE?.quantity.toFixed(1)} mg</ListItem>
          <ListItem>Sodium: {nutrients.NA?.quantity.toFixed(1)} mg</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
