import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns"; 
import { Launch } from "../../types";
import "./LaunchCard.scss";


interface Props {
  launch: Launch;
}

export const LaunchCard = ({ launch }: Props) => {
  const patchImage = launch.links.patch.small || null;
  const rocketName = typeof launch.rocket === 'string' ? launch.rocket : launch.rocket.name;

  return (
    <Link 
      href={`/launch/${launch.id}`}
      className="launch-card-link"
    >
      <div className="launch-card">
                  <div className="launch-card__image">
            {patchImage ? (
              <Image 
                src={patchImage} 
                alt={launch.name} 
                width={64} 
                height={64}
              />
            ) : (
              <div className="launch-card__image-placeholder">
                No IMG
              </div>
            )}
          </div>
        <div className="launch-card__header">
          
          <span className="launch-card__status">
            {launch.success ? "Success" : "Failure"}
          </span>
          <p className="launch-card__rocket">{rocketName}</p>
        </div>

        <div className="launch-card__body">
            <p className="launch-card__date">
                {format(new Date(launch.date_utc), "dd.MM.yyyy")}
            </p>
            <h2 className="launch-card__title">
                {launch.name}
            </h2>
        </div>
      </div>
    </Link>
  );
};
