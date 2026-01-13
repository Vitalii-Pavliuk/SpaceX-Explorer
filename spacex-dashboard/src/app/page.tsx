import Link from "next/link";

export default async function Home() {
  return (
    <main>
        <Link href="/launches">
        Open launcehs list
      </Link>
      <br />
        <Link href="/rockets">
        Open rockets list
      </Link>
    </main>
  );
}