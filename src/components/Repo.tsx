export async function Repos() {
  const response = await fetch(
    "https://api.github.com/users/mauromaiodev/repos",
    {
      next: {
        revalidate: 60
      },
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
