// Complete the Form Component and export it
import { email, name } from "./HomePage";
const Form = () => (
  <>
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Login Page</h3>
        <input type="text" placeholder="YourName" value={name} />
        <input type="email" placeholder="xyz@pqr.com" value={email} />
        <button>Login</button>
      </form>
    </div>
  </>
);

export default Form;
