// src/app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
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
    return NextResponse.json(data.data.User);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 500 });
  }
}
