// Complete the HomePage Component and export it

import Form from "./Form";
export let name = "YourName";
export let email = "xyz@pqr.com";

function HomePage() {
  return (
    <div className="Homepage">
      <h1>Home Page</h1>
      <Form />
    </div>
  );
}
export default HomePage;
