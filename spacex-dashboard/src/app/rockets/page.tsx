import { getRockets } from "../../lib/api";
import { RocketCard } from "../../components/RocketCard";
import Link from "next/link";

export default async function Rockets() {
  const rocketes = await getRockets();

  return (
    <div>
        <Link href="/">
        ← Back to rocketes
      </Link>
      <div>
        <h1>SpaceX rocketes</h1>
      </div>
      <div>
        {rocketes.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))}
      </div>
        </div>
  );
}