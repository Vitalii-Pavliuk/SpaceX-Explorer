import { getCrewMember } from "../../../lib/api";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CrewMemberPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const member = await getCrewMember(id);

  return (
    <div>
      <Link href="/crew">
        ← Back to crew
      </Link>

      <h1>{member.name}</h1>

</div>
  );
}