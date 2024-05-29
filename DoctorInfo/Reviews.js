import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reviews() {
  return (
    <div>
      <div
        style={{ fontSize: "25px" }}
        className='col-lg-12 col-md-12 col-sm-12 '
      >
        <span style={{ color: "#40839a" }}>
          <FontAwesomeIcon icon={faStar} style={{ marginLeft: "10px" }} Spin />
        </span>
        <span style={{ color: "#40839a" }}>التقييمات :</span>
        <div
          style={{
            backgroundColor: " #ecf9ff",
            width: "100%",
            padding: "10px",
            margin: "20px",
            borderRadius: "15px",
          }}
        >
          <div style={{ borderBottom: "#ccc 1px solid", marginBottom: "5px" }}>
            <span style={{ fontSize: "18px", color: "#296f8a" }}>
              magdiperper{" "}
            </span>
            <span style={{ fontSize: "12px" }}>12:32:03</span>
          </div>
          <span
            style={{
              fontSize: "20px",
              marginRight: "30px",
              color: "#27547b",
            }}
          >
            this is the best doctor in cairo
          </span>
        </div>
        <div
          style={{
            backgroundColor: " #ecf9ff",
            width: "100%",
            padding: "10px",
            margin: "20px",
            borderRadius: "15px",
          }}
        >
          <div style={{ borderBottom: "#ccc 1px solid", marginBottom: "5px" }}>
            <span style={{ fontSize: "18px", color: "#296f8a" }}>
              magdiperper{" "}
            </span>
            <span style={{ fontSize: "12px" }}>12:32:03</span>
          </div>
          <span
            style={{
              fontSize: "20px",
              marginRight: "30px",
              color: "#27547b",
            }}
          >
            this is the best doctor in cairo
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
