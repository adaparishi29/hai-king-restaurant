import "./App.css";

function App() {
  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="brand">
  <img
    src="/favicon.png"
    alt="Hai King Restaurant Logo"
    className="restaurant-logo"
  />

  <div className="brand-text">
    <span className="brand-main">HAIKING</span>
    <span className="brand-sub">FAMILY RESTAURANT & GARDEN</span>
  </div>
</div>

        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#experiences">EXPERIENCES</a>
          <a href="#menu">MENU</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a href="#contact" className="nav-button">
          RESERVE A TABLE
        </a>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero-section">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="eyebrow">WELCOME TO HAI KING</p>

            <h1>
              Where Great Food
              <br />
              Meets Great
              <br />
              Moments
            </h1>

            <p className="hero-description">
              Family Restaurant • Garden • Biryani Hall • Events
            </p>

            <div className="hero-buttons">
              <a href="#menu" className="gold-button">
                EXPLORE MENU
              </a>

              <a href="#contact" className="outline-button">
                CONTACT US
              </a>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
          </div>
        </section>


       {/* ================= INTRO / HAI KING EXPERIENCE ================= */}
<section id="about" className="intro-section">
  <div className="section-label">01 — THE HAI KING EXPERIENCE</div>

  <div className="intro-grid">

    {/* LEFT — EXPERIENCE IMAGE */}
    <div className="intro-image">
      <img
        src="/images/experience/hai-king-experience.jpg"
        alt="Hai King Family Restaurant & Garden experience"
      />

      <div className="intro-image-overlay"></div>

      <div className="intro-image-caption">
        <span>HAI KING</span>
        <small>FAMILY RESTAURANT & GARDEN</small>
      </div>
    </div>

    {/* RIGHT — CONTENT */}
    <div className="intro-content">
      <p className="gold-small">A PLACE FOR EVERY OCCASION</p>

      <h2>
        More Than
        <br />
        Just A Restaurant.
      </h2>

      <div className="intro-line"></div>

      <div className="intro-text">
        <p>
          Welcome to Hai King Family Restaurant & Garden — a destination
          created for memorable food, celebrations and unforgettable
          moments.
        </p>

        <p>
          From family dining and delicious biryanis to private gatherings,
          parties and special events, Hai King brings everything together
          under one roof.
        </p>
      </div>

      <a href="#experiences" className="text-link">
        DISCOVER HAI KING <span>→</span>
      </a>
    </div>

  </div>
</section>

      {/* ================= EXPERIENCES ================= */}
<section id="experiences" className="experiences-section">
  <div className="section-heading">
    <p className="gold-small">OUR SPACES</p>

    <h2>Choose Your Experience</h2>

    <p>
      Every space at Hai King is designed for a different kind of memory.
    </p>
  </div>

  <div className="experience-grid">

    {/* FAMILY RESTAURANT */}
    <div
      className="experience-card restaurant-card"
      style={{
        backgroundImage:
          "url('/images/experiences/family-restaurant.jpg')",
      }}
    >
      <div className="card-overlay"></div>

      <div className="card-content">
        <span>01</span>

        <h3>Family Restaurant</h3>

        <p>
          Comfortable dining, great food and a warm family atmosphere.
        </p>

        <a href="#gallery">EXPLORE SPACE →</a>
      </div>
    </div>


    {/* BIRYANI HALL */}
    <div
      className="experience-card biryani-card"
      style={{
        backgroundImage:
          "url('/images/experiences/biryani-hall.jpg')",
      }}
    >
      <div className="card-overlay"></div>

      <div className="card-content">
        <span>02</span>

        <h3>Biryani Hall</h3>

        <p>
          A dedicated space for biryani celebrations and large gatherings.
        </p>

        <a href="#biryani-hall">VIEW HALL →</a>
      </div>
    </div>


    {/* GARDEN & EVENTS */}
    <div
      className="experience-card garden-card"
      style={{
        backgroundImage:
          "url('/images/experiences/garden-events.jpg')",
      }}
    >
      <div className="card-overlay"></div>

      <div className="card-content">
        <span>03</span>

        <h3>Garden &amp; Events</h3>

        <p>
          Celebrate birthdays, functions and special occasions in style.
        </p>

        <a href="#contact">PLAN AN EVENT →</a>
      </div>
    </div>

  </div>
</section>

       {/* ================= MENU INTRO ================= */}
<section id="menu" className="menu-section">

  <div className="menu-intro">
    <p className="gold-small">FROM OUR KITCHEN</p>

    <h2>
      Crafted For
      <br />
      Every Craving.
    </h2>

    <p>
      Explore flavours made for families, friends and every occasion.
    </p>
  </div>

  <div className="menu-categories">

    <a
  href="#biryani-menu"
  className="menu-category biryani-menu-card"
  style={{
    backgroundImage: "url('/images/experiences/biryani.jpg')"
  }}
>
  <div className="menu-card-overlay"></div>

  <div className="menu-card-content">
    <span>01</span>
    <h3>Biryani</h3>
    <p>Fragrant, rich and made for sharing.</p>
  </div>
</a>

   {/* 02 — STARTERS */}
<a href="#starters-menu" className="menu-category starters-menu-card">
  <span>02</span>
  <h3>Starters</h3>
  <p>Perfect bites to begin your experience.</p>
</a>

    {/* 03 — SEA FOODS */}
<a href="#seafoods-menu" className="menu-category seafoods-menu-card">
  <span>03</span>
  <h3>Sea Foods</h3>
  <p>Fresh seafood favourites prepared with bold flavours.</p>
</a>

    {/* 04 — TANDOORI */}
<a href="#tandoori-menu" className="menu-category tandoori-menu-card">
  <span>04</span>
  <h3>Tandoori</h3>
  <p>Smoky, grilled favourites prepared fresh from the tandoor.</p>
</a>

  </div>

</section>
{/* ================= BIRYANI MENU ================= */}
<section id="biryani-menu" className="biryani-menu-section">

  <div className="menu-section-heading">
    <p className="gold-small">HAI KING SIGNATURE</p>

    <h2>
      Biryani
      <br />
      Made To Share.
    </h2>

    <p>
      Rich aromas, authentic flavours and generous portions made for
      memorable gatherings.
    </p>
  </div>

  <div className="biryani-menu-grid">

  <div className="biryani-item">
    <span>01</span>
    <h3>Chicken Family Pack</h3>
    <p>A generous family-sized biryani, perfect for sharing.</p>
  </div>

  <div className="biryani-item">
    <span>02</span>
    <h3>Chicken Jumbo Pack</h3>
    <p>A larger feast for celebrations and bigger gatherings.</p>
  </div>

  <div className="biryani-item">
    <span>03</span>
    <h3>Mutton Family Pack</h3>
    <p>Fragrant mutton biryani prepared for the whole family.</p>
  </div>

  <div className="biryani-item">
    <span>04</span>
    <h3>Mutton Jumbo Pack</h3>
    <p>A rich and generous mutton biryani for special occasions.</p>
  </div>

  <div className="biryani-item">
    <span>05</span>
    <h3>Veg Biryani Family Pack</h3>
    <p>Aromatic vegetable biryani made for sharing.</p>
  </div>

  <div className="biryani-item">
    <span>06</span>
    <h3>Paneer Biryani Family Pack</h3>
    <p>Flavourful paneer biryani with a rich, satisfying taste.</p>
  </div>

</div>

</section>
{/* ================= STARTERS MENU ================= */}
<section id="starters-menu" className="starters-menu-section">

  <div className="menu-section-heading">
    <p className="gold-small">HAI KING FAVOURITES</p>

    <h2>
      Starters
      <br />
      Made To Impress.
    </h2>

    <p>
      Delicious bites prepared with bold flavours, perfect to begin your Hai King experience.
    </p>
  </div>

  <div className="starters-menu-grid">

    {/* VEG STARTERS */}
    <div className="starters-group">
      <p className="gold-small">VEG STARTERS</p>

      <div className="starter-item">
        <span>01</span>
        <h3>Baby Corn Salt &amp; Pepper</h3>
        <p>Crispy baby corn tossed with aromatic seasoning and pepper.</p>
      </div>

      <div className="starter-item">
        <span>02</span>
        <h3>Dragon Paneer</h3>
        <p>Paneer prepared with bold flavours and a delicious spicy finish.</p>
      </div>

      <div className="starter-item">
        <span>03</span>
        <h3>Butan Veg</h3>
        <p>A flavourful vegetarian starter prepared with a delicious blend of spices.</p>
      </div>
    </div>

    {/* CHICKEN STARTERS */}
    <div className="starters-group">
      <p className="gold-small">CHICKEN STARTERS</p>

      <div className="starter-item">
        <span>04</span>
        <h3>Kaju Chicken Dry</h3>
        <p>Tender chicken prepared with rich flavours and crunchy cashews.</p>
      </div>

      <div className="starter-item">
        <span>05</span>
        <h3>Chi 777</h3>
        <p>A signature-style chicken starter with bold and exciting flavours.</p>
      </div>

      <div className="starter-item">
        <span>06</span>
        <h3>Chicken Popcorn</h3>
        <p>Crispy bite-sized chicken pieces, perfect for sharing.</p>
      </div>
    </div>

  </div>

</section>
{/* ================= SEA FOODS MENU ================= */}
<section id="seafoods-menu" className="seafoods-menu-section">

  <div className="menu-section-heading">
    <p className="gold-small">HAI KING SEAFOOD</p>

    <h2>
      Sea Foods
      <br />
      From The Coast.
    </h2>

    <p>
      Fresh seafood favourites prepared with bold flavours and Hai King style.
    </p>
  </div>

  <div className="seafoods-menu-grid">

    {/* SEAFOOD */}
    <div className="seafoods-group">

      <div className="seafood-item">
        <span>01</span>
        <h3>Tawa Fried Fish</h3>
        <p>Fresh fish cooked on the tawa with aromatic spices and rich flavours.</p>
      </div>

      <div className="seafood-item">
        <span>02</span>
        <h3>Finger Fish</h3>
        <p>Crispy golden fish fingers, perfect for sharing.</p>
      </div>

      <div className="seafood-item">
        <span>03</span>
        <h3>Loose Fried Prawns</h3>
        <p>Crispy prawns prepared with bold seasoning and delicious spices.</p>
      </div>

      <div className="seafood-item">
        <span>04</span>
        <h3>Telangana Fry Prawns</h3>
        <p>Spicy Telangana-style prawns packed with authentic local flavours.</p>
      </div>

    </div>

  </div>

</section>
{/* ================= TANDOORI MENU ================= */}
<section id="tandoori-menu" className="tandoori-menu-section">

  <div className="menu-section-heading">
    <p className="gold-small">FROM THE TANDOOR</p>

    <h2>
      Tandoori
      <br />
      Fired To Perfection.
    </h2>

    <p>
      Smoky, grilled favourites prepared fresh with bold spices and authentic tandoor flavours.
    </p>
  </div>

  <div className="tandoori-menu-grid">

    <div className="tandoori-group">

      <div className="tandoori-item">
        <span>01</span>
        <h3>Chilly Chicken Kabab</h3>
        <p>Juicy chicken kabab prepared with aromatic spices and a delicious chilli finish.</p>
      </div>

      <div className="tandoori-item">
        <span>02</span>
        <h3>Resheme Kabab</h3>
        <p>Tender, flavourful kabab prepared with a rich and aromatic marinade.</p>
      </div>

      <div className="tandoori-item">
        <span>03</span>
        <h3>Grilled Chicken</h3>
        <p>Freshly grilled chicken with smoky char and rich tandoori flavours.</p>
      </div>

    </div>

  </div>

</section>

        {/* ================= BIRYANI HALL ================= */}
        <section id="biryani-hall" className="biryani-hall-section">

          <div className="hall-content">
            <p className="gold-small">A SPACE FOR CELEBRATIONS</p>

            <h2>
              The
              <br />
              Biryani Hall
            </h2>

            <p>
              Planning a gathering? Our dedicated Biryani Hall is designed
              specifically for groups, celebrations and memorable occasions.
            </p>

            <a href="#contact" className="gold-button">
              ENQUIRE NOW
            </a>
          </div>

          <div className="hall-image"></div>

        </section>


        {/* ================= OUTDOOR COMBOS ================= */}
        <section className="combos-section">

          <div className="section-heading">
            <p className="gold-small">GROUP DINING</p>

            <h2>Outdoor Combos</h2>

            <p>
              Special biryani packages created for groups and celebrations.
            </p>
          </div>

          <div className="combo-grid">

            <div className="combo-card">
              <span>FOR 30 MEMBERS</span>
              <h3>Dum Chicken Biryani</h3>
              <strong>₹4,000</strong>
              <p>Perfect for group celebrations.</p>
            </div>

            <div className="combo-card featured">
              <span>FOR 50 MEMBERS</span>
              <h3>Dum Chicken Biryani</h3>
              <strong>₹7,000</strong>
              <p>Made for bigger gatherings.</p>
            </div>

            <div className="combo-card">
              <span>FOR 30 MEMBERS</span>
              <h3>Dum Mutton Biryani</h3>
              <strong>₹5,500</strong>
              <p>A rich feast for your group.</p>
            </div>

            <div className="combo-card">
              <span>FOR 50 MEMBERS</span>
              <h3>Dum Mutton Biryani</h3>
              <strong>₹9,500</strong>
              <p>Our large-group celebration option.</p>
            </div>

          </div>

          <p className="combo-note">
            * Group packages are subject to availability. Please contact us
            for bookings and details.
          </p>

        </section>


        {/* ================= FAMILY DINING ================= */}
        <section className="family-section">

          <div className="family-image"></div>

          <div className="family-content">
            <p className="gold-small">FAMILY DINING</p>

            <h2>
              Gather.
              <br />
              Dine.
              <br />
              Celebrate.
            </h2>

            <p>
              From intimate family dinners to larger celebrations, our dining
              spaces are designed to bring people together.
            </p>

            <a href="#contact" className="text-link">
              PLAN YOUR VISIT →
            </a>
          </div>

        </section>


        {/* ================= GALLERY ================= */}
        <section id="gallery" className="gallery-section">

          <div className="section-heading">
            <p className="gold-small">INSIDE HAI KING</p>
            <h2>A Glimpse Into The Experience</h2>
          </div>

          <div className="gallery-grid">

            <div className="gallery-item gallery-one"></div>

            <div className="gallery-item gallery-two"></div>

            <div className="gallery-item gallery-three"></div>

            <div className="gallery-item gallery-four"></div>

          </div>

        </section>


        {/* ================= WHY HAI KING ================= */}
        <section className="why-section">

          <div className="section-heading">
            <p className="gold-small">WHY HAI KING</p>
            <h2>Made For Moments That Matter.</h2>
          </div>

          <div className="why-grid">

            <div>
              <span>01</span>
              <h3>Family Friendly</h3>
              <p>
                Comfortable spaces designed for families and groups.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Multiple Experiences</h3>
              <p>
                Restaurant, Biryani Hall, Garden and event spaces.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Celebration Ready</h3>
              <p>
                Perfect for birthdays, parties and special occasions.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Made With Care</h3>
              <p>
                Delicious food prepared to make every visit memorable.
              </p>
            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">

          <div className="contact-content">

            <p className="gold-small">COME VISIT US</p>

            <h2>
              Your Table
              <br />
              Is Waiting.
            </h2>

            <div className="contact-details">

              <div>
                <span>ADDRESS</span>
                <p>
                  SH1, Sai Leela Residency,
                  <br />
                  Srinagar Colony,
                  <br />
                  Godavarikhani, Ramagundam,
                  <br />
                  Telangana — 505209
                </p>
              </div>

              <div>
                <span>CALL US</span>
                <p>
                  <a href="tel:08341379317">08341379317</a>
                  <br />
                  <a href="tel:9000344024">9000344024</a>
                </p>
              </div>

              <div>
                <span>OPENING HOURS</span>
                <p>
                  Sunday — Saturday
                  <br />
                  11:30 AM — 10:00 PM
                </p>
              </div>

            </div>

            <div className="contact-buttons">

              <a
                href="tel:08341379317"
                className="gold-button"
              >
                CALL NOW
              </a>

              <a
                href="https://www.instagram.com/p/DLUefNhTomx/?stkn=ZW0zNmV0bnEzNmo4"
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                INSTAGRAM
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-brand">
          <h2>HAI KING</h2>
          <p>FAMILY RESTAURANT & GARDEN</p>
        </div>

        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Hai King Family Restaurant & Garden</p>
          <p>Ramagundam, Telangana</p>
        </div>

      </footer>

    </div>
  );
}

