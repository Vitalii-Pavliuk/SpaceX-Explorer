import { getLaunches } from "../lib/api";
import { LaunchCard } from "../components/LaunchCard";

export default async function Home() {
  const launches = await getLaunches();

  return (
    <main>
      <div>
        <h1>SpaceX Launches 🚀</h1>
        <p>Всього запусків: {launches.length}</p>
      </div>
      <div>
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </main>
  );
}