import React from "react";
import ReactDOM from "react-dom";
import "./Style/Individual.css";
import "./Style/PokDetailsCard.css";

function PokDetailsCard({ pokemon, onClose }) {
  const { name, image, stats, weight, height } = pokemon;
  const stat1 = stats[0]?.stat.name || "N/A";
  const stat2 = stats[1]?.stat.name || "N/A";
  const stat3 = stats[2]?.stat.name || "N/A";
  const stat4 = stats[3]?.stat.name || "N/A";
  const stat5 = stats[4]?.stat.name || "N/A";
  const stat6 = stats[5]?.stat.name || "N/A";

  const baseStat1 = stats[0]?.base_stat || "N/A";
  const baseStat2 = stats[1]?.base_stat || "N/A";
  const baseStat3 = stats[2]?.base_stat || "N/A";
  const baseStat4 = stats[3]?.base_stat || "N/A";
  const baseStat5 = stats[4]?.base_stat || "N/A";
  const baseStat6 = stats[5]?.base_stat || "N/A";

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay">
        <div className={`modal  ${pokemon.type}`}>
          <span className={`close  ${pokemon.type}`} onClick={onClose}>
            &times;
          </span>

          <div className="modal-info">
            <div className="image-name">
              <img className="modal-image" src={image} />
              <h3 className="modal-name">{name}</h3>
            </div>
            <div className={`pokemon-data ${pokemon.type}`}>
              <div className="column">
                <strong>Height: {height}</strong>
                <br></br>
                <strong>Weight: {weight}</strong>
              </div>

              <div className="column">
                <span>Stats1:{stat1}</span>
                <br></br>
                <span>Stats2:{stat2}</span>
                <br></br>
                <span>Stats3:{stat3}</span>
                <br></br>
                <span>Stats4:{stat4}</span>
                <br></br>
                <span>Stats5:{stat5}</span>
                <br></br>
                <span>Stats6:{stat6}</span>
              </div>

              <div className="column">
                <span>Bs1:{baseStat1}</span>
                <br></br>
                <span>Bs2:{baseStat2}</span>
                <br></br>
                <span>Bs3:{baseStat3}</span>
                <br></br>
                <span>Bs4:{baseStat4}</span>
                <br></br>
                <span>Bs5:{baseStat5}</span>
                <br></br>
                <span>Bs6:{baseStat6}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".pokdetails")
  );
}
export default PokDetailsCard;
