import React from "react";
import "./table.css";
import Quan from "./Quan/quan";

const Table = () => {
  const data = [
    [
      <Quan
        question="What type of photography do you specialize in?"
        answer="I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
      />,
      <Quan
        question="How can I book a photography session with you?"
        answer="Contact me"
      />,
    ],
    [
      <Quan
        question="What equipment do you use for your photography?"
        answer="The most modern!"
      />,
      <Quan
        question="Can I request a specific location for a "
        answer="Even at the North Pole!"
      />,
    ],
    [
      <Quan
        question="What is your editing process like?"
        answer="Creative work"
      />,
      <Quan
        question="Are digital files included in your photography packages?"
        answer="Of course!"
      />,
    ],
    [
      <Quan
        question="Do you offer prints of your photographs?"
        answer="Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing."
      />,
      <Quan
        question="How long does it take to receive the edited photos after a session?"
        answer="One week"
      />,
    ],
  ];

  return (
    <table className="table">
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
