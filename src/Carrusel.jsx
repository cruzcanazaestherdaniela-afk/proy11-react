function Carrusel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="/mundial1.jpg"
            className="d-block w-100"
            alt="Mundial 1"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/mundial2.jpg"
            className="d-block w-100"
            alt="Mundial 2"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/mundial3.jpg"
            className="d-block w-100"
            alt="Mundial 3"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/mundial4.avif"
            className="d-block w-100"
            alt="Mundial 4"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="/mundial5.jpg"
            className="d-block w-100"
            alt="Mundial 5"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Previous
        </span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">
          Next
        </span>
      </button>

    </div>
  );
}

export default Carrusel;