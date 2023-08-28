import "./Brand.scss";
import { google, shopify, atlassian, dropBox, slack } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropBox} alt="dropBox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
