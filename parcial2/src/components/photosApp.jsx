import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPhotos } from "../store/slices/photos/thunks";

export const PhotosApp = () => {
	const [photosList, setPhotosList] = useState([]);
	const [page, setPAge] = useState(0);

	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetPhotos());
	}, []);

	const onClick = (i) => {
		dispatch(GetPhotos(page + i));
		setPhotosList(photos.photos);
		console.log(photos.photos);
	};
	return (
		<>
			<div>
				<button onClick={() => onClick(0)}>CLick</button>
				<div>
					<button onClick={() => onClick()}>Previous Page</button>
					<button onClick={() => setPAge(10)}>Next Page</button>
				</div>
				<div>
					<tbody className="border-2 border-black">
						<tr>
							<td className="border border-black">Album</td>
							<td className="border border-black">ID</td>
							<td className="border border-black">Title</td>
							<td className="border border-black">Image</td>
							<td className="border border-black">Thumbnail</td>
						</tr>
						{photosList.map((photo, index) => (
							<tr key={index} className="border border-black">
								<td className="border border-black">
									{photosList[index]?.albumId}
								</td>
								<td className="border border-black">{photosList[index]?.id}</td>
								<td className="border border-black">
									{photosList[index]?.title}
								</td>
								<td className="border border-black">
									<img src={photosList[index]?.url} alt="" />
								</td>
								<td className="border border-black">
									<img src={photosList[index]?.thumbnailUrl} alt="" />
								</td>
							</tr>
						))}
					</tbody>
				</div>
			</div>
		</>
	);
};
