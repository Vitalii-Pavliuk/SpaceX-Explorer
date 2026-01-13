import { getLaunches } from "../lib/api";
import { LaunchCard } from "../components/LaunchCard";
import Link from "next/link";

export default async function Home() {
  const launches = await getLaunches();

  return (
    <main>
        <Link href="/launches">
        Open launcehs list
      </Link>
        <Link href="/rockets">
        Open rockets list
      </Link>
    </main>
  );
}