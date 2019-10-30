import { connect } from "react-redux";
import Users from "components/Users";

const getUsers = users => {
  console.log("getting users");

  return users.ids;
};

const mapStateToProps = ({ users }) => {
  return {
    users: getUsers(users)
  };
};

export default connect(mapStateToProps)(Users);
