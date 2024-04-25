import Image from "next/image";
import { Suspense } from 'react'
import VideoComponent from "./components/ui/VideoComponent";

export default function Home() {
	return (
		<>
			<Suspense fallback={<p>Loading video...</p>}>
				<VideoComponent />
			</Suspense>
		
			<main className="relative flex min-h-screen flex-col items-center justify-between z-0">
					
				<div className="z-10 max-w-5xl w-full items-center ">


				</div>
			</main>
		</>
	);
}
