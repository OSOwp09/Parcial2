import { createSlice } from "@reduxjs/toolkit";

export const PhotoSlice = createSlice({
	name: "photo",
	initialState: {
		page: 0,
		photos: [],
		isLoading: false,
	},
	reducers: {
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		setPhotos: (state, action) => {
			state.page = action.payload.page
			state.photos = action.payload.getPhotos
		},
	},
});

export const { setPhotos, startLoading } = PhotoSlice.actions;

export default PhotoSlice.reducer
