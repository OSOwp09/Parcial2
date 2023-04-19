import { configureStore } from "@reduxjs/toolkit";
import { PhotoSlice } from "./slices/photos/photoSlice";
export default configureStore({
	reducer: { photos: PhotoSlice.reducer },
});
