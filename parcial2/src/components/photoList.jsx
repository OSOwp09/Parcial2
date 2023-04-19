import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPhotos } from "../store/slices/photos/thunks";

export const PhotoList = () => {
	const [photosList, setPhotosList] = useState([]);
	const [page, setPage] = useState(0);

	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();

	useEffect(() => {
		setPhotosList(photos.photos);
	}, [photos]);

	useEffect(() => {
		dispatch(GetPhotos(page));
	}, [page]);

	const handdlePreviousPage = () => {
		setPage(page - 1);
		if (page == 0) {
			setPage(0);
		}
	};

	const handdleNextPAge = () => {
		setPage(page + 1);
	};

	const HeaderStyle = `border border-slate-700 
    text-center w-[210px] font-semibold rounded-xl`;

	const rowsStyle = `w-[200px] text-center mx-1`;

	const btnStyle = `
    font-semibold text-sm text-slate-600
    bg-slate-800 p-2 h-fit w-[120px]
    shadow-[0px_0px_18px_-2px_rgba(0,0,0,0.25)]
    hover:text-slate-200
    hover:shadow-[0px_0px_18px_-0px_rgba(0,0,0,0.25)]
    rounded-xl`;

	return (
		<>
			<div className="flex flex-col place-items-center my-5 gap-5 text-slate-300">
				<div className="flex gap-5 place-items-center">
					<button
						onClick={() => handdlePreviousPage()}
						className={`${btnStyle}`}
					>
						Previous Page
					</button>
					<h1>{page + 1}</h1>
					<button onClick={() => handdleNextPAge()} className={`${btnStyle}`}>
						Next Page
					</button>
				</div>
				<div
					className="p-2 shadow-[0px_0px_18px_-2px_rgba(0,0,0,0.25)] rounded-xl
                    relative"
				>
					<div
						className="
                    w-fit h-fit rounded-xl
                    sticky top-0 shadow-[0px_3px_10px_-2px_rgba(0,0,0,0.5)]"
					>
						<tr>
							<td className={`${HeaderStyle}`}>Album</td>
							<td className={`${HeaderStyle}`}>ID</td>
							<td className={`${HeaderStyle}`}>Title</td>
							<td className={`${HeaderStyle}`}>Image</td>
							<td className={`${HeaderStyle}`}>Thumbnail</td>
						</tr>
					</div>
					<div className="h-[500px] overflow-auto">
						{photosList.map((photo, index) => (
							<tr
								key={index}
								className={`flex place-content-center place-items-center mt-2 
                                hover:shadow-[0px_0px_18px_-2px_rgba(0,0,0,0.25)] p-2`}
							>
								<td className={`${rowsStyle}`}>{photosList[index]?.albumId}</td>
								<td className={`${rowsStyle}`}>{photosList[index]?.id}</td>
								<td className={`${rowsStyle} `}>{photosList[index]?.title}</td>
								<td className={`${rowsStyle}`}>
									<img
										className="h-[200px] w-[200px]"
										src={photosList[index]?.url}
										alt=""
									/>
								</td>
								<td
									className={`${rowsStyle} h-[200px] flex place-content-center place-items-center`}
								>
									<img
										className="h-[150px] w-[150px]"
										src={photosList[index]?.thumbnailUrl}
										alt=""
									/>
								</td>
							</tr>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
