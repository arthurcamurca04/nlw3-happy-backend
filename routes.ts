import express from 'express';
const Routes = express.Router();
import multer from 'multer';
import uploadConfig from './src/config/upload';
import OrphanageController from "./src/controllers/orphanageController";

const upload = multer(uploadConfig);

Routes.post("/orphanages", upload.array('images') ,OrphanageController.create);

Routes.get("/orphanages", OrphanageController.index);
Routes.get("/orphanages/:id", OrphanageController.show);

  export default Routes;