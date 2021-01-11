import { connect } from "react-redux";
import Aside from "./Aside";

const mapStateToProps = (state) => {
    return {
        aside: state.aside
    }
}

const AsideContainer = connect(mapStateToProps, null)(Aside);

export default AsideContainer;