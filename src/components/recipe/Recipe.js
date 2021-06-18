import React from "react";
import { useHistory } from "react-router-dom";

// import Detail from "../components/details/Detail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const Recipe = ({ recipe }) => {
  const history = useHistory();
  const viewMore = () => {
    history.push({
      pathname: "/details",
      recipe: recipe,
    });
  };

  return (
    <div className="box">
      <div className="label">{recipe?.label} </div>
      <div className="img">
        <img className="meal-img" src={recipe?.image} alt="sd" />
      </div>
      <button onClick={viewMore} className="view-button">
        View More
      </button>
      {/* <p>{ingredients}</p> */}
      {/* <Link to="/details">
        
      </Link>
      <Switch>
        <Route path="/details" component={Detail} />
      </Switch> */}
    </div>
  );
};

export default Recipe;
