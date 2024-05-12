import NotificationProvider from "./providers/NotificationProvider";
import AppProvider from "./providers/AppProvider";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
function App() {
  return (
    <AppProvider>
      <NotificationProvider>
        <AppRoutes />
      </NotificationProvider>
    </AppProvider>
  );
}

export default App;