export default App;
{/* ================= MENU SECTION ================= */}
<section id="menu" className="menu-section">

  <div className="section-heading">
    <span>02 — THE HAI KING MENU</span>
    <h2>Flavours Worth<br />Coming Back For.</h2>
    <p>
      From aromatic biryanis to sizzling starters and authentic Indian
      favourites, discover the flavours of Hai King.
    </p>
  </div>

  <div className="menu-grid">

    <div className="menu-card featured">
      <div className="menu-card-content">
        <span>OUR SPECIALITY</span>
        <h3>Biryani</h3>
        <p>
          Fragrant, flavourful and freshly prepared for unforgettable
          family meals.
        </p>
        <button>VIEW BIRYANI →</button>
      </div>
    </div>

    <div className="menu-card">
      <div className="menu-card-content">
        <span>FROM THE KITCHEN</span>
        <h3>Starters</h3>
        <p>
          Crispy, spicy and perfectly crafted starters for every table.
        </p>
        <button>EXPLORE →</button>
      </div>
    </div>

    <div className="menu-card">
      <div className="menu-card-content">
        <span>AUTHENTIC FLAVOURS</span>
        <h3>Curries</h3>
        <p>
          Rich Indian gravies prepared with carefully selected spices.
        </p>
        <button>EXPLORE →</button>
      </div>
    </div>

    <div className="menu-card">
      <div className="menu-card-content">
        <span>WOK & FIRE</span>
        <h3>Chinese</h3>
        <p>
          Sizzling favourites prepared fresh for your table.
        </p>
        <button>EXPLORE →</button>
      </div>
    </div>

    <div className="menu-card">
      <div className="menu-card-content">
        <span>SLOW COOKED</span>
        <h3>Mandi</h3>
        <p>
          A rich dining experience made for sharing with family and friends.
        </p>
        <button>EXPLORE →</button>
      </div>
    </div>

    <div className="menu-card">
      <div className="menu-card-content">
        <span>PERFECT WITH EVERY MEAL</span>
        <h3>Indian Breads</h3>
        <p>
          Freshly prepared rotis and breads to complete your meal.
        </p>
        <button>EXPLORE →</button>
      </div>
    </div>

  </div>

