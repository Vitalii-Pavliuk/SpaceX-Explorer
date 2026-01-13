import { Launch } from "../types"; 
import { Rocket } from "../types"; 

export const getLaunches = async (): Promise<Launch[]> => {
  const res = await fetch('https://api.spacexdata.com/v4/launches', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
     throw new Error('Failed to fetch launches');
  }
  return res.json();
}

export const getLaunch = async (id: string): Promise<Launch> => {
  const url = `https://api.spacexdata.com/v4/launches/${id}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch launch');
  }

  return res.json();
};

export const getRockets = async (): Promise<Rocket[]> => {
  const res = await fetch('https://api.spacexdata.com/v4/rockets', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
     throw new Error('Failed to fetch rockets');
  }
  return res.json();
}

export const getRocket = async (id: string): Promise<Rocket> => {
  const url = `https://api.spacexdata.com/v4/rockets/${id}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch rocket');
  }

  return res.json();
};