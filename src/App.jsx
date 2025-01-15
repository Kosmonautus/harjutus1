import { useState } from "react";
import "./App.css";
import Haldjatants from "./Pildid/Haldjatants.jpg";
import Kuidas_ära_tunda_vale_info from "./Pildid/Kuidas ära tunda vale info.jpg";
import Saa_endaga_sõbraks from "./Pildid/Saa endaga sõbraks.jpg";

function App() {
  const Raamatud = [
    {
      id: 1,
      Nimi: "Haldjatants",
      Autor: "Katrin Reimus",
      Väljaandmise_aasta: "09.01.2025",
      Kirjeldus:
        "Realistliku noortejutustuse „Haldjatants” minategelane on 15-aastane Kristiina, kes peab olude sunnil olema täiskasvanu – tema isa on pere juurest ära, emal on küljes viinaviga ning väike õde vajab hoolitsust ja tähelepanu.",
      Raamatu_pilt: Haldjatants,
    },
    {
      id: 2,
      Nimi: "Kuidas ära tunda vale info",
      Autor: "Nereida Carrillo",
      Väljaandmise_aasta: "12.12.2024",
      Kirjeldus:
        "See teaduspõhine käsiraamat õpetab infot kontrollima ja pettusi tuvastama ning on kasulik materjal nii teismelistele kui nende vanamatele.",
      Raamatu_pilt: Kuidas_ära_tunda_vale_info,
    },
    {
      id: 3,
      Nimi: "Saa endaga sõbraks",
      Autor: "Kätlin Vainola, Merit Lage",
      Väljaandmise_aasta: "25.11.2024",
      Kirjeldus:
        "Saa endaga sõbraks“ on uus ja praktiline tegelusraamat, mis aitab noortel end paremini tundma õppida, tehes loovharjutusi ja teste ning järgides nõuandeid. Raamatu autorid Merit Lage ja Kätlin Vainola pakuvad kaasahaaravaid tegevusi, mis julgustavad lapsi ja noori avastama oma tugevusi, väärtusi ja isiksuseomadusi. Illustratsioonid ja mängulised testid loovad sõbraliku õhkkonna, kus enesearengu teekond muutub lõbusaks ja inspireerivaks.",
      Raamatu_pilt: Saa_endaga_sõbraks,
    },
  ];
  const [currentId, setCurrentId] = useState(1);
  const filteredRaamat = Raamatud.find((item) => item.id === currentId);
  const nextClick = () => {
    setCurrentId((currentId) => (currentId < 3 ? currentId + 1 : 3));
  };
  const PreviousClick = () => {
    setCurrentId((currentId) => (currentId > 1 ? currentId - 1 : 1));
  };
  return (
    <div>
      <h1>Raamatud</h1>
      <div className="row">
        <div className="column1">
          <ul>
            <li>Autor: {filteredRaamat.Autor}</li>
          </ul>
          <ul>
            <li>Väljaandmise aasta: {filteredRaamat.Väljaandmise_aasta}</li>
          </ul>
          <ul>
            <li>Kirjeldus: {filteredRaamat.Kirjeldus}</li>
          </ul>
        </div>
        <div className="column2">
          <div className="column2_content">
            <img className="Picture" src={filteredRaamat.Raamatu_pilt} alt="" />

            <p key={filteredRaamat.id}>{filteredRaamat.Nimi}</p>
          </div>
        </div>
      </div>
      <button
        className="Button"
        onClick={PreviousClick}
        disabled={currentId === 1}
      >
        Previous
      </button>
      <button className="Button" onClick={nextClick} disabled={currentId === 3}>
        Next
      </button>
    </div>
  );
}

export default App;
