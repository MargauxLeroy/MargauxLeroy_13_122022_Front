import Feature, { FeatureProps } from "../components/feature/feature";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// import IconChat from "assets/icons/icon-chat.png";

function Index() {
  return (
    <>
      <Header isLoggued={false}></Header>
      <main className="main page-index">
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featureItems.map((e, index) => (
            <Feature
              key={index}
              // icon={e.icon}
              icon="./../assets/icons/icon-chat.png"
              title={e.title}
              description={e.description}
            ></Feature>
          ))}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Index;

const featureItems: FeatureProps[] = [
  {
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    icon: "../assets/icons/icon-chat.png",
    // icon: IconChat,
  },
  {
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be! ",
    icon: "../assets/icons/icon-security.png",
    // icon: IconChat,
  },
  {
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
    icon: "../assets/icons/icon-money.png",
    // icon: IconChat,
  },
];
