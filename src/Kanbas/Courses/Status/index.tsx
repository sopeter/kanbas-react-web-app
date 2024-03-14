import {
  FaBullhorn,
  FaChartBar,
  FaCrosshairs,
  FaFileImport,
  FaRegBell,
  FaSignOutAlt,
} from "react-icons/fa";

function Status() {
  return (
    <>
      <div
        className="d-none d-md-block container mt-3 px-4"
        style={{ width: "250px" }}
      >
        <div className="d-flex row">
          <ul className="list-unstyled">
            <li>
              <a href="#">
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 "
                  type="button"
                >
                  <span>
                    <FaFileImport /> Import Existing Content
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 mt-1"
                  type="button"
                >
                  <span>
                    <FaSignOutAlt /> Import From Commons
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 mt-1"
                  type="button"
                >
                  <span>
                    <FaCrosshairs /> Choose Home Page
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 mt-1"
                  type="button"
                >
                  <span>
                    <FaChartBar /> View Course Stream
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 mt-1"
                  type="button"
                >
                  <span>
                    <FaBullhorn /> New Announcement
                  </span>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 mt-1"
                  type="button"
                >
                  <span>
                    <FaChartBar /> New Analytics
                  </span>
                </button>
              </a>
            </li>
            <li>
              {/* <a href="#"> */}
                <button
                  className="btn wd-lgrey-button wd-border-button full-button w-100 mt-1 text-nowrap"
                  type="button"
                >
                  <span className="">
                    <FaRegBell /> View Course Notifications
                  </span>
                </button>
              {/* </a> */}
            </li>
          </ul>
        </div>
        <div className="d-flex row mt-3">
          <div className="col" style={{ height: "24px" }}>
            <p className="row text-start">Coming Up</p>
          </div>
          <div className="col" style={{ height: "24px" }}>
            <a
              className="small justify-content-end text-nowrap text-decoration-none red-font"
              href="#"
            >
              View Calendar
            </a>
          </div>
          <hr />
          <ul>
            <li>
              <a className="red-font text-decoration-none" href="#">
                Lecture <br />
                CS4550.12631.202410 <br />
                Sep 7 at 11:45am
              </a>
            </li>
            <li className="mt-2">
              <a className="red-font text-decoration-none" href="#">
                Lecture <br />
                CS4550.12631.202410 <br />
                Sep 11 at 11:45am
              </a>
            </li>
            <li className="mt-2">
              <a className="red-font text-decoration-none" href="#">
                CS5610 06 <br />
                SP23 Lecture <br />
                Sep 11 at 6pm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Status;
