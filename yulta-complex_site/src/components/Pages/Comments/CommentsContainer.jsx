import {connect} from "react-redux";
import Comments from "./Comments";

const mapStateToProps = (state) => {
    return {
        commentsPage: state.commentsPage,
    }
};

const CommentsContainer = connect(mapStateToProps)(Comments);

export default CommentsContainer;