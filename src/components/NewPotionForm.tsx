import * as React from "react";

interface NewPotionFormProps {
  onAdd: (name: string) => void; // Fonction qui sera appelée pour ajouter une potion
}

export const NewPotionForm = ({ onAdd }: NewPotionFormProps) => {
  const [newPotion, setNewPotion] = React.useState(""); // État pour le nom de la nouvelle potion

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (newPotion.trim()) {
      onAdd(newPotion); // Appeler la fonction onAdd pour ajouter la potion
      setNewPotion(""); // Réinitialiser le champ de texte
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <label htmlFor="newPotionName">Nom de la potion</label>
          <input
            type="text"
            className="form-control"
            id="newPotionName"
            value={newPotion}
            onChange={(e) => setNewPotion(e.target.value)} // Mettre à jour l'état de la potion
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary mt-3" type="submit">
            Ajouter à la boutique
          </button>
        </div>
      </div>
    </form>
  );
};
