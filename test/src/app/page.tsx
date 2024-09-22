"use client"

import { useEffect, useState } from "react";
import Example from "@/components/Example";

interface User {
  Username: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string, {
          method: 'POST',
          headers: {
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string,
          },
          body: JSON.stringify({
            query: `query {
              User {
                Username
              }
            }`,
          }),
        });
        const data = await response.json();
        setUsers(data.data.User);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Items</h1>
      <Example />
      <ul>
        {users.map((user) => (
          <li key={user.Username}>{user.Username}</li>
        ))}
      </ul>
    </div>
  );
}
