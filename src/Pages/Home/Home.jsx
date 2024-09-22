import Card from "../../components/Card/Card.jsx";

function Home() {
  return (
    <>
      <div className="container mx-auto mb-4 flex flex-col items-center p-4">
        <h2 className="mt-12 text-2xl font-bold text-white sm:text-4xl">
          Tailwind Mini-Projects
        </h2>
        <div className="w-7/8 mt-8 grid grid-cols-1 grid-rows-5 gap-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
          <Card
            to={"/bookmark"}
            title="BookMark"
            src="/img/assets/Bookmark/thumbnail.png"
            mode={"Landing Page"}
          />
          <Card
            to={"/fylo"}
            title="Fylo"
            src="/img/assets/Fylo/thumbnail.png"
            mode={"Landing Page"}
          />
          <Card
            to={"/shortly"}
            title="Shortly"
            src="/img/assets/Shortly/thumbnail.png"
            mode={"Landing Page"}
          />
          <Card
            to={"/loopstudio"}
            title="Loopstudio"
            src="/img/assets/Loopstudio/thumbnail.png"
            mode={"Landing Page"}
          />
          <Card
            to={"/clipboard"}
            title="Clipboard"
            src="/img/assets/Clipboard/thumbnail.png"
            mode={"Landing Page"}
          />{" "}
          <Card
            to={"/testimonial-grid"}
            title="Testimonial Grid"
            src="/img/assets/Testimonial-grid/thumbnail.png"
            mode={"Landing Page"}
          />
          <Card
            to={"/emailcard"}
            title="Email Card"
            src="/img/email-card-thumbnail.png"
            mode={"Component"}
          />
          <Card
            to={"/pricingcards"}
            title="Pricing Cards"
            src="/img/pricing-cards-thumbnail.png"
            mode={"Component"}
          />
          <Card
            to={"/productmodal"}
            title="Product Modal"
            src="/img/product-modal-thumbnail.png"
            mode={"Component"}
          />
          <Card
            to={"/imagegallery"}
            title="Image Gallery"
            src="/img/image-gallery-thumbnail.png"
            mode={"Component"}
          />
          <Card
            to={"/loginmodal"}
            title="Login Modal"
            src="/img/login-modal-thumbnail.png"
            mode={"Component"}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
