import Image from "next/image";
import Link from "next/link";
import { Crew } from "../types";

interface Props {
  crew: Crew;
}

export const CrewCard = ({ crew }: Props) => {
//   const patchImage = crew.image || null;

  return (
    <Link 
      href={`/crew-member/${crew.id}`}
    >
      <div>
        <div>
          <div>
            {crew.image ? (
              <Image 
                src={crew.image} 
                alt={crew.name} 
                width={64} 
                height={64}
              />
            ) : (
              <div>
                No IMG
              </div>
            )}
          </div>
        </div>

        <div>
            <h2>
                {crew.name}
            </h2>
        </div>
      </div>
    </Link>
  );
};