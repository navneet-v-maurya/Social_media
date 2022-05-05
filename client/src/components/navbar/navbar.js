import memories from "../../images/memories.jpg";

const Navbar = () => {
  return (
    <div className="m-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={memories} height="28" alt="CoolBrand" />
          </a>
          <div className="navbar-nav">Memories</div>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="#" className="nav-item nav-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
