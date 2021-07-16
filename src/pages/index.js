import Link from "next/link";
import Image from "next/image";
import slideImg1 from "../../public/images/slide/slide-1.jpg";
import slideImg2 from "../../public/images/slide/slide-2.jpg";
import slideImg4 from "../../public/images/slide/slide-4.jpg";
import slideImg5 from "../../public/images/slide/slide-5.jpg";

import roomImg1 from "../../public/images/rooms/room-1.jpg";
import roomImg2 from "../../public/images/rooms/room-2.jpg";
import roomImg3 from "../../public/images/rooms/room-3.jpg";
import roomImg4 from "../../public/images/rooms/room-4.jpg";

import mainImg1 from "../../public/images/main-1.jpg";

const Home = () => {
  return (
    <>
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row overflow-hidden h-vmin">
              <div className="col">
                <Image src={slideImg5} className="d-block w-100" alt="" />
              </div>
              <div className="col">
                <Image src={slideImg1} className="d-block w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row overflow-hidden h-vmin">
              <div className="col">
                <Image src={slideImg2} className="d-block w-100" alt="" />
              </div>
              <div className="col">
                <Image src={slideImg4} className="d-block w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="bg-leaf container-fulid d-flex justify-content-center text-center">
        <div className="m-auto font-godomaum fs-3 fw-bold">
          산과 계곡 자연 그대로의 안락함과 편안함,
          <br />내 집 별장같은 느낌을 주는 곳입니다
        </div>
      </div>

      <div className="container-fulid py-5 bg-lightgray font-nanumsquare">
        <p className="text-center my-3 fs-2">객실안내</p>
        <div className="row rooms justify-content-center pb-5">
          <div className="col-md-6 col-lg-2 m-2">
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg1} className="w-100" alt="금원산" />
              <p className="text-center my-2 fs-5">금원산</p>
              <p className="text-center mb-0 text-black-50">
                기준 8명 / 최대 18명
              </p>
              <Link href="#">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 m-2">
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg2} className="w-100" alt="거망산" />
              <p className="text-center my-2 fs-5">거망산</p>
              <p className="text-center mb-0 text-black-50">
                기준 4명 / 최대 6명
              </p>
              <Link href="#">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 m-2">
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg3} className="w-100" alt="월봉산" />
              <p className="text-center my-2 fs-5">월봉산</p>
              <p className="text-center mb-0 text-black-50">
                기준 4명 / 최대 6명
              </p>
              <Link href="#">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 m-2">
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg4} className="w-100" alt="기백산" />
              <p className="text-center my-2 fs-5">기백산</p>
              <p className="text-center mb-0 text-black-50">
                기준 4명 / 최대 6명
              </p>
              <Link href="#">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fulid py-5 bg-white font-nanumsquare">
        <div className="row justify-content-center">
          <div className="col-3 mx-3 my-5 p-3 bg-shym rounded-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span className="fs-4">공지사항</span>
              <i className="bi bi-plus"></i>
            </div>
            <ul className="list-unstyled text-body">
              <li className="d-flex justify-content-between">
                <Link href="">
                  <a
                    className="text-body text-truncate fs-7"
                    style={{ width: "22vmin" }}
                  >
                    공지사항 테스트
                  </a>
                </Link>
                <span className="fs-7">2021.07.14</span>
              </li>
            </ul>
          </div>
          <div className="col-3 mx-3 my-5 p-3 bg-secondary rounded-3">
            <span className="fs-4">예약문의</span>
          </div>
        </div>
      </div>

      <div className="container-fulid">
        <div className="row bg-shym align-items-center">
          <div className="col-sm-8 b-image">
            <Image src={mainImg1} alt="" />
          </div>
          <div className="col-sm-4">
            <div className="info w-70 mx-auto text-center fs-6">
              산 좋고 물 좋기로 유명한 거창
              <br />그 중에 북상면 월성리에 위치하고 있고
              <br />
              단독으로 계곡을 접하고 있으며
              <br />
              등산과 산악자전거도 즐길수 있습니다
              <br />
              반딧불이 있고 밤하늘에 은하수가 보이는
              <br />
              청정지역으로 조용히 쉬기에 안성맞춤입니다
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
