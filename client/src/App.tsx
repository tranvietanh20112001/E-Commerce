import AppProvider from "./providers/app.provider";
import AppRoutes from "./routes/app.route";
// import UserProvider from "./providers/user.provider";
import NotificationProvider from "./providers/notification.provider";
import "./index.css";
function App() {
  return (
    <AppProvider>
      <NotificationProvider>
        {/* <UserProvider> */}
        <AppRoutes />
        {/* </UserProvider> */}
      </NotificationProvider>
    </AppProvider>
  );
}

export default App;
