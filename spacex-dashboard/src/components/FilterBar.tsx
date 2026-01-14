"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const FilterBar = () => {
 const router = useRouter();
const searchParams = useSearchParams();
const isOldestFirst = searchParams.get("sort") === "asc";

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    if (key !== "page") {
      params.set("page", "1");
    }
    router.push(`/launches?${params.toString()}`);
  };

  return (
    <div>
<select onChange={(e) => updateFilter("status", e.target.value)}
        defaultValue={searchParams.get("status") || ""}>
<option value="">All Flights</option>
        <option value="success">Success Only</option>
        <option value="failed">Failed Only</option>
</select>
<p>From</p>
<input type="date" onChange={(e) => updateFilter("from", e.target.value)}
        defaultValue={searchParams.get("from") || ""}></input>
<p>TO</p>
<input type="date" onChange={(e) => updateFilter("to", e.target.value)}
        defaultValue={searchParams.get("to") || ""}></input>



<button onClick={() => {updateFilter("sort", isOldestFirst ? "" : "asc");}}>
    {isOldestFirst ? "⬇️ Show Newest First" : "⬆️ Show Oldest First"}
</button>


    </div>
  );
};