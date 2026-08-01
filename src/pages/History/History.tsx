import { SellHisotyForm } from "../../components/SellHistoryForm/SellHisotyForm";
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import { styles } from "../../helper/style";

export const History = () => {
  return (
    <>
      <h1 className={styles.titulos}>Historial</h1>
      <SellHisotyForm />
      <section className="flex flex-col gap-5">
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
      </section>
    </>
  );
};
