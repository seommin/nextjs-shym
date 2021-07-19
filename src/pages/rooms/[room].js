import { useRouter } from "next/router";
import Image from "next/image";

const Room = () => {
  const router = useRouter();
  const { room } = router.query;
  let name, min, max, explain;

  if (room == "1") {
    name = "금원산";
    min = 8;
    max = 18;
    explain =
      "두 가족 이상이나 지인들과 함께 오붓이 지내길 원하는 분들에게 안성맞춤인 방 2 거실 1의 공간입니다";
  } else if (room == "2") {
    name = "거망산";
    min = 4;
    max = 6;
    explain = "계곡 쪽에 위치하며 1층 원룸식 방입니다";
  } else if (room == "3") {
    name = "월봉산";
    min = 4;
    max = 6;
    explain = "계곡이 보이며 2층 원룸식 방입니다";
  } else if (room == "4") {
    name = "기백산";
    min = 4;
    max = 6;
    explain = "앞마당이 훤히 내다보이는 2층 원룸식 방입니다";
  }

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
      <p className="text-center fs-3 font-square">{name}</p>
      <p className="text-center font-square fs-5 text-secondary mb-1">
        기준 {min}명 / 최대 {max}명
      </p>
      <p className="text-center font-square fs-6 text-black-50">{explain}</p>
    </>
  );
};

export default Room;
