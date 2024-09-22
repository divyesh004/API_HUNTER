import { AuthProvider } from "./Context/AuthContext";
import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">

      <AuthProvider>
        <div className=" ">
          <AllRoutes />
        </div>
      </AuthProvider>
    </div>
  );
}

// authentication: reqres.in
//
