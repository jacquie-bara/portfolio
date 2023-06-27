import { Row, Col } from "react-bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  var link = (
    <a
      href="https://datascience.hiqsyd.se/"
      target="_blank"
      rel="noopener noreferrer"
    >
      website
    </a>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        height: "1250px",
        width: "100%",
        background: `linear-gradient(pink, #FFFFFF 75%`,
      }}
    >
      {isMobile ? (
        <p style={{ position: "absolute", top: 100 }}>
          {" "}
          This website is not compatible with mobile
        </p>
      ) : window.innerWidth < 1440 ? (
        <p style={{ position: "absolute", top: scrollPosition }}>
          For best experince, use a screen at least 1440px wide
        </p>
      ) : (
        <></>
      )}

      <Row>
        <img
          src={require("./sakura4.png")}
          alt="sakura4"
          style={{
            position: "absolute",
            transform: `translate(70%,0%)`,
            width: 750,
            opacity: 1,
          }}
        ></img>
      </Row>

      <div style={{ textAlign: "center", height: "200px" }}></div>

      <Row>
        <Col>
          <p className="signature">Yi Wang</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="sub-signature">Front end developer & Data analyst</p>
        </Col>
      </Row>

      <div style={{ textAlign: "center", height: "500px" }}></div>

      <Row>
        <Col>
          <p
            style={{
              textAlign: "center",
              opacity: 0.2,
              transform: `translate(${Math.min(
                (scrollPosition - 500) / 10,
                0
              )}%,0%)`,
            }}
            className="sub-signature"
          >
            INTRODUCTION
          </p>
        </Col>
        <Col>
          <p className="title-text">
            Front end developer with a passion for data analysis.
          </p>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col>
          <p className="title-text">
            Strives to use data to improve the user experience by finding the
            most optimal way to guide the users eyes.
          </p>
        </Col>
      </Row>
      <div style={{ height: "200px" }}></div>

      <Row>
        <Col></Col>
        <Col>
          <p className="title-text">
            MSc in Data Analytics and Business Economics at Lund University
          </p>
        </Col>
        <Col>
          <p
            style={{
              textAlign: "center",
              opacity: 0.2,
              transform: `translate(${-Math.min(
                (scrollPosition - 900) / 10,
                10
              )}%,0%)`,
            }}
            className="sub-signature"
          >
            EDUCATION
          </p>
        </Col>
      </Row>
      <div style={{ height: "200px" }}></div>
      <Row>
        <Col>
          <p style={{ textAlign: "center" }} className="sub-signature">
            COURSES
          </p>
        </Col>
      </Row>
      <div style={{ height: "20px" }}></div>
      <Row>
        <a
          href="https://www.udemy.com/course/react-redux/"
          target="_blank"
          rel="noopener noreferrer"
          className="title-text"
          style={{ opacity: `${(scrollPosition - 1100) / 250}` }}
        >
          Modern React with Redux
        </a>
      </Row>
      <div style={{ height: "50px" }}></div>
      <Row>
        <a
          href="https://www.coursera.org/professional-certificates/google-project-management?utm_source=google&utm_medium=institutions&utm_campaign=gwgsite"
          rel="noopener noreferrer"
          target="_blank"
          className="title-text"
          style={{ opacity: `${(scrollPosition - 1175) / 250}` }}
        >
          Google Project Management
        </a>
      </Row>
      <div style={{ height: "50px" }}></div>
      <Row>
        <a
          href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
          target="_blank"
          rel="noopener noreferrer"
          className="title-text"
          style={{ opacity: `${(scrollPosition - 1250) / 250}` }}
        >
          Python for Data Science and Machine Learning Bootcamp
        </a>
        {scrollPosition > 1800 ? (
          <img
            alt="sakura3"
            src={require("./sakura3.png")}
            style={{
              position: "absolute",
              transform: `translate(0%,${
                Math.min(scrollPosition - 2450, 0) / 10 + 60
              }%)`,
              width: 500,
              opacity: `${(scrollPosition - 1800) / 200}`,
            }}
          ></img>
        ) : (
          <></>
        )}
      </Row>
      <div style={{ height: "300px" }}></div>
      <Row>
        <p
          className="sub-signature"
          style={{
            opacity: `${(scrollPosition - 1800) / 2}%)`,
            transform: `translate(0%,${
              Math.min(scrollPosition - 2450, 0) / 5
            }%)`,
          }}
        >
          EXPERIENCE
        </p>
      </Row>
      <div style={{ height: "80px" }}></div>
      <Row>
        <Col
          style={{
            width: 600,
            height: 600,
            opacity: `${(scrollPosition - 2000) / 250}`,
            transform: `translate(${
              20 + Math.min(scrollPosition - 2250, -50) / 10
            }%,0%)`,
          }}
        >
          <div style={{ height: "80px" }}></div>
          <Row>
            <p className="sub-signature" style={{ width: 600 }}>
              Front end assistant
            </p>
          </Row>
          <div style={{ height: "20px" }}></div>
          <Row>
            <p className="title-text" style={{ width: 600 }}>
              A neat {link} that predicts the future electicity price with
              understandable graphs.
            </p>
          </Row>
          <div style={{ height: "20px" }}></div>
          <Row>
            <p className="title-text" style={{ width: 600 }}>
              Assisted with coding, layout and UX decisions with Figma and
              React.js.
            </p>
          </Row>
        </Col>
        <Col>
          <img
            src={require("./elspargif.gif")}
            style={{
              width: 600,
              opacity: `${(scrollPosition - 2000) / 250}`,
              transform: `translate(${
                -10 - Math.min(scrollPosition - 2250, -50) / 10
              }%,0%)`,
            }}
            alt="elspargif"
          />
        </Col>
      </Row>
      {scrollPosition > 2800 ? (
        <div style={{ zIndex: 1 }}>
          <Row>
            <p
              className="sub-signature"
              style={{
                opacity: `${(scrollPosition - 3100) / 2}%`,
                transform: `translate(0%,${
                  Math.min(scrollPosition - 3100, 1200) * 1.1
                }%)`,
              }}
            >
              SKILLS
            </p>
          </Row>
          <div style={{ height: "20px" }}></div>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3225) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                Javascript
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3225) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                ****
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3350) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                React.js
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3350) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                ****
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3475) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                Python
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3475) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                ****
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3600) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                R
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3600) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                ***
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3725) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                HTML
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3725) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                ***
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3850) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                CSS
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3850) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                ***
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 3975) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                AWS
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 3975) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                **
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row></Row>
          <Row>
            <Col></Col>
            <Col>
              <p
                className="title-text"
                style={{
                  opacity: `${(scrollPosition - 4100) / 250}`,
                  transform: `translate(0%,${
                    Math.min(scrollPosition - 3100, 1200) * 2.2
                  }%)`,
                }}
              >
                C#
              </p>
            </Col>
            <Col>
              <p
                className="sub-signature"
                style={{
                  opacity: `${(scrollPosition - 4100) / 250}`,
                  transform: `translate(0%,${
                    (Math.min(scrollPosition - 3100, 1200) - 10) * 1.1
                  }%)`,
                }}
              >
                *
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <p
              className="title-text"
              style={{
                opacity: `${(scrollPosition - 4225) / 250}`,
                transform: `translate(0%,${
                  Math.min(scrollPosition - 3100, 1200) * 2.2
                }%)`,
              }}
            >
              And loves to learn more!
            </p>
          </Row>
        </div>
      ) : (
        <div style={{ height: "925px" }}></div>
      )}
      <Row>
        {scrollPosition > 2900 && scrollPosition < 4800 ? (
          <img
            alt="sakura7"
            src={require("./sakura7.png")}
            style={{
              position: "absolute",
              zIndex: -1,
              opacity: `${(scrollPosition - 2900) / 250}`,
              transform: `translate(5%,${
                Math.min(scrollPosition - 2700, 3000) * 0.15 - 200
              }%)`,
              width: 1600,
              height: 1600,
            }}
          ></img>
        ) : (
          <div></div>
        )}
        <img
          alt="sakura1"
          src={require("./sakura1.png")}
          style={{
            position: "absolute",
            transform: `translate(0%,100%)`,
            width: 750,
            opacity: 1,
          }}
        ></img>
      </Row>
      <div style={{ height: "1700px" }}></div>
      <div
        style={{
          height: "570px",
          background: `linear-gradient( #FFFFFF 30%,pink)`,
        }}
      >
        <div style={{ opacity: `${(scrollPosition - 5100) / 3}%` }}>
          <Row>
            <p className="sub-signature">Contact Me</p>
          </Row>
          <div style={{ height: "50px" }}></div>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/jacquie-yi-wang-9349b524b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./LinkedIn_logo.png")}
                  style={{
                    opacity: `${(scrollPosition - 2000) / 250}`,
                    background: "linear-gradient( #FFFFFF 20%,darkblue 1500%)",
                    borderRadius: 200,
                    width: 200,
                    height: 200,
                  }}
                  alt="portrait"
                />
              </a>
            </Col>
          </Row>
          <div style={{ height: "50px" }}></div>
          <Row>
            <Col>
              <p className="sub-signature">jacquie.y.wang@gmail.com</p>
            </Col>
          </Row>
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
    </div>
  );
}

export default App;
