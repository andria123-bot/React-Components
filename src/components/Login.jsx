import useForm from "../hooks/useForm.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const Login = ({ setAccount }) => {
  const { login } = useLocalStorage(setAccount);
  const handleSubmit = useForm();

  return (
    <form onSubmit={(e) => handleSubmit(e, login)}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pass" placeholder="Pass" required />
      <button>Submit</button>
    </form>
  );
};

export default Login;