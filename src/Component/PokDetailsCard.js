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
              <img className="modal-image" src={image} alt="modelimage" />
              <h3 className="modal-name">{name}</h3>
            </div>
            <div className={`pokemon-data ${pokemon.type}`}>
              <div className="column">
                <strong>Height: {height}</strong>
                <br></br>
                <strong>Weight: {weight}</strong>
              </div>

              <div className="column">
                <div className="row">
                  <span>
                    <b>Stats1:</b>
                  </span>
                  <span>{stat1}</span>
                  <br></br>
                </div>

                <div className="row">
                  <span>
                    <b>Stats2:</b>
                  </span>
                  <span>{stat2}</span>
                  <br></br>
                </div>

                <div className="row">
                  <span>
                    <b>Stats3:</b>
                  </span>
                  <span>{stat3}</span>
                  <br></br>
                </div>

                <div className="row">
                  <span>
                    <b>Stats4:</b>
                  </span>
                  <span className="text">{stat4}</span>
                  <br></br>
                </div>

                <div className="row">
                  <span>
                    <b>Stats5:</b>
                  </span>
                  <span className="text">{stat5}</span>
                  <br></br>
                </div>

                <div className="row">
                  <span>
                    <b>Stats6:</b>
                  </span>
                  <span>{stat6}</span>
                  <br></br>
                </div>
              </div>

              <div className="column">
                <div className="row1">
                  <span>
                    <b>Bs1:</b>
                  </span>
                  <span>{baseStat1}</span>
                  <br></br>
                  <span>
                    <b>Bs2:</b>
                  </span>
                  <span>{baseStat2}</span>
                  <br></br>
                  <span>
                    <b>Bs3:</b>
                  </span>
                  <span>{baseStat3}</span>
                  <br></br>
                  <span>
                    <b>Bs4:</b>
                  </span>
                  <span>{baseStat4}</span>
                  <br></br>
                  <span>
                    <b>Bs5:</b>
                  </span>
                  <span>{baseStat5}</span>
                  <br></br>
                  <span>
                    <b>Bs6:</b>
                  </span>
                  <span>{baseStat6}</span>
                  <br></br>
                </div>
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
