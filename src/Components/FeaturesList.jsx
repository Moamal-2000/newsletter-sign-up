import "./FeaturesList.css"

const FeaturesList = () => {
  return (
    <ul className="list">
      <li>
        <img
          src={require("../images/icon-list.svg").default}
          alt="Correct sign"
        />
        <p>Product discovery and building what matters</p>
      </li>
      <li>
        <img
          src={require("../images/icon-list.svg").default}
          alt="Correct sign"
        />
        <p>Measuring to ensure updates are a success</p>
      </li>
      <li>
        <img
          src={require("../images/icon-list.svg").default}
          alt="Correct sign"
        />
        <p>And much more!</p>
      </li>
    </ul>
  );
};
export default FeaturesList;
