import Input from "./components/Input";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function App() {

  const customForm = useRef<FormHandle>(null);

  const input = useRef(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log('extractedData', extractedData);
    customForm.current?.clear();
  }

  return (
    <>
      <main>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="number" />
        <Input id="test" label="Test" ref={input} />
        <p>
          <Button>Login</Button>
        </p>
        <p>
          <Button href="https://www.google.com.pe">Link</Button>
        </p>
        <p>
          <Container as={Button}>Click me</Container>
        </p>
      </main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name2" />
        <Input type="number" label="Age" id="age2" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </>
  )
}

export default App;