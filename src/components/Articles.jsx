import React from "react";
import "../components/Articles.css";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <main className="main__article" id="blog">
      <section className="Article__container container">
        <h2 className="secondary__heading align__c">Latest Articles</h2>
        <div className="articles">
          <div className="article--1">
            <div className="image__box">
              <img src={currency} alt="currency" className="article__img" />
            </div>
            <div className="article__info">
              <span className="sm__text"> By Claire Robinson</span>
              <h4 className="quaternary__heading">
                {" "}
                Receive money in any currency with no fees
              </h4>
              <p className="text">
                {" "}
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="article--2">
            <div className="image__box">
              <img src={restaurant} alt="restaurant" className="article__img" />
            </div>
            <div className="article__info">
              <span className="sm__text"> By Wilson Hutton</span>
              <h4 className="quaternary__heading">
                {" "}
                Treat yourself without worrying about money
              </h4>
              <p className="text">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="article--3">
            <div className="image__box">
              <img src={plane} alt="plane" className="article__img" />
            </div>
            <div className="article__info">
              <span className="sm__text">By Wilson Hutton</span>
              <h4 className="quaternary__heading">
                {" "}
                Take your Easybank card wherever you go
              </h4>
              <p className="text">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>

          <div className="article--4">
            <div className="image__box">
              <img src={confetti} alt="confetti" className="article__img" />
            </div>
            <div className="article__info">
              <span className="sm__text"> By Claire Robinson</span>
              <h4 className="quaternary__heading">
                {" "}
                Our invite-only Beta accounts are now live!
              </h4>
              <p className="text">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Articles;
