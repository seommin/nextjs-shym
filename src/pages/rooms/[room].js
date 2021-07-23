import { useRouter } from "next/router";
import Image from "next/image";
import ROOM from "@src/utils/room.json";

const Room = () => {
  const router = useRouter();
  const { room } = router.query;
  const roomInfo = ROOM[room];

  return (
    <>
      <div className="container d-flex">
        <div
          id="carouselControls"
          className="carousel slide mx-auto py-5"
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
    </>
  );
};

export default Room;
