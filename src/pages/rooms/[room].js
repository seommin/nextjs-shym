import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ROOM from "@src/utils/room.json";

import roomImg1 from "@public/images/rooms/room-1.jpg";
import roomImg2 from "@public/images/rooms/room-2.jpg";
import roomImg3 from "@public/images/rooms/room-3.jpg";
import roomImg4 from "@public/images/rooms/room-4.jpg";

const Room = () => {
  const router = useRouter();
  const { room } = router.query;
  const roomInfo = ROOM[room];

  return (
    <>
      <h2 className="font-square text-center pt-5">객실안내</h2>
      <div className="container d-flex">
        <div
          id="carouselControls"
          className="carousel slide mx-auto py-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `.jpg`}
                  width={800}
                  height={500}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `-1.jpg`}
                  width={800}
                  height={500}
                  className="m-auto"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `-2.jpg`}
                  width={800}
                  height={500}
                  className="m-auto"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `-3.jpg`}
                  width={800}
                  height={500}
                  className="m-auto"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `-4.jpg`}
                  width={800}
                  height={500}
                  className="m-auto"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `-5.jpg`}
                  width={800}
                  height={500}
                  className="m-auto"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <Image
                  src={`/images/rooms/room-` + room + `-6.jpg`}
                  width={800}
                  height={500}
                  className="m-auto"
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselControls"
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
            data-bs-target="#carouselControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p className="text-center fs-3 font-square">{roomInfo.name}</p>
      <p className="text-center font-square fs-5 text-secondary mb-1">
        기준 {roomInfo.min}명 / 최대 {roomInfo.max}명
      </p>
      <p className="text-center font-square fs-6 text-black-50">
        {roomInfo.explain}
      </p>

      <div className="container-fulid py-5 font-square">
        <div className="row rooms justify-content-center pb-5">
          <div
            className="col-md-6 col-lg-2 m-2"
            style={{ display: room == 1 ? "none" : "block" }}
          >
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg1} className="w-100" alt="금원산" />
              <p className="text-center my-2 fs-5">금원산</p>
              <p className="text-center mb-0 text-black-50">
                기준 8명 / 최대 18명
              </p>
              <Link href="/rooms/1">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-2 m-2"
            style={{ display: room == 2 ? "none" : "block" }}
          >
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg2} className="w-100" alt="거망산" />
              <p className="text-center my-2 fs-5">거망산</p>
              <p className="text-center mb-0 text-black-50">
                기준 4명 / 최대 6명
              </p>
              <Link href="/rooms/2">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-2 m-2"
            style={{ display: room == 3 ? "none" : "block" }}
          >
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg3} className="w-100" alt="월봉산" />
              <p className="text-center my-2 fs-5">월봉산</p>
              <p className="text-center mb-0 text-black-50">
                기준 4명 / 최대 6명
              </p>
              <Link href="/rooms/3">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-2 m-2"
            style={{ display: room == 4 ? "none" : "block" }}
          >
            <div className="p-2 border bg-light rounded-3">
              <Image src={roomImg4} className="w-100" alt="기백산" />
              <p className="text-center my-2 fs-5">기백산</p>
              <p className="text-center mb-0 text-black-50">
                기준 4명 / 최대 6명
              </p>
              <Link href="/rooms/4">
                <a className="text-center text-danger d-block pb-2">
                  상세보기 <i className="bi bi-chevron-right align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
