import userModel from "../models/users.model.js";
const fetchUserbyId = async (id) => {
    try {
        const user = await userModel.findById(id);
        if (user === null) {
            console.log("User not found");
            return null;
        }
        else {
            return user;
        }
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
export default fetchUserbyId;