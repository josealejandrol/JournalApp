import { Link } from "react-router-dom"

export const RegisterScreen = () => {
    return (
        <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
        />

        <input
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Corfim password"
          name="cpassword"
          className="auth__input"
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
    )
}