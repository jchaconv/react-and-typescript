import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import Users, { type User } from "./components/Users";
import fetchingImg from './assets/data-fetching.png';

import './index.css';
import ErrorMessage from "./components/ErrorMessage";

function App() {



  const [fetchedUsers, setFetchedUsers] = useState<User[]>();

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState<string>();

  useEffect(() => {

    async function fetchUsers() {

      setIsFetching(true);

      try {

        const data = (await get('https://jsonplaceholder.org/usersss')) as User[];
        console.log('data', data);

        setFetchedUsers(data);

      } catch (error) {

        if (error instanceof Error) {
          setError('Failed to fetch data.');
        }

      }

      setIsFetching(false);
    }

    fetchUsers();


  }, []);

  let content: ReactNode;

  if(error) {
    content = <ErrorMessage text={error} />
  }

  if (fetchedUsers) {
    content = <Users users={fetchedUsers} />
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching users ...</p>
  }


  return <main>
    <img src={fetchingImg} alt="data fetching processing" />
    {content}
  </main>;
}

export default App;