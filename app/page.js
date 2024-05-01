import Image from "next/image";
import { Suspense } from 'react'
import VideoComponent from "./components/ui/VideoComponent";

export default function Home() {
	return (
		<>
			<Suspense fallback={<p>Loading video...</p>}>
				<VideoComponent />
			</Suspense>
		
			<main className="relative flex min-h-screen flex-col items-center justify-between z-0 px-12">
					
				<div className="z-10 max-w-5xl w-full items-center mt-80 ">

					<h2 className="text-xl font-semibold mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
					<p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				</div>
			</main>
		</>
	);
}
