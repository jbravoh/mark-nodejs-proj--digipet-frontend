import { Digipet } from "../App";

interface Props {
  digipet?: Digipet;
}

function DigipetData({ digipet }: Props) {
  if (digipet) {
    const digipetEntries = Object.entries(digipet);
    const digipetStats = digipetEntries.map(([key, val]) => (
      <li key={key} className="stat-list-item">
        {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
        <span className="value">{val}</span>
      </li>
    ));

    return (
      <div className="digipet-data-container">
        <h2 className="stat-title">Your digipet</h2>
        <ul className="stat-list">{digipetStats}</ul>
      </div>
    );
  } else {
    return <p>No digipet to see 😢</p>;
  }
}

export default DigipetData;
