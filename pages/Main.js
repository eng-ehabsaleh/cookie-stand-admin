import React from "react";
import CreateForm from "./CreateForm";
import { useState } from "react";
import ReportTable from "./ReportTable";
export default function Main() {
  let tableFlage = false;
  const [location, setLocation] = useState();
  const [maximum, setmax] = useState();
  const [minimum, setmin] = useState();
  const [average, setavg] = useState();
  const [report, setReport] = useState({});
  function formHandle(event) {
    event.preventDefault();
    tableFlage = true;
    // report.push(setLocation(event.target.loc.value));
    // report.push(setmin(event.target.min.value));
    // report.push(setmax(event.target.max.value));
    // report.push(setavg(event.target.avg.value));
    report.city = event.target.loc.value;
    report.minCookie = event.target.min.value;
    report.maxCookie = event.target.max.value;
    report.avgCookie = event.target.avg.value;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100">
        <CreateForm formHandle={formHandle} />
        {tableFlage && <ReportTable report={report} />}

        {/* <p>
          {`{"Location":"${location}","minCustomers":"${minimum}","maxCustomers":"${maximum}","avgCookies":"${average}" }`}
        </p> */}
      </main>
    </div>
  );
}
