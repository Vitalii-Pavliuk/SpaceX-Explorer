import { getCrew } from "../../lib/api";
import { CrewCard } from "../../components/CrewCard";
import Link from "next/link";

export default async function Crew() {
  const crew = await getCrew();

  return (
    <div>
        <Link href="/">
        ← Back to rocketes
      </Link>
      <div>
        <h1>SpaceX rocketes</h1>
      </div>
      <div>
        {crew.map((crew) => (
          <CrewCard key={crew.id} crew={crew} />
        ))}
      </div>
        </div>
  );
}