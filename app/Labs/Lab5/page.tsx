import EnvironmentVariables from "./EnvironmentVariables";
<<<<<<< HEAD
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${HTTP_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithArraysAsynchronously/>
    </div>
  );
}
=======
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href={`${HTTP_SERVER}/lab5/welcome`}          
             className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
      </div>
  );}
  
>>>>>>> bec22b3 (a5 nextjs)
