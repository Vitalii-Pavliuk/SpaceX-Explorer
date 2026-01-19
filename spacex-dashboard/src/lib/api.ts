import { Launch } from "../types"; 
import { Rocket } from "../types"; 
import { Crew } from "../types";

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

export const getCrew = async (): Promise<Crew[]> => {
  const res = await fetch('https://api.spacexdata.com/v4/crew', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
     throw new Error('Failed to fetch crew');
  }
  return res.json();
}

export const getCrewMember = async (id: string): Promise<Crew> => {
  const url = `https://api.spacexdata.com/v4/crew/${id}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch crew');
  }

  return res.json();
};