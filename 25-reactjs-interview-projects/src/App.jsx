import Accordian from "./components/accordian/Accordian";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomColor from "./components/random-color-generator/RandomColor";
import StarRating from "./components/star-rating-app/StarRating";

function App() {
  const noOfStars = 5;
  return (
    <>
      <div>

        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        <StarRating noOfStars={noOfStars} />
      </div>
    </>
  );
}

export default App;
