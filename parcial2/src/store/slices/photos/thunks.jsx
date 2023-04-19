import { PhotApi } from "../../../api/Api";
import { setPhotos, startLoading } from "./photoSlice";

export const GetPhotos = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());

		const resp = await PhotApi.get();
		dispatch(
			setPhotos({
				getPhotos: resp.data.slice(page * 10, (page+1) * 10),
				page: page + 1,
			})
		);
	};
};
