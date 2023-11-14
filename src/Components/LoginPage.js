import React from "react";

export default function LoginPage() {
  return (
    <>
      <div
        style={{
          width: 400,
          height: 524,
          position: "relative",
          left: 578,
          top: 78,
          border: "solid",
          borderWidth: 2,
          borderTopWidth: 5,
          borderRadius: 10,
          borderColor: "#0d6efd",
        }}
      >
        <img
          src="https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
          alt=""
          style={{ position: "relative", left: 113, top: 42 }}
        />

        <p
          style={{
            position: "relative",
            left: 168,
            top: 61,
            fontSize: "xx-large",
          }}
        >
          Login
        </p>
        <div class="mb-3" style={{ position: "relative", top: 57 }}>
          <label
            for="exampleFormControlInput1"
            class="form-label"
            style={{ left: 47, height: "auto", position: "relative" }}
          >
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            style={{
              height: "auto",
              width: 312,
              position: "relative",
              left: 43,
            }}
          />
        </div>

        <label
          for="inputPassword5"
          class="form-label"
          style={{ position: "relative", left: 47, top: 59 }}
        >
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          style={{ position: "relative", top: 56, width: 312, left: 43 }}
        ></input>
        <button
          type="button"
          class="btn btn-primary"
          style={{ position: "relative", width: 311, top: 78, left: 43 }}
        >
          Submit
        </button>

        <button
          type="button"
          class="btn btn-primary"
          style={{
            position: "relative",
            width: 311,
            top: 98,
            left: 43,
            backgroundColor: "#bfdbfe",
            borderColor: "#bfdbfe",
            color: "#0d6efd",
          }}
        >
          Demo App
        </button>
        <p style={{ position: "relative", top: 118, left: 100 }}>
          Not a Member yet? Register
        </p>
      </div>
    </>
  );
}
