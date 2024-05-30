import AppProvider from "./providers/app.provider";
import AppRoutes from "./routes/app.route";
import NotificationProvider from "./providers/notification.provider";
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
