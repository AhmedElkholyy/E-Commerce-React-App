function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "10px 20px" }}>
                <h5 className="text-whtie" >Best Skincare Products</h5>
                <p className="text-white">Discover top-rated products for a glowing skin.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "10px 20px" }}>
                <h5 className="text-white">Product of the Year</h5>
                <p className="text-white">Award-winning picks chosen by experts and users.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://queue-it.com/media/ppcp1twv/product-drop.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "10px 20px" }}>
                <h5 className="text-white">Exclusive Drops</h5>
                <p className="text-white">Get access to the latest and trending products first.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
