import {getLaunches} from "../lib/api";
import Test from "../components/test";

export default function Home() {
    
console.log(getLaunches());

  return (

  <>
  <h1>see ya in space</h1>
  <Test />
  </>
  );
}
