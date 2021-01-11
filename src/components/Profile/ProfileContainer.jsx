import { connect } from "react-redux";
import Profile from "./Profile";

const ProfileContainer = connect(null, null)(Profile); // null, так как в Profile.jsx нет никакой логики (она просто рисует)

export default ProfileContainer;