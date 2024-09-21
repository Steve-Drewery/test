"use client"
import { useQuery, gql } from '@apollo/client';

const GET_ITEMS = gql`
  query {
    User {
      Username
    }
  }
`;

const Example: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.items.map((item: { id: string; name: string }) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Example;
