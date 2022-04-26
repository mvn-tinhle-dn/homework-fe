import "../styles/App.scss";
import FormComponent from "../components/form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from "../components/listuser";

function App() {
  return (
    <div className="App">
      <FormComponent />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserList></UserList>
    </div>
  );
}

export default App;
