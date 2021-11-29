import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  
	  <header className = "flex w-screen pl-10 text-2xl bg-green-500 font-medium text-3xl py-3">
          <h1>Cookie Stand Admin</h1>
        </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-green-100">
		  <form className="bg-green-300 w-9/12 h-52 justify-center">
			  <legend className="object-top py-4">Cookie Stand Admin</legend>
			  <label className="object-left pr-4">Location</label>
			  <input className="w-11/12 "></input>
			  <div className="px-4.5">
			  <label>Minimun Customer per Hour</label>
			  <label>Maximum Customer per Hour</label>
			  <label>Average Cookie per Sale</label>
			  </div>
			  <input></input>
			  <input></input>
			  <input></input>
			  <button className="bg-green-500">Create</button>
		  </form>
      </main>
      <footer className="flex items-center justify-center w-full ">
          <h3 className = "w-screen pl-5 text-2xl bg-green-500">@2021</h3>
      </footer>
    </div>
  )
}
