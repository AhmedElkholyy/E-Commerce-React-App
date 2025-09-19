function About(){
    return(
    <>
 <div style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}>
     
      <section
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          height: "60vh",
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90') center/cover no-repeat",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Discover who we are and what makes us different.</p>
        </div>
      </section>

      
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow h-100 border-0">
              <div className="card-body">
                <h2 className="h4 fw-bold text-primary mb-3">Our Mission</h2>
                <p className="text-muted">
                  Our mission is to provide customers with high-quality products
                  at affordable prices, while delivering an effortless and secure
                  shopping experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow h-100 border-0">
              <div className="card-body">
                <h2 className="h4 fw-bold text-success mb-3">Our Vision</h2>
                <p className="text-muted">
                  We envision a world where online shopping is not just about
                  buying, but about building trust, convenience, and
                  long-lasting customer relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section
        className="choose-us py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div
                className="feature-box shadow-sm p-4 bg-white h-100 rounded"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <h5 className="text-primary">Quality Products</h5>
                <p className="text-muted small">
                  Carefully selected items that guarantee durability and value.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-box shadow-sm p-4 bg-white h-100 rounded"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <h5 className="text-success">Fast Delivery</h5>
                <p className="text-muted small">
                  Get your orders quickly with our trusted delivery network.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-box shadow-sm p-4 bg-white h-100 rounded"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <h5 className="text-warning">Secure Payments</h5>
                <p className="text-muted small">
                  Safe transactions with multiple payment options.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-box shadow-sm p-4 bg-white h-100 rounded"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <h5 className="text-danger">24/7 Support</h5>
                <p className="text-muted small">
                  Our customer support is always here to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className="closing-section text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Join Our Journey</h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            At <span className="fw-bold">ShopEase</span>, we’re more than just a
            store — we’re a community that values trust, quality, and
            convenience. Thank you for being part of our story.
          </p>
        </div>
      </section>
    </div>
    </>
    )
}

export default About;
