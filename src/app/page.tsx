import Link from "next/link";

import { Repos } from "components/Repo";
import { User } from "components/User";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <User />
      <Repos />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
