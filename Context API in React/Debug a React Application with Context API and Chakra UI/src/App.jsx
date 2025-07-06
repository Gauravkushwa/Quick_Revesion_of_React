import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  extendTheme,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';

// Custom theme that supports light/dark mode
const customTheme = (mode) =>
  extendTheme({
    config: {
      initialColorMode: mode, 
      useSystemColorMode: false,
    },
    styles: {
      global: {
        body: {
          bg: mode === 'light' ? 'gray.50' : 'gray.800',
          color: mode === 'light' ? 'black' : 'white',
        },
      },
    },
  });

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ChakraProvider theme={customTheme(theme)}>
      {/* Navbar */}
      <Flex
        as="nav"
        p="4"
        bg={theme === 'light' ? 'gray.100' : 'gray.700'}
        justifyContent="space-between"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      {/* Main Grid */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap="4"
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'].map((card) => (
          <Box
            key={card}
            p="6"
            shadow="md"
            borderRadius="md"
            bg={theme === 'light' ? 'gray.200' : 'gray.600'}
          >
            {card}
          </Box>
        ))}
      </Grid>

      {/* Footer */}
      <Box
        as="footer"
        p="4"
        textAlign="center"
        bg={theme === 'light' ? 'gray.300' : 'gray.700'}
      >
        {isLoggedIn ? 'Welcome, User' : 'Please log in'}
      </Box>
    </ChakraProvider>
  );
}

export default App;
