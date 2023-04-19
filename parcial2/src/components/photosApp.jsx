import { useEffect, useState, useMemo } from "react";
import { PhotoList } from "./photoList";

export const PhotosApp = () => {
	const [start, setStart] = useState(false);
	return (
		<>
			<div
				className="h-auto w-screen 
			flex place-content-center place-items-center
			bg-slate-800"
			>
				<div className="h-screen flex place-content-center place-items-center">
					<button
						onClick={() => setStart(true)}
						className={`
						font-semibold text-lg text-slate-600
						bg-slate-800 p-4 h-fit w-auto
						shadow-[0px_0px_18px_-2px_rgba(0,0,0,0.25)]
						hover:text-slate-200
						hover:shadow-[0px_0px_18px_-0px_rgba(0,0,0,0.25)]
						rounded-xl
						${start ? "hidden" : ""}`}
					>
						Generate List
					</button>
				</div>
				<div className={`${start ? "" : "hidden"}`}>
					<PhotoList />
				</div>
			</div>
		</>
	);
};
