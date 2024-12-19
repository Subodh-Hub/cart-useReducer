import ListItem from "./ListItem";
import dummyData from "../data/data";
import Footer from "./Footer";

function List() {
  return (
    <>
      <section>
        <h2>Your Bag</h2>
        <ListItem data={dummyData} />
        <Footer />
      </section>
    </>
  );
}
export default List;
