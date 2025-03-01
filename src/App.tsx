import * as React from "react";
import {useState} from "react";
import "./App.css";

import data from "./data/potion"
import { Section } from "./components/Section.tsx";
import { BienvenueAventurier } from "./components/BienvenueAventurier.tsx";
import {Inventoria} from "./components/Inventoria.tsx";
import {PotionShop} from "./components/PotionShop.tsx";
import {Potion} from "./components/Potion.tsx";
import {NewPotionForm} from "./components/NewPotionForm.tsx";

function App() {
  const [ isOpen , setOpen ] = useState(false);
  const [ listInvotoria , setListInvotoria  ] = useState([]);

  const [potionList, setPotionList] = useState<string[]>(data); // Initialiser la liste des potions

  // Fonction pour ajouter une potion à la liste
  const addPotion = (newPotion: string) => {
    if (newPotion.trim()) {
      setPotionList([...potionList, newPotion]); // Ajoute la nouvelle potion à la liste
    }
  };
  const addToInventoria = (potionName: string) => {
    setListInvotoria([...listInvotoria, potionName]);
  };

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
          <ul>
            {potionList.map((item, index) => (
              <Potion key={index} title={item} onAddToInventoria={addToInventoria} />
            ))}
          </ul>
        </PotionShop>
      </Section>

      <Section id="exercice5">
        <h2 className="mb-5">Ajout de potions</h2>
        <NewPotionForm onAdd={addPotion} /> {/* Passer la fonction addPotion au formulaire */}
      </Section>
    </div>
  );
}

export default App;
