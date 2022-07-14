import AppRoutes from './routes/AppRoutes'
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
          <AppRoutes/>
        </MantineProvider>
      </ColorSchemeProvider>
  )
}

export default App
