import { Feature } from "../../components";
import Features from "../features";
import "./WhatsAppGPT.scss";

const gpt3Features = [
  {
    title: "Chatbots",
    desc: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  },
  {
    title: "Knowledgebase",
    desc: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartmentsb",
  },
  {
    title: "Education",
    desc: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
];
const WhatGPT = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={"What is GPT-3"}  desc='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="">Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {gpt3Features.map((feat, index) => (
          <Feature title={feat.title} desc={feat.desc} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT;
