import iconList from "../images/icon-list.svg";
import "./FeaturesList.css";

const FeaturesList = () => {
  return (
    <ul className="list">
      <li>
        <img src={iconList} alt="Correct sign" />
        <p>Product discovery and building what matters</p>
      </li>
      <li>
        <img src={iconList} alt="Correct sign" />
        <p>Measuring to ensure updates are a success</p>
      </li>
      <li>
        <img src={iconList} alt="Correct sign" />
        <p>And much more!</p>
      </li>
    </ul>
  );
};
export default FeaturesList;
