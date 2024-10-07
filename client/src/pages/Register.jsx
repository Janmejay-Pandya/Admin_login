import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  const navigate = useNavigate();

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
      console.log(user)
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);
        navigate("/login");
      }
    } catch (error) {
      console.log("Register ", error);

    }
  }
  return <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/register.png" alt="" width={500} height={500} />
            </div>
            {/*Let's tackle registration form  */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
                    value={user.username}
                    onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email}
                    onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>
}

export default Register;