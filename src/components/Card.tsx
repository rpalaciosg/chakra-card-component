import { Box, Button, Center, HStack, Heading, Image, Tag, Text } from "@chakra-ui/react";

export function Card(){
  return(
    <Center as="section" bg="gray.100" h="100vh">
      <Box maxW="420px" bg="white" p="6">
        <Image 
          src="https://images.unsplash.com/photo-1501908734255-16579c18c25f?ixlib=rb-4.0.3"
          alt="Hermosa cascada"
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {["Waterfall", "Naturaleza", "Cascada"].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">Cascadas Hermosas</Heading>
        <Text>Cascadas hermosas, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores eum soluta doloremque! Nam pariatur consectetur iste eos dolores? Id odio repellat quasi veniam porro tenetur quod tempora architecto totam.m</Text>
        <Center my="6">
          <Button colorScheme="blue">Learn more</Button>
        </Center>
      </Box>
    </Center>
  );
}