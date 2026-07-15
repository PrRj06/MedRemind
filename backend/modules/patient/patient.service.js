import Patient from "./patient.model.js"
import ApiError from "../../shared/utils/ApiError.js";

export const getMyProfileService = async (userId) => {
    const patient = await Patient.findOne({userId}).populate({
        path: "userId",
        select: "name email role",
    });

    if(!patient){
        throw new ApiError(404, "Patient not found");
    }
    return patient;
};