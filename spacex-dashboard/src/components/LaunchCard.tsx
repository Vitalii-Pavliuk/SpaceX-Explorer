import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns"; 
import { Launch } from "../types";

interface Props {
  launch: Launch;
}

export const LaunchCard = ({ launch }: Props) => {
  const patchImage = launch.links.patch.small || null;

  return (
    <Link 
      href={`/launch/${launch.id}`}
    >
      <div>
        <div>
          <div>
            {patchImage ? (
              <Image 
                src={patchImage} 
                alt={launch.name} 
                width={64} 
                height={64}
              />
            ) : (
              <div>
                No IMG
              </div>
            )}
          </div>
          
          <span>
            {launch.success ? "Success" : "Failure"}
          </span>
        </div>

        <div>
            <p>
                {format(new Date(launch.date_utc), "dd.MM.yyyy")}
            </p>
            <h2>
                {launch.name}
            </h2>
        </div>
      </div>
    </Link>
  );
};