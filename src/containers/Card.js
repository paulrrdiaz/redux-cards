import { connect } from "react-redux";
import Card from "components/Card";

const mapStateToProps = ({ cards }, ownProps) => {
  return cards.entities[ownProps.cardId];
};

export default connect(mapStateToProps)(Card);
