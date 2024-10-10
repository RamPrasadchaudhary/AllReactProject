import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./content";
import logo from './logo.svg';

function Card({ title, text, bgColor }) {
  return (
    <div className='d-flex flex-row justify-content-center flex-wrap  mx-3 my-5'>
      <div className={`card text-center  ${bgColor}`} style={{ width: "20rem" }}>
        <div className="card-body">
        <img src={logo} alt="Logo" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

function CardList() {
  const cardData = [
    { id: 1, title: "Welcome", text: "Thank you for visiting our website", bgColor: "bg-danger" },
    { id: 2, title: "About Us", text: "Learn more about what we do", bgColor: "bg-primary" },
    { id: 3, title: "Contact", text: "Get in touch with us", bgColor: "bg-success" },
  ];

  return (
    <Content>
    <div className="d-flex flex-row justify-content-center flex-wrap mt">
                {cardData.map((card) => (
                <Card key={card.id} title={card.title} text={card.text} bgColor={card.bgColor} />
                ))}
  </div>
    </Content>
  );
}

export default CardList;
