import { getLaunch } from "../../../lib/api";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function LaunchPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const launch = await getLaunch(id);

  return (
    <div>
      <Link href="/launches">
        ← Back to Launches
      </Link>

      <div>
        <div>
            <div>
                <h1>{launch.name}</h1>
                <p>
                    {format(new Date(launch.date_utc), "dd MMMM yyyy, HH:mm")}
                </p>
            </div>
            
            <span>
                {launch.success ? "Success" : "Failure"}
            </span>
        </div>

        <div>
            <div>
                 {launch.links.patch.small ? (
                    <Image 
                        src={launch.links.patch.small} 
                        alt={launch.name}
                        width={200}
                        height={200}
                    />
                 ) : (
                    <div>No Image</div>
                 )}
            </div>

            <div>
                <div>
                    <h2>Mission Details</h2>
                    <p>
                        {launch.details || "No description available for this mission."}
                    </p>
                </div>

                {launch.failures.length > 0 && (
                    <div>
                        <h3>Failure Report:</h3>
                        <p>{launch.failures[0].reason}</p>
                    </div>
                )}
                
                <div>
                    {launch.links.webcast && (
                        <a href={launch.links.webcast} target="_blank">
                            Watch on YouTube
                        </a>
                    )}
                    {launch.links.wikipedia && (
                        <a href={launch.links.wikipedia} target="_blank">
                            Wikipedia
                        </a>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}