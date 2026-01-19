import { getLaunches, getRockets } from "../../lib/api";
import { LaunchCard } from "../../components/LaunchCard";
import Link from "next/link";
import { FilterBar } from "../../components/FilterBar";
import { fromUnixTime } from "date-fns";

const ITEMS_PER_PAGE = 20;

type Props = {
  searchParams: Promise<{ 
    page?: string; 
    status?: string;
    sort?: string;
    from?: string; 
    to?: string;
    rocket?: string;
  }>; 
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const [allLaunches, allRockets] = await Promise.all([
    getLaunches(),
    getRockets(),
  ]);

  if (params.sort !== "asc") {
    allLaunches.sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime());
  }
  let filteredLaunches = allLaunches;

  if (params.status === "success") {
    filteredLaunches = filteredLaunches.filter((launch) => launch.success === true);
  } else if (params.status === "failed") {
    filteredLaunches = filteredLaunches.filter((launch) => launch.success === false);
  }

  if (params.rocket) {
    filteredLaunches = filteredLaunches.filter((launch) => {
      const rocketId = typeof launch.rocket === 'string' ? launch.rocket : launch.rocket.id;
      return rocketId === params.rocket;
    });
  }

if (params.from) {
    const fromDate = new Date(params.from).getTime();
    filteredLaunches = filteredLaunches.filter((launch) => {
      return new Date(launch.date_utc).getTime() >= fromDate;
    });
  }

if (params.to) {
    const toDate = new Date(params.to).getTime();
    filteredLaunches = filteredLaunches.filter((launch) => {
      return new Date(launch.date_utc).getTime() <= toDate;
    });
  }

  const totalPages = Math.ceil(filteredLaunches.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentLaunches = filteredLaunches.slice(startIndex, endIndex);  
  const getPageUrl = (pageNumber: number) => {
    const query = new URLSearchParams();
    if (params.status) query.set("status", params.status);
    if (params.rocket) query.set("rocket", params.rocket);
    if (params.from) query.set("from", params.from);
    if (params.to) query.set("to", params.to);
    if (params.sort) query.set("sort", params.sort);
    query.set("page", pageNumber.toString());
    return `/launches?${query.toString()}`;
  };

return (
  <div>
      <div>
        <Link href="/">
        ← Back to Rockets
      </Link>
      </div>
  <div>
    <h1>SpaceX Launches</h1>
    <FilterBar rockets={allRockets.map(r => ({ id: r.id, name: r.name }))} />
    <div>
      {currentLaunches.length > 0 ? (
        currentLaunches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))
      ) : (
        <div>
          No launches found matching your filters 🕵️‍♂️
        </div>
      )}
    </div>
    <div>
      {currentPage > 1 ? (
        <Link href={getPageUrl(currentPage - 1)}>
          ← Prev
        </Link>
      ) : <div />}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link href={getPageUrl(currentPage + 1)}>
          Next →
        </Link>
      ) : <div />}
    </div>
  </div>
  </div>
);
}