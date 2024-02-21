import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaRegQuestionCircle,
  FaSignOutAlt,
  FaFilm,
  FaHistory,
  FaInbox,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    {
      label: "",
      icon: (
        <img
          src="/images/northeastern-small-logo.png"
          alt="neu-logo"
          className="wd-nav-logo"
        />
      ),
    },
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <FaFilm className="fs-2" /> },
    { label: "Commons", icon: <FaSignOutAlt className="fs-2" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={
            pathname.includes(link.label) && link.label.length !== 0
              ? "wd-active"
              : ""
          }
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon}
            <br />
            {link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
