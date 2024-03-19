import ModuleList from "../Modules/List";
import Status from "../Status";

function Home() {
  return (
    <div className="d-flex">
      <ModuleList />
      <div className="d-none d-xl-block mx-auto">
        <Status />
      </div>
    </div>
  );
}
export default Home;
