import { Launch } from "../types"; 

export const getLaunches = async (): Promise<Launch[]> => {
  const res = await fetch('https://api.spacexdata.com/v4/launches', {
    next: { revalidate: 360 },
  });
  if (!res.ok) {
     throw new Error('Failed to fetch launches');
  }
  return res.json();
}