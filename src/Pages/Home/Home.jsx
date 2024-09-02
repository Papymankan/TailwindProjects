import Card from "../../components/Card/Card.jsx";

function Home() {
  return (
    <>
      <div className="container mx-auto mb-4 flex flex-col items-center p-4">
        <h2 className="mt-10 text-2xl font-bold sm:text-4xl">
          Tailwind Mini-Projects
        </h2>
        <div className="w-7/8 mt-12 flex flex-wrap justify-evenly lg:w-5/6">
          <Card to={'/emailcard'} title='Email Card' src='/img/email-card-thumbnail.png'/>
          <Card to={'/pricingcards'} title='Pricing Cards' src='/img/pricing-cards-thumbnail.png'/>
          <Card to={'/productmodal'} title='Product Modal' src='/img/product-modal-thumbnail.png'/>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
