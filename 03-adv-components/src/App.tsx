/*import Input from "./components/UI/Input";
import "./App.css";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/UI/Form";
*/

import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import TimersContextProvider from './store/TimersContext.tsx';

function App() {

  /*const customForm = useRef<FormHandle>(null);

  const input = useRef(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log('extractedData', extractedData);
    customForm.current?.clear();
  }*/

  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
      {/*   Toda la sección 4
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
      */}
    </TimersContextProvider>
  )
}

export default App;