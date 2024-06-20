import { Container, Box, Heading, Text, VStack, HStack, Divider, Flex, Spacer } from "@chakra-ui/react";
import { FaChartLine, FaNewspaper, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#f3f2ef">
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="xl" mb={2}>Financial Times</Heading>
          <Text fontSize="lg">Your source for the latest financial news and market data</Text>
        </Box>

        <HStack spacing={4} align="stretch">
          <Box flex={2} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" mb={4}>Top News</Heading>
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading as="h3" size="md">Article 1</Heading>
                <Text>Summary of the first article...</Text>
              </Box>
              <Divider />
              <Box>
                <Heading as="h3" size="md">Article 2</Heading>
                <Text>Summary of the second article...</Text>
              </Box>
              <Divider />
              <Box>
                <Heading as="h3" size="md">Article 3</Heading>
                <Text>Summary of the third article...</Text>
              </Box>
            </VStack>
          </Box>

          <Box flex={1} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
            <VStack spacing={4} align="stretch">
              <HStack>
                <FaChartLine />
                <Text>Stock Market Overview</Text>
              </HStack>
              <Divider />
              <HStack>
                <FaMoneyBillWave />
                <Text>Currency Exchange Rates</Text>
              </HStack>
              <Divider />
              <HStack>
                <FaNewspaper />
                <Text>Latest Financial News</Text>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;