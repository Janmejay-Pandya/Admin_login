import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Login() {
  const { storeTokenInLs } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const responseData = await response.json();
        alert("Login Successfull");
        setUser({ email: "", password: "" });
        storeTokenInLs(responseData.token);
        console.log(responseData);
        navigate("/");
      }
      else {
        alert("Invalid Credentials");

      }
    }
    catch (error) {
      console.log("Login", error);
    }
  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="/images/register.png" alt="" width={500} height={500} />
              </div>
              {/*Let's tackle registration form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email}
                      onChange={handleInput} />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login;