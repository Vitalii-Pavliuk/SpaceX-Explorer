import {getLaunches} from "../lib/api";

export default async function Test() {
const launches = await getLaunches();


return (
  <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            {launch.name}
          </li>

        ))}
      </ul>
);
}

