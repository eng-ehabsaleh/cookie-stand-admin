import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState();
  const [maximum, setmax] = useState();
  const [minimum, setmin] = useState();
  const [average, setavg] = useState();

  function formHandle(event) {
    event.preventDefault();
    setLocation(event.target.loc.value);
    setmin(event.target.min.value);
    setmax(event.target.max.value);
    setavg(event.target.avg.value);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-1.5 flex w-screen pl-5 text-3xl bg-green-500">
        <h1>Cookie Stand Admin</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100">
        <form className="w-8/12 h-40 bg-green-300 " onSubmit={formHandle}>
          <legend>Cookie Stand Admin</legend>
          <label className="object-left pr-4">Location</label>
          <input className="w-10/12 " name="loc" type="text"></input>
          <div className="flex justify-center py-5 text-xs ">
            <div className="grid justify-items-start">
              <label className="pr-10">Min. Customer per hour</label>
              <input className="w-36" name="min" type="number"></input>
            </div>
            <div className="grid justify-items-start">
              <label className="pr-10">Max. Customer per hour</label>
              <input className="w-36" name="max" type="number"></input>
            </div>
            <div className="grid justify-items-start">
              <label className="pr-10">Average Cookie per Sale</label>
              <input
                className="w-36"
                name="avg"
                type="number"
                step="0.1"
              ></input>
            </div>
            <button className="w-4/12 bg-green-500 h-14" type="submit">
              Create
            </button>
          </div>
        </form>
        <p className="py-11">Report Table Coming Soon...</p>
        <p>
          {`{"Location":"${location}","minCustomers":"${minimum}","maxCustomers":"${maximum}","avgCookies":"${average}" }`}
        </p>
      </main>

      <footer className="flex items-center justify-center w-full ">
        <h3 className="py-1.5 w-screen pl-5 text-2xl bg-green-600">
          {" "}
          &copy; 2021
        </h3>
      </footer>
    </div>
  );
}
