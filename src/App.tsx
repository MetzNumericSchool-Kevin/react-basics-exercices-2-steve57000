import "./App.css";
import data from "./data/potion"
import { Section } from "./components/Section.tsx";
import { BienvenueAventurier } from "./components/BienvenueAventurier.tsx";
import {useState} from "react";
import {Inventoria} from "./components/Inventoria.tsx";
import {PotionShop} from "./components/PotionShop.tsx";
import {Potion} from "./components/Potion.tsx";

function App() {
  const [ isOpen , setOpen ] = useState(false);
  const [ listInvotoria , setListInvotoria  ] = useState([]);

  const [potion, setPotion ] = useState(data);
  const toggle = () => setOpen(!isOpen);

  const txtInventoriaOpen = isOpen ? "Fermer Inventoria" : "Ouvrir Inventoria";

  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Section id="exercice1" className="bg-primary">
        <h1>Boutique d'Archibald le Sorcier (bis repetita) 🧙‍♂️</h1>
        <BienvenueAventurier>
          <p>
            Bienvenue Aventurier, ici vous pouvez acheter diverses potions
            magiques pour vos aventures !
          </p>
        </BienvenueAventurier>
      </Section>

      <Section id="exercice2">
        <h2>Inventoria</h2>

        <button className="btn btn-primary" onClick={toggle}>
          {txtInventoriaOpen}
        </button>

        <div className="row mt-5 ">
          <Inventoria list={listInvotoria} isOpen={isOpen} />
        </div>
      </Section>

      <Section id="exercice3" >
        <PotionShop title="Boutique de potion">
          <Potion list={potion} />
        </PotionShop>

      </Section>

      <Section id="exercice4" >
        <h2 className="mb-5">Ajout de potions</h2>

        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Nom de la potion</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" type="submit">
                Ajouter à la boutique
              </button>
            </div>
          </div>
        </form>
      </Section>
    </div>
  );
}

export default App;
