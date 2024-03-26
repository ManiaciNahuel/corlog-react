import React from "react";

export const Home = () => {
  return (
    <section className="home-hero" id="home">
      {/*  <!-- HELLO SECTION --> */}
      <div className="home-hero__content">
        <h1 className="heading-primary">Bienvenido a your logo!</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            Pagina web sobre Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat eum blanditiis, beatae omnis quis alias voluptatibus aut nam perferendis ipsam veritatis facere vero est error numquam ducimus mollitia. Accusamus.
            
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#section" className="btn btn--bg">
            Section
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
       
       


      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
};