</section>
{/* ================= SPECIAL COMBOS ================= */}

<section id="combos" className="combos-section">

  <div className="combos-intro">
    <span>03 — SPECIAL COMBOS</span>

    <h2>
      Made For
      <br />
      <em>Celebrations.</em>
    </h2>

    <p>
      Planning a family gathering, celebration or special occasion?
      Our group biryani combos are designed to bring everyone together
      around one unforgettable meal.
    </p>
  </div>

  <div className="combo-list">

    {/* CHICKEN 30 */}
    <div className="combo-item">
      <div className="combo-number">01</div>

      <div className="combo-info">
        <span>GROUP COMBO</span>
        <h3>Chicken Biryani</h3>
        <p>Perfect for a gathering of 30 members.</p>
      </div>

      <div className="combo-price">
        <small>FOR 30 MEMBERS</small>
        <strong>₹4,000</strong>
      </div>
    </div>

    {/* CHICKEN 50 */}
    <div className="combo-item">
      <div className="combo-number">02</div>

      <div className="combo-info">
        <span>GROUP COMBO</span>
        <h3>Chicken Biryani</h3>
        <p>Designed for larger gatherings of 50 members.</p>
      </div>

      <div className="combo-price">
        <small>FOR 50 MEMBERS</small>
        <strong>₹7,000</strong>
      </div>
    </div>

    {/* MUTTON 30 */}
    <div className="combo-item">
      <div className="combo-number">03</div>

      <div className="combo-info">
        <span>SPECIAL COMBO</span>
        <h3>Mutton Biryani</h3>
        <p>A rich biryani experience for a gathering of 30 members.</p>
      </div>

      <div className="combo-price">
        <small>FOR 30 MEMBERS</small>
        <strong>₹5,500</strong>
      </div>
    </div>

    {/* MUTTON 50 */}
    <div className="combo-item">
      <div className="combo-number">04</div>

      <div className="combo-info">
        <span>SPECIAL COMBO</span>
        <h3>Mutton Biryani</h3>
        <p>Made for bigger celebrations and gatherings.</p>
      </div>

      <div className="combo-price">
        <small>FOR 50 MEMBERS</small>
        <strong>₹9,500</strong>
      </div>
    </div>

  </div>

  <div className="combo-note">
    <span>✦</span>
    <p>
      Advance booking recommended for large gatherings.
      Please contact Hai King for availability and details.
    </p>
  </div>

