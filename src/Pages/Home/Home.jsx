import Card from "../../components/Card/Card.jsx";

function Home() {
  return (
    <>
      <div className="container mx-auto mb-4 flex flex-col items-center p-4">
        <h2 className="mt-12 text-2xl font-bold sm:text-4xl">
          Tailwind Mini-Projects
        </h2>
        <div className="w-7/8 mt-8 grid grid-cols-1 grid-rows-5 gap-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
          <Card
            to={"/clipboard"}
            title="Clipboard"
            src="/img/assets/Clipboard/thumbnail.png"
          />
          <Card
            to={"/emailcard"}
            title="Email Card"
            src="/img/email-card-thumbnail.png"
          />
          <Card
            to={"/pricingcards"}
            title="Pricing Cards"
            src="/img/pricing-cards-thumbnail.png"
          />
          <Card
            to={"/productmodal"}
            title="Product Modal"
            src="/img/product-modal-thumbnail.png"
          />
          <Card
            to={"/imagegallery"}
            title="Image Gallery"
            src="/img/image-gallery-thumbnail.png"
          />
          <Card
            to={"/loginmodal"}
            title="Login Modal"
            src="/img/login-modal-thumbnail.png"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
