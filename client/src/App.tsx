import AppProvider from "./providers/app.provider";
import AppRoutes from "./routes/app.route";
import "./index.css";
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