</section>
{/* ================= BIRYANI HALL ================= */}

<section id="biryani-hall" className="biryani-hall">

  <div className="hall-image">
    <div className="hall-image-overlay"></div>

    <div className="hall-image-text">
      <span>HAI KING</span>
      <strong>BIRYANI HALL</strong>
    </div>
  </div>

  <div className="hall-content">

    <span className="hall-label">
      04 — A SPACE FOR CELEBRATIONS
    </span>

    <h2>
      Your
      <br />
      Celebration.
      <br />
      <em>Our Space.</em>
    </h2>

    <p>
      Looking for a dedicated space for your next celebration?
      The Hai King Biryani Hall is designed for families, groups,
      parties and special occasions.
    </p>

    <p>
      Bring your favourite people together and enjoy a memorable
      dining experience surrounded by the flavours of Hai King.
    </p>

    <div className="hall-features">

      <div>
        <span>01</span>
        <p>Family Gatherings</p>
      </div>

      <div>
        <span>02</span>
        <p>Birthday Celebrations</p>
      </div>

      <div>
        <span>03</span>
        <p>Group Dining</p>
      </div>

      <div>
        <span>04</span>
        <p>Special Events</p>
      </div>

    </div>

    <a href="#contact" className="hall-button">
      ENQUIRE FOR YOUR EVENT
      <span>→</span>
    </a>

  </div>

</section>