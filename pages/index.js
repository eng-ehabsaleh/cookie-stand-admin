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
			  <legend className="object-top py-4 font-medium">Cookie Stand Admin</legend>
			  <label className="object-left pr-4">Location</label>
			  <input className="w-11/12 "></input>
			  <div >
			  <label className="mx-4 p-0 justify-center">Minimun Customer per Hour</label>
			  <label className="mx-8 justify-center">Maximum Customer per Hour</label>
			  <label className="mx-8 justify-center">Average Cookie per Sale</label>
			  </div>
			  <input className="mx-12"></input>
			  <input className="mx-12"></input>
			  <input className="mx-12"></input>
			  <button className="bg-green-500">Create</button>
		  </form>
      </main>
      <footer className="flex items-center justify-center w-full ">
          <h3 className = "w-screen pl-5 text-2xl bg-green-500">@2021</h3>
      </footer>
    </div>
  )
}
