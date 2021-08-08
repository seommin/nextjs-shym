import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    var container = document.getElementById("map");

    var options = {
      center: new kakao.maps.LatLng(35.74372050353962, 127.73778423418916),
      level: 2,
    };

    var map = new kakao.maps.Map(container, options);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    var markerPosition = new kakao.maps.LatLng(
      35.74372050353962,
      127.73778423418916
    );

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <>
      <div className="container d-flex flex-column align-items-center pt-5">
        <h2 className="font-square py-3">오시는길</h2>
        <div
          id="map"
          style={{ width: "800px", height: "500px" }}
          className="border border-dark mb-5"
        ></div>
        <p className="font-square font-size-l">
          <i className="bi bi-geo-alt-fill"></i> 경상남도 거창군 북상면 월성리
          570
        </p>
        <p className="font-square font-size-l">
          <button
            type="button"
            className="btn btn-outline-secondary font-size-s p-1"
            disabled
          >
            도로명
          </button>
          &nbsp;경상남도 거창군 북상면 계수나무길 487-4
        </p>
      </div>
    </>
  );
};

export default Location;
