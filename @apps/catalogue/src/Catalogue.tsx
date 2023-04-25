import css from "./Catalogue.module.scss";

interface Props {
  nImages: number;
}

const Catalogue = ({ nImages = 30 }: Props) => {
  return (
    <div
      className={`${css.imageGrid} ${
        import.meta.env.VITE_MFE_DEBUG && css.imageGrid_mfe
      }`}
    >
      {[...new Array(nImages)].map((_, i) => (
        <div key={i} className={css.imageItem}>
          <img src={`https://loremflickr.com/400/400/plant?lock=${i}`} />
          <div className={css.imageTitle}>{`Plant ${i}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
