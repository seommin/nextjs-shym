import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
      <div className="container-fluid py-2">
        <Link href="/">
          <a className="shym-title fs-1 ps-3 text-dark">쉼펜션야영장</a>
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="dropdown">
              <a
                className="nav-link px-4 link-dark cursor-pointer"
                id="dropdownMenu1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                객실안내
              </a>
              <ul
                className="dropdown-menu text-small text-center"
                aria-labelledby="dropdownMenu1"
              >
                <li>
                  <Link href="/rooms/1">
                    <a className="dropdown-item link-dark">금원산</a>
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/2">
                    <a className="dropdown-item link-dark">거망산</a>
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/3">
                    <a className="dropdown-item link-dark">월봉산</a>
                  </Link>
                </li>
                <li>
                  <Link href="/rooms/4">
                    <a className="dropdown-item link-dark">기백산</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="https://www.geochang.go.kr/tour/Index.do">
                <a className="nav-link px-4 link-dark" target="_blank">
                  주변관광
                </a>
              </Link>
            </li>
            <li>
              <Link href="/location">
                <a className="nav-link px-4 link-dark">오시는길</a>
              </Link>
            </li>
            <li>
              <Link href="/notice">
                <a className="nav-link px-4 link-dark">공지사항</a>
              </Link>
            </li>
            <li>
              <Link href="https://booking.naver.com/booking/3/bizes/540347">
                <a className="nav-link px-4" target="_blank">
                  예약하기
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
