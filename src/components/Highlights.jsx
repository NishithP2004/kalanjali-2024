import "./Highlights.css";

function Highlights() {
  return (
    <div className="section">
      <div className="box-container">
        <div className="box glass">
          <img
            className="box-image"
            src="https://cdn.shopify.com/s/files/1/0331/6806/4645/files/collectionbannerDancendMusic-01.jpg?v=1671017747"
            alt="Image 1"
            style={{
              objectPosition: "left",
            }}
          />
          <div className="box-content">
            <h2>MAD Evening</h2>
            <p>📅18th April</p>
            <p>⏰5:30PM to 7:30PM</p>
            <p>📍Main Stage</p>
          </div>
        </div>
        <div className="box glass">
          <img
            className="box-image"
            src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/112127-bkyvzivrps-1549182257.jpg"
            alt="Image 2"
          />
          <div className="box-content">
            <h2>Movie Screening</h2>
            <p>📅19th April</p>
            <p>⏰6:00PM to 7:30PM</p>
            <p>📍Main Stage</p>
          </div>
        </div>
        <div className="box glass">
          <img
            className="box-image"
            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/DJ-business1--1-.jpg"
            alt="Image 3"
          />
          <div className="box-content">
            <h2>Musical Evening</h2>
            <p>📅20th April</p>
            <p>⏰6:00PM to 7:45PM</p>
            <p>📍Main Stage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
