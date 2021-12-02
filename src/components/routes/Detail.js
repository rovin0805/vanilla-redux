import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    return <Component params={params} {...props} />;
  };
  return Wrapper;
};

function Detail({ toDos, params }) {
  const target = toDos?.find((toDo) => toDo.id === parseInt(params?.id));

  return (
    <>
      <h1>{target?.text}</h1>
      <h5>Created at: {target?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
  //   return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(withRouter(Detail));
