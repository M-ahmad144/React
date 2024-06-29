import Accordian from "./components/accordian/Accordian";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomColor from "./components/random-color-generator/RandomColor";
import StarRating from "./components/star-rating-app/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import Slider from "./components/image-slider/Slider";
import LoadData from "./components/load-more-data/LoadData";
import TreeView from "./components/menu-tree-view/TreeView";
import menus from "./components/menu-tree-view/data";
import QrCode from "./components/QR-code-generator/QrCode";
import ThemeChange from "./components/ChangeThemeUsingLocalHook/ThemeChange";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicators";
import ParentCustomTabs from "./components/custom-tabs/ParentCustomTabs";
import GitHubProfileFinder from "./components/github-profile-finder/GitHubProfileFinder";
import SearchAutoComplete from "./components/search-auto-complete/SearchAutoComplete";
import TicTacToe from "./components/tic-toc-toe/TicTacToe";


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
        {/* <TreeView menus={menus} /> */}
        {/* <QrCode /> */}
        {/* <ThemeChange /> */}
        {/* <ScrollIndicator /> */}
        {/* <ParentCustomTabs /> */}
        {/* <GitHubProfileFinder /> */}
        {/* <SearchAutoComplete /> */}
        <TicTacToe />



      </div>
    </>
  );
}

export default App;
