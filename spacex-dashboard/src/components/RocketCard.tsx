import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns"; 
import { Rocket } from "../types";

interface Props {
  rocket: Rocket;
}

export const RocketCard = ({ rocket }: Props) => {
  const patchImage = rocket.flickr_images || null;

  return (
    <Link 
      href={`/rocket/${rocket.id}`}
    >
      <div>
        <div>
          <div>
            {patchImage ? (
              <Image 
                src={patchImage[0]} 
                alt={rocket.name} 
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
            <p>
                {format(new Date(rocket.first_flight), "dd.MM.yyyy")}
            </p>
            <h2>
                {rocket.name}
            </h2>
        </div>
      </div>
    </Link>
  );
};