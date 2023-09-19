export async function Repos() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://api.github.com/users/mauromaiodev/repos",
    {
      cache: "no-store"
    }
  );
  const repos = await response.json();

  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  );
}
