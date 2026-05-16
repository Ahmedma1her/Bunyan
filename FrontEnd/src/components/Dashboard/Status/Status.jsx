import CardStatus from "../../ui/CardStatus/CardStatus";
function Status() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 ">
            <CardStatus counter="120" title="projects" solid="building" />
          </div>
          <div className="col-12 col-md-3 ">
            <CardStatus counter="150" title="users" solid="users" />
          </div>
          <div className="col-12 col-md-3 ">
            <CardStatus counter="200" title="developers" solid="dev" />
          </div>
          <div className="col-12 col-md-3 ">
            <CardStatus counter="50" title="blogs" solid="note-sticky" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Status;
