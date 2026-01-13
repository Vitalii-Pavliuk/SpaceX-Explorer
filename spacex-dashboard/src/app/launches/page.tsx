import { getLaunches } from "../../lib/api";
import { LaunchCard } from "../../components/LaunchCard";
import Link from "next/link";

const ITEMS_PER_PAGE = 20;

type Props = {
  searchParams: Promise<{ page?: string }>; 
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const allLaunches = await getLaunches();

  const totalPages = Math.ceil(allLaunches.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentLaunches = allLaunches.slice(startIndex, endIndex);

return (
  <div>
      <div>
        <Link href="/">
        ← Back to Rockets
      </Link>
      </div>
  <div>
    <h1>SpaceX Launches</h1>
    <div>
      {currentLaunches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
    <div>
      {currentPage > 1 ? (
        <Link href={`/?page=${currentPage - 1}`}>
          ← Prev
        </Link>
      ) : <div />}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link href={`/launches?page=${currentPage + 1}`}>
          Next →
        </Link>
      ) : <div />}
    </div>
  </div>
  </div>
);
}