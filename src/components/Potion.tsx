interface PotionProps {
  title: string;
  onAddToInventoria: (name: string) => void;
}

export const Potion = ({ title, onAddToInventoria }: PotionProps) => {
  return (
    <>
      <li title={title} className="potion-item">{title}</li>
      <div className="card-actions">
        <button className="btn-add" onClick={() => onAddToInventoria(title)}>
          Ajouter à Inventoria
        </button>
      </div>
    </>
  );
};
