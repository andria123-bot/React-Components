import useForm from "../hooks/useForm.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const Register = () => {
  const { register } = useLocalStorage();
  const handleSubmit = useForm();

  return (
    <form onSubmit={(e) => handleSubmit(e, register)}>
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pass" placeholder="Pass" required />
      <button>Submit</button>
    </form>
  );
};

export default Register;