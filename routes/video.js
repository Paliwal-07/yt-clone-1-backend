import express from 'express';
import { uploadVideo, getAllVideos } from '../controllers/video.js';
import auth from '../middleware/auth.js';
import upload from '../helpers/fileHelpers.js';
import { likeController } from '../controllers/like.js';
import { deleteLikeVideoController, getAlllikeVideoController, likeVideoController } from '../controllers/likeVideo.js';
import { deleteWatchLaterController, getWatchLaterController, watchLaterController } from '../controllers/watchLater.js';
import { HistoryController, deleteHistoryController, getHistoryController } from '../controllers/history.js';
import { viewController } from '../controllers/views.js';

const routes = express.Router();

routes.post("/upload", auth, upload.single("file"), uploadVideo);
routes.get("/get", getAllVideos);
routes.patch('/like/:id', auth, likeController);
routes.patch('/view/:id',viewController)

routes.post('/like-video', auth, likeVideoController);
routes.get('/get-all-like-video',getAlllikeVideoController)
routes.delete('/delete-liked-video/:videoId/:Viewer',auth,deleteLikeVideoController)

routes.post('/watch-later',auth,watchLaterController)
routes.get('/get-all-watch-later',getWatchLaterController)
routes.delete('/delete-watch-later/:videoId/:Viewer',auth,deleteWatchLaterController)

routes.post('/history',auth,HistoryController)
routes.get('/get-all-history',getHistoryController)
routes.delete('/delete-history/:userId',auth,deleteHistoryController)

export default routes;