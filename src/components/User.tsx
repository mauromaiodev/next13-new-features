import { cookies, headers } from "next/headers";

export async function User() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const userCookies = cookies();
  const userHeaders = headers();

  const response = await fetch("https://api.github.com/users/mauromaiodev", {
    next: {
      revalidate: 60
    },
    cache: "no-store"
  });
  const user = await response.json();

  return (
    <div>
      <h1>User</h1>
      {JSON.stringify(userCookies.getAll(), null, 2)}
      {JSON.stringify(userHeaders.entries(), null, 2)}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
