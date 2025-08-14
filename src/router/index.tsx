import { AppStack } from "./app.routes";
import { AuthStack } from "./auth.routes";

export default function Router() {
  const isAuthenticated = true;

  return isAuthenticated ? <AppStack /> : <AuthStack />;
}
