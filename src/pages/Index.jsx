// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, SimpleGrid, Image, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Superfly Elite FG",
      type: "Cleats",
      price: "$250",
      image: "https://images.unsplash.com/photo-1597274747316-808c6786c165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjbGVhdHN8ZW58MHx8fHwxNzEzOTY1NjAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Predator Freak",
      type: "Cleats",
      price: "$280",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjBzb2NjZXIlMjBjbGVhdHN8ZW58MHx8fHwxNzEzOTY1NjAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Barcelona Home Jersey",
      type: "Jersey",
      price: "$90",
      image: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxCYXJjZWxvbmElMjBqZXJzZXl8ZW58MHx8fHwxNzEzOTY1NjAyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Real Madrid Away Jersey",
      type: "Jersey",
      price: "$95",
      image: "https://images.unsplash.com/photo-1662096909714-e2f206d0a636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSZWFsJTIwTWFkcmlkJTIwamVyc2V5fGVufDB8fHx8MTcxMzk2NTYwMnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Soccer Gear Shop
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" rounded="md">
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <VStack align="stretch" mt={4}>
                <Text fontWeight="bold" fontSize="lg">
                  {product.name}
                </Text>
                <Text>{product.type}</Text>
                <HStack justifyContent="space-between" mt={3}>
                  <Text fontSize="xl" color="green.500">
                    {product.price}
                  </Text>
                  <Button colorScheme="blue" rightIcon={<FaShoppingCart />}>
                    Add to Cart
                  </Button>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
