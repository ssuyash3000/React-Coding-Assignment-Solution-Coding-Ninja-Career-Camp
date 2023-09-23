import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form className="form" style={styles.form}>
        <h1>Register Form</h1>
        <input
          type="text"
          placeholder="Name"
          className="form-input"
          style={styles.formInput}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          style={styles.formInput}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          style={styles.formInput}
        />
        <button className="submit-btn" style={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    margin: "auto",
    width: 250,
    height: 225,
    padding: "2rem",
  },
  formInput: {
    width: "100%",
    paddingBlock: "0.5rem",
    border: "1px solid black",
    borderRadius: 5,
  },

  submitBtn: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    paddingBlock: "0.5rem",
    fontSize: "1.035rem",
  },
};
