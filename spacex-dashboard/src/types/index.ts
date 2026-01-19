// {
//   "id": "5eb87cd9ffd86e000604b32a",
//   "name": "FalconSat",
//   "details": "Engine failure at 33 seconds...",  // Увага: може бути null!
//   "date_utc": "2006-03-24T22:30:00.000Z",
//   "success": false,                           // Увага: може бути null (якщо майбутній)!
//   "links": {
//     "patch": {
//       "small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" // Може бути null
//     },
//     "webcast": "https://www.youtube.com/watch?v=0a_00nJ_Y88"     // Може бути null
//   }
// }


export interface Launch {
  id: string;
  name: string;
  failures: Array<{
    reason: string;
  }>;
    details: string | null;
    date_utc: string;
    success: boolean | null;
    links: {
      patch: {
        small: string | null;
        };
        webcast: string | null;
        wikipedia: string | null;
    };
}
export interface Rocket {
  id: string;
  name: string;
  description: string;
  first_flight: string;
  flickr_images: string[];
  success_rate_pct: number;
  cost_per_launch: number;
  active: boolean;
  height: {
    meters: number | null; 
  };
  diameter: {
    meters: number | null;
  };
  mass: {
    kg: number;
  };
  first_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
  };
  second_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
  };
  payload_weights: {
    id: string;
    name: string;
    kg: number;
  }[];
}

export interface Crew {
  id: string;
  name: string;
  agency: string;
  wikipedia: string | null;
  image: string | null;
  status: string;
  launches: string[];
};