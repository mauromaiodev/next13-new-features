import Link from "next/link";
import { Suspense } from "react";

import { Repos } from "components/Repo";
import { User } from "components/User";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando usuário...</p>}>
        <User />
      </Suspense>
      <Suspense fallback={<p>Carregando repositórios...</p>}>
        <Repos />
      </Suspense>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
