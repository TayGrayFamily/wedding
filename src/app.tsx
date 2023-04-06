import Landing from "./pages/landing/landing";
import "./styles.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <div className="App" style={{ display: "flex", flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Wedding",
      textTransform: "none",
      // fontSize: 16,
    },
  },
});

export default App;
