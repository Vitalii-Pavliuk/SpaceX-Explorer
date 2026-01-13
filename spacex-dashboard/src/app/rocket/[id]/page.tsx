import { getRocket } from "../../../lib/api";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RocketPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const rocket = await getRocket(id);

  return (
    <div>
      <Link href="/rockets">
        ← Back to Rockets
      </Link>

      <h1>{rocket.name}</h1>

</div>
  );
}