import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div class="container text-center" style={{ width: 1068 }}>
        <div class="row row-cols-4" style={{ display: "grid" }}>
          <div
            class="col"
            style={{
              fontSize: "xx-large",
              height: 300,
              fontFamily: "Roboto Condensed,Sans-Serif",
              textAlign: "left",
              paddingTop: 20,
            }}
          >
            {/* Jobster{" "} */}

            <img
              src="https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
              alt=""
            />
          </div>
          <div
            class="col"
            style={{
              width: 524,
              fontSize: "xxx-large",
              height: 94,
              fontFamily: "Roboto Condensed,Sans-Serif",
              textAlign: "left",
            }}
          >
            Job Tracking App
          </div>
          <div
            class="col"
            style={{ width: 598, height: 94, textAlign: "left" }}
          >
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </div>
          <div class="col">
            <Link to="/login">
              <button
                type="button"
                class="btn btn-primary"
                style={{ position: "relative", right: 40, width: 168 }}
              >
                Login/Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <img
        src="https://redux-toolkit-jobster.netlify.app/static/media/main.17b316de742b3a1202078c5ae18c8261.svg"
        alt=""
        style={{ position: "relative", left: 851, bottom: 408 }}
      />
    </>
  );
}
