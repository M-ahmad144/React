import Accordian from "./components/accordian/Accordian";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomColor from "./components/random-color-generator/RandomColor";
import StarRating from "./components/star-rating-app/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import Slider from "./components/image-slider/Slider";
import LoadData from "./components/load-more-data/LoadData";
import TreeView from "./components/menu-tree-view/TreeView";
import menus from "./components/menu-tree-view/data";

function App() {
  const noOfStars = 5;
  return (
    <>
      <div>
        {/* <Accordian /> */}
        {/* <RandomColor /> */}
        {/* <StarRating noOfStars={noOfStars} /> */}
        {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={2} /> */}
        {/* <LoadData limit={20} /> */}
        <TreeView menus={menus} />

      </div>
    </>
  );
}

export default App;
