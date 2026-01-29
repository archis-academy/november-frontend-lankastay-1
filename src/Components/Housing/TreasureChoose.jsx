import "./TreasureChoose.scss";

const treasures = [
  {
    id: 1,
    title: "Green Lake",
    category: "Nature",
    image: "/images/green-lake.png",
  },
  {
    id: 2,
    title: "Dog Clubs",
    category: "Pool",
    image: "/images/dog-club.png",
  },
];

const TreasureChoose = () => {
  return (
    <section className="treasure">
      <h2 className="treasure__title">Treasure to Choose</h2>

      <div className="treasure__list">
        {treasures.map((item) => (
          <div className="treasure__card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="treasure__info">
              <h3>{item.title}</h3>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreasureChoose;
