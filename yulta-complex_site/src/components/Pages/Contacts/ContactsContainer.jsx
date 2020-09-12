import {connect} from "react-redux";
import Contacts from "./Contacts";

const mapStateToProps = (state) => {
    return {
        contactsPage: state.contactsPage,
    }
};

const ContactsContainer = connect(mapStateToProps)(Contacts);

export default ContactsContainer;