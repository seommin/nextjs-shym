import React, { useEffect } from "react";

const Notice = () => {
  return (
    <>
      <h2 className="font-square text-center py-5">공지사항</h2>
      <div className="container">
        <table className="table table-hover">
          <colgroup>
            <col width="15%" />
            <col width="45%" />
            <col width="20%" />
            <col width="20%" />
          </colgroup>
          <thead className="text-center">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>2</td>
              <td>임시 UI 작업</td>
              <td>김성민</td>
              <td>2021-11-01</td>
            </tr>
            <tr>
              <td>1</td>
              <td>공지사항 준비 중입니다.</td>
              <td>김성민</td>
              <td>2021-08-06</td>
            </tr>
          </tbody>
        </table>

        <nav className="center pt-3">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Notice;
