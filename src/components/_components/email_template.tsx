import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  mail: string;
}

const bg = `
radial-gradient(
        at 27% 37%,
        hsla(215, 98%, 61%, 1) 0px,
        transparent 0%
      ),
      radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
      radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
      radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
      radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
      radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
`;

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  mail,
}) => (
  <div
    style={{
      minHeight: "600px",
      borderRadius: "10px",

      background: bg,
      color: "white",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      padding: "12px",
    }}
  >
    <div
      style={{
        background: "#101010",
        width: "600px",
        minHeight: "500px",
        borderRadius: "8px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div style={{ borderBottom: "2px solid white" }}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "24px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            paddingBottom: "8px",
          }}
        >
          Hello, This is{" "}
          <span
            style={{
              color: "seagreen",
              cursor: "pointer",
              fontFamily: "cursive",
            }}
          >
            {name}
          </span>
          !
        </h1>
      </div>

      {/* Body */}
      <div style={{ height: "100%" }}>
        <h2
          style={{
            marginTop: "8px",
            textAlign: "start",
            fontSize: "15px",
            fontFamily: "monospace",
          }}
        >
          Sender Email:{" "}
          <a
            style={{
              textAlign: "start",
              color: "seagreen",
              cursor: "pointer",
              fontSize: "15px",
              fontFamily: "cursive",
            }}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </h2>

        <p
          style={{
            backgroundColor: "#202020",
            fontSize: "15px",
            marginTop: "5px",
            borderRadius: "8px",
            padding: "5px",
            fontFamily: "monospace",
            overflowY: "auto",
          }}
        >
          {mail}
        </p>
      </div>
    </div>
  </div>
);
