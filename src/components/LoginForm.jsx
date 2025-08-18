import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()

    const form = e.target
    const username = form.username.value
    const email = form.email.value
    const password = form.password.value

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate('/main')
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" placeholder="Enter ur name" required /><br /><br />
        <input type="email" name="email" id="email" placeholder="Enter ur email" required /><br /><br />
        <input type="password" name="password" id="pass" placeholder="Enter ur password" required /><br /><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default LoginForm