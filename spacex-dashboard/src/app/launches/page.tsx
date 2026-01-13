import { getLaunches } from "../../lib/api";
import { LaunchCard } from "../../components/LaunchCard";
import Link from "next/link";

export default async function Home() {
  const launches = await getLaunches();

  return (
    <div>
        <Link href="/">
        ← Back to Launches
      </Link>
      <div>
        <h1>SpaceX Launches</h1>
        <p>Всього запусків: {launches.length}</p>
      </div>
      <div>
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
        </div>
  );
}