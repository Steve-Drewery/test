import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Example from "@/components/Example";

export default async function Home() {
  let data = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string,
    },
    body: JSON.stringify({
      query: `query {
        User {
          Username
          }
          }`
    }),
  }
  );
  const users = await data.json();
  console.log(users);
  return (
    <div>
      <h1>My Items</h1>
      <Example />
    </div>
  );
}

