import React from "react";

export default function PortraitSVG() {
  React.useEffect(function () {
    let portraitPaths = document.querySelectorAll(".svg-animate .st0");
    const PortraitDraw = () => {
      portraitPaths.forEach((path) => {
        // console.log("testinh");
        let pathlength = path.getTotalLength();
        path.style.strokeDasharray = pathlength;
        path.style.strokeDashoffset = pathlength;
        path.style.display = "block";
      });
    };
    PortraitDraw();
  }, []);
  return (
    <svg
      className="svg-animate svg-portrait"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 600 600"
    >
      <defs>
        <linearGradient id="grad1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad2">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <g>
            <g>
              <path
                className="st0 test-path"
                stroke="#fff"
                d="M433.7,75.1c0,0,31.7,19.3,43.6,42.4c11.9,23.2,16.2,26,17.7,27.7c1.4,1.7,6.5,10,6,14.1
                                            c0,0,2.6,3.3,0.7,8.1c0,0,6.2,1.9,5.3,25.1c0,0-0.2,7.6-1.4,7.4c-1.2-0.2,12.4,13.4,16,15c3.6,1.7,8.8,12.2,4.8,22.4
                                            c-4,10.2-14.6,16-14.6,16s5.9,19.4,6.4,22c0.5,2.6,1.4,13.1-4.1,14.6c-5.5,1.4,10.5,5.2,3.9,14.8c-6.7,9.6-6.5,19.8-5,30.2
                                            c1.4,10.5-3.6,36.2-61.3,47.7c0,0-27.6,17.1-29.4,26.7c-1.9,9.6-8.6,24.4-8.6,24.4l-10.5,41l-2.4,22.4c0,0-5.3,17.2-13.4,17.2
                                            s-28.3,13.9-103.2-45.7c-56.3-42.9-37.2-53.9-28.6-69.2s9.6-43.4,7.6-52c-1.9-8.6,31.9-3.3,4.3-69.2c0,0-45.8-69.2,13.9-68.2
                                            c59.6,1,136.5-63,130.3-92.5C405.2,87.7,401.4,67.2,433.7,75.1z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M508,171.4c0,0,11.5,35,10.8,43.8c0,0,6.8,11.1,7.5,9.3C527,222.7,531.1,179.8,508,171.4z"
              />
            </g>

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M521.4,214.7c-2.9-1.3-12.3-10.5-15.2-13.8c-8.3-7.8-16.5-15.2-16.5-15.2c-3.2,30.4-11.8,30.9-21.2,44.1
                                            c-9.4,13.3,28.1,21.4,28.1,21.4s9.7,2.9,15.2,2.1c-0.1-0.2-0.1-0.3-0.1-0.3s10.5-5.7,14.6-16c0.6-1.5,1-3,1.2-4.5
                                            c0.1-0.9,0.2-1.7,0.2-2.5C527.9,222.5,524.2,216,521.4,214.7z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M514.3,232.4c0,0,3.8-18.6-1.4-22.9c-5.3-4.3-20.1-17.7-22.5-18.2c-2.4-0.5-2.9,21-10.5,25.8
                                            c-7.6,4.8-17.2,22-6.7,28.1c0,0,14.8,4.8,13.9,14.3c-1,9.6-9.6,1.9-10.5,9.1c-1,7.2,16.2,0.5,21.5,0.5c5.3,0,5.3-16.7-2.4-20.1
                                            c-7.7-3.4-9.1-21-4.3-21S511.9,238.6,514.3,232.4z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M510.9,310.6c-2.8,3.7-4.3-0.5-8.1-0.7c-3.8-0.2-0.7,8.4-1,13.6c-0.2,5.3-6.9,7.2-7.6,7.2l-1.4,1.4
                                            c-7.4,9.8,7.6,22.9,10.8,25.3c0.4,0.3,0.9,0.4,1.4,0.2c7.8-9,8.6-17.8,7.9-22.9c-1.3-9.3-1.6-18.5,3.1-27.1
                                            C514.9,306.7,513.3,307.4,510.9,310.6z"
              />
            </g>
            <path
              className="st0"
              stroke="#fff"
              d="M429.8,153.4c0,0-11.9,13.4-11.5,31.9c0.4,18.6,27.2,58.2,31,63.9s7.6,14.3,3.8,32.4
                                        c-3.8,18.2,7.6,24.4,13.4,35.7c5.7,11.5,6.7,31.4,4.3,34.8c-2.4,3.3-13.4,23.9-28.1,28.1c-14.8,4.3-26.8-4.8-48.2,28.6
                                        c-21.5,33.3-45.8,93.9-44.3,97.7c1.4,3.8-112.6-50.1-106.9-89.1c5.7-39,13.9-58.7,15.8-81.6s-22.9-124-9.1-127.8
                                        c13.8-3.8,108.3-73.9,131.2-69.6C404,143,422.1,142,429.8,153.4z"
            />
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M467,238.1c0,0-12.7,34.8-10.8,39.1"
              />
            </g>

            <g>
              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M415.1,182.4c0,0,36.9,6.3,40.4,2.2c2.1-2.4,3-6.8-1.1-8.4C448.3,173.8,413.2,178.6,415.1,182.4z"
                />
              </g>

              <path
                className="st0"
                stroke="#fff"
                d="M453.4,172c0,0-4.3-7.2-26.3-1"
              />
              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M438.9,185.3c-2.5-0.4-4.6-2.3-5.2-4.8c-0.3-1.6,0-3.2,2.4-3.8c5.3-1.3,16.8-3.8,19.7-0.7
                                                c2.9,3.1,3,8.1-1.9,9.5C448.4,187,442.5,185.9,438.9,185.3z"
                />
              </g>
              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M449.7,172.5c0,0-1.7-1.7-0.2-1.5c1.5,0.2,4,2.2,4.1,3.4C453.6,175.6,450.3,174.1,449.7,172.5z"
                />
              </g>
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M496.6,338c-11-7-41.7-31.8-40.8-41.7c1-10,18.9-21.9,24.9-28.8s-13-11.9-21.9-21.9
                                            c-9-10,12-22.9,19.9-39.7c8-16.9-34.8-14.9-34.8-14.9c-98.4-12.9-43.7-10-91.5,52.7c-47.7,62.6,56.7,88.4,66.7,116.3
                                            c5.9,16.5,25,20.4,42.2,20.3c20.2-5.1,32.7-12.1,40.4-19.3C503.8,351.9,502.5,341.7,496.6,338z"
              />
            </g>
            <path
              className="st0"
              stroke="#fff"
              d="M342.9,201.6c0,0,62.5-4.3,73,13.9s22.9,4.3,19.6,38.1s-12.9,48.1,2.9,64.4c15.8,16.2,31,28.6,40,24.8
                                        c9.1-3.8-18,28.2-33.2,30.5c-15.3,2.4-138.6-35.8-144.7-51.1C294.2,307,238,209.2,342.9,201.6z"
            />

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M443.9,81.9c0,0-3.8,12.4-12.4,18.6c-8.6,6.2-3.8,17.7-4.8,26.3s-5.7,19.1-1.4,23.4
                                            c4.3,4.3,4.8,7.2,6.5,13.4c1.7,6.2-16.7,14.6-16.6,19s-9.4,12.1-8.5,16.4c1,4.3-8.1,27.7-18.2,22c-10-5.7-31-56.7-14.8-79.2
                                            s40.5-70.1,52-65.3S439.6,77.6,443.9,81.9z"
              />
            </g>

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M431.5,208.5c0,0,22.2,17.7,46.2,10.7"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M345.8,174.6l88.7-26.3c0,0,3.1,11.2,2.9,13.6c-0.2,2.4,3.6,2.4,4.3,7.2c0.7,4.7,3.6,41.2,28.6,50.1
                                            c0,0-1.7,0.5-4.5,0.2s-18.4-10.5-22.9-29.5c-4.5-19.1-9.1-27.7-11.2-26.5c-2.2,1.2-84.6,28.6-84.6,28.6L345.8,174.6z"
              />
            </g>

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M433.9,137.1c0,0,22.9-9,36.5,1.2c0,0,7,14.3,2.9,15.6c-2.4,0.7-3.2,6.1-3.2,10.8c0,1.6-2.1,2.2-2.9,0.8
                                            c-4.2-7.1-11.2-17.6-16.4-18.9c-8-1.9-13.7-1.6-16.9,0.3C430.7,148.6,410,149.8,433.9,137.1z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M458.2,149.1c0,0-14.5-8.4-25.5-3.3c-8.2,0.7-11-0.6-11,0.3c0,0,6.8-13.6,29.2-9c0,0-10.3-3.9-17.2-0.1
                                            c0,0,10.6-5.3,21.8-0.5c0,0-3-2.7-4.1-2.9c0,0,15.2,3.1,17.8,7.6l-0.1-2.5c0,0,1.2,3.7,1.1,5.3l0.4-1.4c0,0,0.8,4.5,0.2,5.4
                                            C470.3,148.8,463.3,153.9,458.2,149.1z"
              />
            </g>
            <path
              className="st0"
              stroke="#fff"
              d="M497.2,168.2c-1.1,0.2-3.3-2.9-3.7-5.6v-0.1c0.5-0.7,0.8-1.4,1-1.9c0.8-2.9,4-14.5-1.1-17
                                        c0,0-9.1,18.4-8.3,22.7c-0.1,0.2-0.2,0.4-0.2,0.4c0,2.7,6.2,0,10,5.7C496,173.7,498.3,168,497.2,168.2z"
            />
            <g>
              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M526.6,225.2c0,2.1,3.3-14.6-1.9-36.2c0,0-12.9-32.6-30.2-16.7c0,0-3.1-5.3-11-4.1c0,0-15.8-28.8-46-20.8
                                                l-3.3,1l2.6,14.6c0,0,5.5,2.4,4.8,9.3c-0.7,6.9,8.4,41.2,29.5,47.2c0,0,11,4.8,15.5-18.2s-2.9-21.7,1-24.8
                                                c3.8-3.1,6,1.7,6.5,2.4c0.5,0.7,0,11.5,1.9,12.2l0.5,2.1c0,0,6.4,6.6,9.5,8.9c-7.7-7.7-7.6-7.7-6.4-8.7c0,0-2.4-13.4-0.5-18
                                                c2-4.6,13-10.4,24,12.7c0,0,5.7,27.3,2.9,35.3 M475.7,215.1c-5.3,1-13.5-1.3-17-8.1c0,0-23.1-30.3-11.8-54.5
                                                c0,0,14-14,34.3,17.7C493.2,195.4,480.9,214.1,475.7,215.1z"
                />
              </g>
            </g>

            <path
              className="st0"
              stroke="#fff"
              d="M471.1,286.1c0,0,7.2-1.9,9.4-2c2.2-0.1,6.1-0.4,7.3-1c1.2-0.6,6.8-1.3,6.8-1.3s6.6,1.2,7.3,1.4
                                        c0.7,0.2,15.7,3.3,14.9,4.5c0,0,1,1.8-0.5,1.8c-1.5,0-3.6-2-5.1-2.1c-1.6-0.1-3.5-1.6-4.8-1.4c-1.3,0.1-2.2-0.8-4.1-0.8
                                        c-1.9,0-8.4-1.7-10.8-0.8C489.1,285.3,472,285.4,471.1,286.1z"
            />

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M474.4,278.4c-1.9-2.8-1.6-6.6,0.6-9.2c2.6-3,6-7.3,7-9.8c1.8-4.2,3.7-11.1,9.4-8.8
                                            c5.7,2.3,12.1,0.7,13.7,4.7s-1.1,7,2,10.1c3.1,3.1,2.3,3.3-2.6,4.1c-4.9,0.8-27.2,8.8-28.6,9.8
                                            C475.3,279.6,474.8,279.2,474.4,278.4z"
              />
            </g>
            <path
              className="st0"
              stroke="#fff"
              d="M515.6,294.1c0,0,6.5,8.6-0.2,14c-4.5-0.7-16.2-3.2-21-6.6c-4.8-3.3-20.9-8.5-22.8-8.5c-1.9,0-7.6-6-4.4-7.5
                                        c3.2-1.6,34.4-14.7,39.7-14.7c5.3,0,12.2,3.6,13.1,5.5c1,1.9,2.6,14.6-3.5,15.6C516.5,291.9,514,293,515.6,294.1z"
            />

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M487,176.3c0,0-3.2-8.4-1.4-7s2.9,4.6,2.9,6.2C488.4,177.1,487.2,176.6,487,176.3z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M447.9,152.7c0,0,3.6-4.3,10-1.8c6.5,2.5,21.1,15,24.3,23.6s4.9,27.9,0.4,33.6c-4.5,5.8-6.8,9.8-3.3,1
                                            c0,0,7.5-8.6,2-29.4C475.6,158.8,453.2,148.3,447.9,152.7z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M499.3,185.3c0,0,5.5-2.1,6.8,2.7c1.3,4.8,0.2,4.8,0.2,4.8s-6.9-2.6-7-3
                                            C499.2,189.4,498.6,185.2,499.3,185.3z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M500.3,187.3c0,0-0.1-2.2,1.8-1.3c1.9,0.9,4,3.8,2.2,3.6C502.4,189.4,502.9,186.9,500.3,187.3z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M500.1,195.2c0,0,5.5,4.2,5.9,3c0.4-1.2,1.9-4.1,0.3-5.3s-7.3-3.4-7.2-2.8
                                            C499.1,190.7,499.5,194.9,500.1,195.2z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M502.1,195.6c0,0-0.1-3.9,0.8-3.1C503.7,193.2,503.6,196.8,502.1,195.6z"
              />
            </g>
            <path
              className="st0"
              stroke="#fff"
              d="M489.3,299c0,0-11.2-9.5-0.7-11.4s13.7-0.6,16.2,1c2.5,1.6,8.6,1.3,10.5,5.3c1.9,4,5.7,13.9-1.6,13.2
                                        C506.4,306.4,489.3,300.9,489.3,299z"
            />
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M498.6,294.6c0,0,7.7-3.4,12.1,0c4.4,3.4,5.3,9.2-1.5,6.8C502.4,299,498.6,294.6,498.6,294.6z"
              />
            </g>

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M321.8,285c0,0,4.3,17.2-13.6,13.4c-17.9-3.8-47.8-18.6-57.5-58.9c-5.5-22.9,18.2-34.1,43.2-28.3
                                            c25.1,5.7,21,10.5,21,10.5s-12.4,16.5-11.7,21c0.7,4.5-2.4-2.6-0.5,6.9c1.9,9.6,1.4,8.8,5.3,10.5c3.8,1.7,5,4.1,5.3,6.4
                                            c0.3,2.3,1.2,11.7-1,14.6C310.1,283.8,317.7,284.8,321.8,285z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M269.3,217.1c0,0,18.6-3.8,21.7,6.7s-1.4,14.6-5.5,11c-4.1-3.6-0.7-11.7-5-13.9
                                            C276.2,218.7,267.2,220.2,269.3,217.1z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M261,254.3c0,0-9.6-27.7,1.4-33.8c11-6.2,7.4-2.4,2.6,7.4c-4.8,9.8,0,21.7,1.9,24.1
                                            C268.8,254.3,262.1,256.7,261,254.3z"
              />
            </g>

            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M266,262.3c0,0,12.7,14.3,18.2,14.6c5.5,0.2-1.6,5.6-17.9-10.7C259.5,259.6,264.5,262.3,266,262.3z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M302.9,289.1c0,0,13.4-4.5,15.1-1.4C319.6,290.8,317.2,298.2,302.9,289.1z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M285.5,243.6c0,0,6.2-9.8,6.7-11.7s2.6,0,3.3,3.6c0.7,3.6,1.9,11.9,1,12.9c-1,1-3.3,1.9-5.5,3.3
                                            C288.8,253.1,277,265.2,285.5,243.6z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M283.6,262.1c-1-0.7-2.4,0.2-2.2,1.4c0.5,3,1.7,6.7,4.8,5.4c5-2.1,9.3-5.5,11.5-4.8s5,2.6,6.7,2.1
                                            c1.7-0.5,5.7,1.7,7.4,0.5c1.7-1.2,5-2.4-3.3-7.2c0,0-3.8,1-5-8.4c-1.2-9.3-3.8-8.1-3.6-4.8c0.2,3.3-1.2,9.1-3.3,11.2
                                            c-2.2,2.1-2.7,10-9.1,6.7C285.8,263.6,284.6,262.8,283.6,262.1z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M296,270.5c0,0,11.5-7.2,13.9-1.9c2.4,5.3,2.4,14.8-5.7,13.4c-8.1-1.4-6.9-3.3-5.3-6.9
                                            C300.5,271.4,299.1,270,296,270.5z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M272.4,249.8c0,0-3.6,25.1,12.7,22.7c0,0,2.4-1.2-0.5-1.2c-2.9,0-6.5-5.5-8.1-12.4
                                            C274.9,252,273.4,248.3,272.4,249.8z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M274.3,242.9c0,0,6.9-7.8,9.6-6.8s3.7,1.8-1.3,6.5C277.6,247.4,276,253.3,274.3,242.9z"
              />
            </g>

            <path
              className="st0"
              stroke="#fff"
              d="M300.6,308.3c0,0-1.6,18.6,13.9,26.5s90.8,32.9,97.2,33.2"
            />

            <path
              className="st0"
              stroke="#fff"
              d="M450.7,176.6c0,0,6.1,1.9,2,8.2"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M499.2,218.4c-5.9-0.4-11.8,1.5-16.2,5.3c-4.9,4.2-9.9,10.2-7.9,15.8c3.7,10,15,10.2,16.9,10.5
                                        c1.9,0.3-5.1-5.1,1.9-7.8C500.3,239.8,529.9,220.6,499.2,218.4z"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M479.1,227.5c0,0-13.3,16.4,9.7,22.1"
            />
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M493.9,245.4c0,0,9.1-11.9,16.7-6.4c0,0,3.9,3.6-1.8,4.7C503.1,244.7,502.1,239.9,493.9,245.4z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M512.1,251.9c0,0-1.3-2.1,0-2.5c1.3-0.5,5.6-2.2,5.6-3.5C517.6,245.8,516.2,250.7,512.1,251.9z"
              />
            </g>
            <g>
              <path
                className="st0"
                stroke="#fff"
                d="M326.1,490c0,0,55.3-135.5,66.8-99.2s-15.3,125.9-5.7,124C396.6,512.9,324.2,514.9,326.1,490z"
              />
            </g>
            <g>
              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M264.5,360.1c0,0-3.8,5.7-10.5-10c-6.7-15.8-13.9-20.1-13.9-30.9c0-10.9-6.2-8.1-9.6-11.5
                                                c-3.3-3.3-11.9-16.7-15.8-16.2s-16.2,0.5-24.4-15.8c-8.1-16.2-10-36.2-9.6-46.2c0.5-10,1.9-18.2-0.5-25.8s1.9-25.3,3.3-31.9
                                                c1.4-6.7,10-37.2,13.9-45.3c3.9-8.1,2.9-12.9,9.1-20.5c6.2-7.6,11.9-13.9,16.2-16.7c4.3-2.8,11.5-5.7,16.2-10
                                                c4.8-4.3,21.5-15.8,27.2-17.2c5.7-1.4,24.4-3.3,25.8-4.3c1.4-1,8.6-7.6,13.4-9.1c4.8-1.4,19.6-7.6,24.9-11.9
                                                c5.3-4.3,14.8-0.5,24.9-4.3c10-3.8,21-2.4,25.3-5.7s11-4.8,18.6-5.7c0.2,0,0.3,0,0.5-0.1c13.7-2.2,26.4,7.2,28.1,20.9
                                                c0.8,6.4,1.9,11.7,3.4,13.5c4.8,5.7,11,15.3,5.7,22.9c-5.3,7.6-3.3,8.6-13.9,9.6c-10.5,1-7.2,21-6.2,30.5s5.3,19.1,1,30
                                                c-4.3,11-16.7,5.7-24.4,11c-7.6,5.3-11.5,15.8-6.7,23.9s21,15.8,6.7,16.2c-14.3,0.5-31.4-6.7-37.7-3.3
                                                c-6.3,3.4,3.3,42.9-6.7,45.8c-10,2.9-23.9-28.1-33.4-29.5c-9.6-1.4-37.2-4.3-43.9-1.4c-6.7,2.9-36.2,8.1-3.8,62.5
                                                S271.2,356.8,264.5,360.1z"
                />
              </g>
              <path
                className="st0"
                stroke="#fff"
                d="M204.6,119.8c0,0-22.9,11.1-22,34.3c0,0,7.6-26.7,23.3-31.1C221.4,118.5,204.6,119.8,204.6,119.8z"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M390.3,22.7c0,0,19.8,57.5-19.8,80.8s-7,77.3-2.2,81.1"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M358.3,23.5c0,0,19.8,57.5-19.8,80.8s-7,77.3-2.2,81.1"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M350.6,115.7c0,0-41.3-34-70.9-11.8s-12.7,85.8,14,93.7"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M361.5,102.4c0,0-48.5-36.6-83.2-12.7s-14.9,92.5,16.4,101.1"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M328,35.8c0,0,3.5,60.7-40.7,72.5s-27.6,72.5-24.1,77.5"
              />

              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M211.7,184.5c0,0-10.1,24.6,12.6,38.9C224.3,223.5,198.7,213.8,211.7,184.5z"
                />
              </g>
              <path
                className="st0"
                stroke="#fff"
                d="M215.6,221.7c0,0-22.7-24.3-6-58C209.7,163.7,186.6,189.4,215.6,221.7z"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M212.6,221.1c0,0-26.3-32.4-20.1-57.2C192.5,163.8,180.1,188.4,212.6,221.1z"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M406.2,25c0,0,0.4,0.1,1.2,0.3c0.8,0.2,2,0.5,3.4,1c2.9,0.9,7.1,2.4,11.7,5c2.3,1.3,4.7,2.9,7,5
                                            c2.2,2.1,4.4,4.7,5.6,7.9c0.6,1.6,1,3.3,1.1,5.1c0.1,1.8-0.1,3.6-0.5,5.3s-1,3.4-1.8,5c-0.8,1.6-1.7,3.1-2.7,4.6
                                            c-2,2.9-4.4,5.6-6.8,8c-2.4,2.5-5,4.7-7.6,6.8c-0.6,0.5-1.3,1-1.9,1.5c-0.6,0.5-1.3,1-1.9,1.5c-1.3,0.9-2.5,1.9-3.8,2.7
                                            c-1.2,0.9-2.4,1.7-3.6,2.5c-1.2,0.8-2.3,1.5-3.4,2.2c-2.2,1.4-4.3,2.6-6.1,3.7c-1.8,1.1-3.5,2-4.8,2.8c-2.7,1.5-4.2,2.3-4.2,2.3
                                            l-0.3-0.5c0,0,1.5-0.9,4.1-2.5c1.3-0.8,2.9-1.8,4.7-2.9c1.8-1.1,3.8-2.4,6-3.9c1.1-0.7,2.2-1.5,3.4-2.3c1.2-0.8,2.3-1.6,3.6-2.5
                                            c1.2-0.9,2.4-1.8,3.7-2.7c0.6-0.5,1.2-1,1.9-1.5c0.6-0.5,1.3-1,1.9-1.5c2.5-2.1,5-4.3,7.4-6.7c2.4-2.4,4.6-5,6.6-7.9
                                            c0.9-1.4,1.8-2.9,2.5-4.4c0.7-1.5,1.3-3.1,1.7-4.7c0.4-1.6,0.5-3.2,0.4-4.8s-0.4-3.1-1-4.6c-1.1-2.9-3-5.4-5.1-7.4
                                            s-4.4-3.6-6.6-5c-2.2-1.3-4.3-2.4-6.3-3.3c-1.9-0.9-3.6-1.6-5.1-2.1c-1.4-0.5-2.6-0.9-3.3-1.1c-0.8-0.2-1.2-0.4-1.2-0.4
                                            L406.2,25z"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M386.9,23.1c0,0,76.3,21.3-20.1,75.5"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M416.4,29.1c0,0,0.4,0.1,1.2,0.2s1.9,0.4,3.3,0.7c1.4,0.4,3.1,0.8,5.1,1.5c1.9,0.7,4.1,1.6,6.3,2.8
                                            c2.2,1.2,4.6,2.7,6.6,4.9c1,1.1,2,2.3,2.7,3.7c0.8,1.4,1.3,3,1.5,4.6c0.2,1.6,0.1,3.3-0.2,5c-0.3,1.7-0.9,3.2-1.6,4.8
                                            c-1.5,3-3.5,5.8-5.7,8.4c-2.2,2.5-4.6,4.9-7.1,7.1s-5,4.2-7.5,6.1c-1.3,0.9-2.5,1.8-3.7,2.7c-0.6,0.4-1.2,0.9-1.8,1.3
                                            c-0.6,0.4-1.2,0.8-1.8,1.2c-1.2,0.8-2.4,1.6-3.5,2.3c-1.1,0.7-2.2,1.4-3.3,2.1c-2.1,1.3-4.1,2.5-5.9,3.5c-1.8,1-3.3,1.9-4.6,2.6
                                            c-2.6,1.4-4,2.2-4,2.2l-0.3-0.5c0,0,1.4-0.9,3.9-2.3c1.2-0.8,2.7-1.7,4.5-2.7c1.7-1.1,3.6-2.3,5.7-3.7c1-0.7,2.1-1.4,3.2-2.1
                                            s2.3-1.5,3.4-2.3c0.6-0.4,1.2-0.8,1.8-1.2c0.6-0.4,1.2-0.9,1.8-1.3c1.2-0.9,2.4-1.8,3.7-2.7c2.4-1.9,4.9-3.9,7.3-6.1
                                            s4.8-4.5,6.9-7c2.1-2.5,4-5.2,5.4-8c0.7-1.4,1.2-2.9,1.5-4.4c0.3-1.5,0.4-3,0.2-4.4c-0.2-1.4-0.6-2.8-1.3-4.1
                                            c-0.6-1.3-1.5-2.4-2.4-3.4c-1.9-2-4.1-3.5-6.2-4.8c-2.1-1.2-4.2-2.2-6-2.9c-1.9-0.8-3.5-1.3-4.9-1.7c-1.4-0.4-2.5-0.7-3.2-0.9
                                            c-0.8-0.2-1.2-0.3-1.2-0.3L416.4,29.1z"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M369.7,220.3c0,0-26.1-5.8-38-34.9"
              />
              <path
                className="st0"
                stroke="#fff"
                d="M373.9,217.6c0,0-26.1-5.8-38-34.9"
              />
              <g>
                <path
                  className="st0"
                  stroke="#fff"
                  d="M352.1,1.2c-0.2,0-0.3,0-0.3,0C351.9,1.2,352,1.2,352.1,1.2z"
                />

                <path
                  className="st0"
                  stroke="#fff"
                  d="M430.3,54.7c-3.5-25.3-9.6-28.9-17.4-32.7c-4.9-2.4-14.4-2.2-14.7-2.6c-0.7-0.7-1.8-1.3-2.7-2
                                                c-5-6.2-19-19.8-43.3-16.2c3-0.4,25.5-2.6,40.3,15.1c-0.3,0.2-0.5,0.4-0.7,0.6c-5.7-5.1-16.4-12.7-29.8-12.8
                                                c0,0,16.6,1.8,28.3,14.7c-0.2,0.1-0.3,0.3-0.5,0.4c-1.8,0.3-3.6,0.6-5.5,1.1c-5.5-5.7-19.2-18.9-39.8-8.2
                                                c-5.7-1.3-12.2-1-19.1,2.4c0,0-6,4.6-10.3,13.3c-1,0.5-2.1,1-3.1,1.6c0.3-0.7,0.5-1.4,0.9-2c1-2.2,2.3-4.4,3.8-6.5
                                                c0.4-0.5,0.8-1,1.2-1.5c0.4-0.5,0.9-1,1.3-1.5c0.8-1,1.8-1.8,2.7-2.8c0.2-0.2,0.5-0.4,0.7-0.6l0.8-0.6l0.8-0.6
                                                c0.3-0.2,0.5-0.4,0.8-0.6c0.5-0.4,1.1-0.7,1.6-1.1l0.8-0.6l0.8-0.5c1.1-0.6,2.2-1.3,3.4-1.8c1.1-0.5,2.3-1.1,3.4-1.5
                                                c2.3-1,4.6-1.6,6.7-2.3c1.1-0.3,2.2-0.5,3.2-0.8c0.3-0.1,0.5-0.1,0.8-0.2c0.3,0,0.5-0.1,0.8-0.1c0.5-0.1,1-0.2,1.5-0.3
                                                c1-0.2,1.9-0.4,2.8-0.5c0.9-0.1,1.8-0.2,2.6-0.3c0.8-0.1,1.6-0.2,2.2-0.3c0.7,0,1.3-0.1,1.9-0.1c2.3-0.1,3.6-0.2,3.6-0.2
                                                s-1.3,0-3.7,0c-0.6,0-1.2,0-1.9,0c-0.7,0-1.5,0.1-2.3,0.2c-0.8,0.1-1.7,0.1-2.6,0.2s-1.9,0.2-2.8,0.4c-0.5,0.1-1,0.1-1.5,0.2
                                                c-0.3,0-0.5,0.1-0.8,0.1c-0.3,0.1-0.5,0.1-0.8,0.2c-1.1,0.2-2.2,0.4-3.3,0.7c-2.2,0.6-4.6,1.2-6.9,2.1
                                                c-1.2,0.4-2.4,0.9-3.5,1.5c-1.2,0.5-2.3,1.2-3.5,1.8l-1,0.3l-0.8,0.5c-0.6,0.4-1.1,0.7-1.7,1.1c-0.6,0.4-1.1,0.8-1.6,1.2
                                                l-0.8,0.6c-0.3,0.2-0.5,0.4-0.8,0.6c-1,0.9-2,1.8-2.9,2.8c-0.5,0.5-0.9,1-1.4,1.5c-0.4,0.5-0.8,1.1-1.3,1.6
                                                c-1.6,2.1-3,4.4-4.1,6.7c-0.1,0.3-0.3,0.6-0.4,0.9s-0.2,0.6-0.4,0.9c-0.2,0.6-0.5,1.2-0.7,1.7c-0.1,0.3-0.2,0.6-0.3,0.8
                                                c-4.5,2.5-9.1,5.4-13.8,8.7c-5.9,4.2-12,8.5-18.3,12.9c-0.2,0-0.4,0-0.6,0.1l-1.2,0.1l-1.2,0.2c-1.6,0.2-3.1,0.5-4.7,0.9
                                                c-0.8,0.2-1.5,0.4-2.3,0.6c-0.7,0.2-1.5,0.4-2.2,0.6c-1.4,0.5-2.8,1-4,1.6c-0.3,0.1-0.6,0.3-0.9,0.4c-0.3,0.1-0.6,0.3-0.9,0.5
                                                s-0.6,0.3-0.8,0.5c-0.3,0.2-0.5,0.3-0.8,0.5s-0.5,0.3-0.7,0.5c-0.2,0.2-0.5,0.3-0.7,0.5c-0.4,0.3-0.9,0.6-1.2,1
                                                c-0.4,0.3-0.7,0.6-1,0.9s-0.5,0.6-0.8,0.9c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.2,0.4c-0.2,0.2-0.3,0.4-0.4,0.6
                                                c-0.2,0.3-0.3,0.5-0.3,0.5l0.4,0.3c0,0,0.1-0.1,0.4-0.4c0.1-0.1,0.3-0.3,0.4-0.5c0.1-0.1,0.2-0.2,0.3-0.3
                                                c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.5-0.5,0.8-0.8c0.3-0.3,0.7-0.5,1-0.8c0.4-0.3,0.8-0.5,1.2-0.8c0.2-0.1,0.4-0.3,0.7-0.4
                                                c0.2-0.1,0.5-0.3,0.7-0.4c0.3-0.1,0.5-0.3,0.8-0.4c0.3-0.1,0.5-0.2,0.8-0.4c0.3-0.1,0.6-0.3,0.9-0.4c0.3-0.1,0.6-0.2,0.9-0.3
                                                c1.2-0.4,2.6-0.8,3.9-1.1c0.7-0.2,1.4-0.3,2.1-0.4c0.7-0.1,1.5-0.2,2.2-0.3c0.8-0.1,1.7-0.2,2.5-0.3c-3.4,2.4-6.8,4.8-10.2,7.3
                                                c-0.7,0.2-1.4,0.3-2.1,0.5c-4.2,1-8.7,2.3-13.4,3.9c-4.7,1.6-9.5,3.7-14.3,6.2c-4.8,2.6-9.5,5.7-13.7,9.6
                                                c-4.2,3.8-8,8.5-10.6,13.7c-0.4,0.9-0.8,1.7-1.2,2.6c-10.1,0.5-20.9-2.5-13.9-20.7c0,0-12.7,15.9,1.9,23.9c3.7,2,6.9,2.9,9.8,3
                                                c-0.2,0.6-0.5,1.3-0.7,1.9c-0.4,0.3-0.8,0.7-1.2,1c-0.2,0.1-0.5,0.2-0.8,0.4c-2.6,1.2-5.7,2.7-9,4.2c-1.7,0.8-3.4,1.6-5.1,2.4
                                                c-1.8,0.8-3.5,1.7-5.3,2.8c-0.9,0.5-1.7,1.1-2.6,1.8c-0.8,0.7-1.6,1.4-2.3,2.4c-0.7,0.9-1.2,2.1-1.3,3.3
                                                c-0.2,1.2,0.1,2.4,0.5,3.4c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.2,0.4,0.3,0.6c0.2,0.4,0.4,0.8,0.6,1.2c0.2,0.4,0.4,0.8,0.6,1.1
                                                c0.1,0.2,0.2,0.3,0.2,0.5c-4.2,6.2-5.9,11.4-4.1,15.3c0.5,1,0.8,2.2,1.2,3.7c-5.1,5.6-9.7,9.9-13.1,12.9
                                                c-1.9,1.6-3.4,2.8-4.5,3.6s-1.7,1.2-1.7,1.1c0,0,0.6-0.3,1.7-1.1c1.1-0.8,2.7-1.9,4.6-3.5c3.4-2.8,8.1-7,13.2-12.3
                                                c0.7,3.4,1.1,7.8,1.3,12.8c-4.4,2.9-7.8,6.4-8.5,10.1c0,0,3.6-3.3,8.6-6.4c0.1,3.8,0.1,7.9,0.1,12.1c-1.5,2-2.2,4.3-1.7,7
                                                c0.4,2.1,0.9,4,1.5,5.7c-0.2,8.3-0.4,16.8-0.4,24.5c-2.1,3.5-5.1,7.1-8.7,7.1v0.5c0,0,0.5,0.1,1.4,0.1c1.8,0,4.8-0.3,7.4-1.8
                                                c0,1.8,0.1,3.5,0.2,5.2c-1.6,2.2-3.7,3.9-6.4,4.4l0.1,0.5c0.1,0,3.2-0.4,6.5-2.6c0.7,11.7,2.6,19.4,7.2,18.3
                                                c0.5-0.1,0.9,0.2,1.1,0.6c2,6.2,4.4,12.6,7.5,17.8c0.6,1,2.1,0.2,1.6-0.8c-0.8-1.9-1.6-4.2-2.1-6.7c-0.2-1.1,1.3-1.6,1.7-0.6
                                                c0.8,1.7,1.8,3.5,2.7,5.1c0.6,0.9,2,0.3,1.7-0.7c-0.9-3.1-1.8-7.3-1.8-10.4c0-0.7,0.9-1.2,1.5-0.7c2.9,2.1,10.4,7.4,17.7,13.3
                                                c0.9,0.7,2-0.5,1.2-1.4c-1.9-2-3.6-3.7-5-5.1c-0.7-0.7,0-1.8,0.9-1.6h0.1c0.9,0.3,1.5-0.7,1-1.4c-1.5-2-2.9-4.4-3.9-7.1
                                                c-2.8-8.2-17.3-43.3-9.4-56c0.1-0.2,0.2-0.4,0.1-0.6c-0.1-0.5-0.2-1.4-0.3-2.7c4.9-7.9,8.9-18.7,7.5-27c1.6-2.1,3.6-4,6-5.7
                                                c14.8-10.7,6.6-8.6,10.1,0c0.4,0.9,1.7,0.7,1.8-0.3c0-0.2,0-0.4,0.1-0.6c0.1-0.8,1.1-1,1.6-0.4c0.2,0.2,0.4,0.4,0.8,0.4
                                                c1.4,0,0.5-2.4,7.2-8.1c6.7-5.7,3.8-19.1,12.4-19.1c1.6,0,2.9-0.2,4.2-0.6c0.6-0.2,1.2,0.3,1.2,0.9c0,1.4-0.1,2.7-0.1,4.1
                                                c0,1.1,1.5,1.3,1.8,0.3c2.3-8.1,8.1-17.9,21.8-23.7c0.8-0.4,1.6,0.6,1.1,1.4c-2.3,3.3-6,9.7-7.5,17.6c-0.2,0.9,1,1.5,1.6,0.8
                                                c6.4-7.3,26.3-28.6,45.6-35.8c0.7-0.3,1.4,0.4,1.2,1.1c-1.8,6-7.4,26.2-7.3,41.8c0,1.2,1.7,1.2,1.8,0.1
                                                c0.3-3.3,0.9-6.9,2.1-10.3c0.4-1,1.9-0.7,1.8,0.4c-1,7.8-1,20.7,7.3,31.1c0.6,0.8,1.9,0.2,1.6-0.8c-1.9-7.6-5.4-24.9-1.6-34
                                                c0.4-0.9,1.8-0.6,1.8,0.4c0,2.6,0,6.4,0.2,10.7c0,0-0.5-12.3,8.5-16.4c8.7-3.9,4.5,56.2,31.9,67.8c0.8,0.3,1.6-0.5,1.2-1.3
                                                c-4-7.9-17.3-34.5-15.1-49.8c0.2-1.1,1.8-1,1.8,0.1c0.3,5.9,1.3,15.3,4.6,21.5c0.5,0.9,1.9,0.5,1.7-0.5
                                                c-1.3-11-3.1-42.9,18.1-59.1c6.8-5.2,11.8-10.3,15.5-14.9c0.2-0.2,0.5-0.4,0.8-0.3c39.6,3.7,42.3-9.7,42.3-9.7
                                                S439.5,63.8,430.3,54.7z M180.7,130.5c-0.2-0.4-0.3-0.8-0.5-1.2c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.1-0.4-0.2-0.5
                                                c-0.2-0.7-0.3-1.4-0.1-2.1c0.1-0.3,0.2-0.6,0.4-0.9s0.4-0.6,0.6-0.9c1-1.1,2.6-2,4.2-2.8c1.7-0.8,3.4-1.5,5.2-2.1
                                                c0.7-0.3,1.4-0.5,2.2-0.8c-4.5,4.5-8.3,8.7-11.2,12.6C180.8,131,180.8,130.8,180.7,130.5z M247.3,73.8c-0.1,0-0.1,0.1-0.2,0.1
                                                c-3.9,1.7-7.5,2.7-10.2,3.9c-3.8,1.7-19.4,13.6-24.8,21c-0.8,0.1-1.6,0.2-2.4,0.3c0.2-0.5,0.5-0.9,0.7-1.4
                                                c2.6-4.9,6.2-9.2,10.4-12.8c4.1-3.6,8.7-6.5,13.4-8.8c4.7-2.4,9.4-4.2,14-5.7c2.2-0.7,4.3-1.3,6.4-1.9
                                                C252.1,70.3,249.7,72.1,247.3,73.8z M338.9,19.1c0.8-1.3,2-2.7,3.6-4.2c0,0-0.3-1.8-2.4,0c-1,0.9-2.8,2.9-4.2,4.9
                                                c-5.6,1.5-11.6,3.6-17.9,6.5c4.3-7.6,11.5-14.1,23.4-12.5c0,0,4.6,0.7,10,3.3C347.5,17.5,343.3,18.1,338.9,19.1z M355.4,16.9
                                                c-3.2-2.1-6.8-3.8-10.8-4.8c5.3-2.1,21.5-6.6,36.6,8.2C375.6,18.3,366.7,16.4,355.4,16.9z"
                />
              </g>
            </g>
            <path
              className="st0"
              stroke="#fff"
              d="M393.5,39.2c0,0-8.6,31.9-30,44.8c-21.5,12.9-16.7,45.8-15.3,52"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M366.5,50.3c0,0-4.6,17.3-16.3,24.3c-11.6,7-9,24.8-8.3,28.1"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M336.9,51.7c0,0-11.2,15.7-25.5,18.4c-14.3,2.7-18.4,21.6-18.9,25.3"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M324,37.2c0,0-10.4,14.6-23.7,17.1c-13.3,2.5-17.1,20.1-17.6,23.5"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M244.6,120.3c0,0-10.9,15.3-24.9,17.9c-14,2.6-17.9,21-18.4,24.6"
            />
            <path
              className="st0"
              stroke="#fff"
              d="M249.5,84c0,0-10.4,14.6-23.7,17.1c-13.3,2.5-17.1,20.1-17.6,23.5"
            />
          </g>
        </g>
        <path
          className="st0"
          stroke="#fff"
          d="M435.7,498.6c-16.7-10.1-30.7-16.2-33.5-17.4c-0.3-0.1-0.5-0.4-0.5-0.8c-0.2-4.1-1.7-28.6,0,2.5
                                c1.9,32.9-38.8,27.1-40.9,26.8c-0.1,0-0.1,0-0.2,0c-68.4-25.4-96.4-55.2-108-76.6c-3.9-4.6-7.9-12.8-9.9-17.4
                                c-4.1,3.7-12.1,8.1-27.1,12.9c-33.3,9.2-94.6,64.7-138.4,123.9"
        />

        <path
          className="st0"
          stroke="#fff"
          d="M219.9,427.2c0,0,103.1,136.5,188.3,92.2c0,0,22.9-15,21.5-23.6l-28.1-14.8c0,0,5.9,39-47.7,27
                                c0,0-79.6-28.7-111.3-92.2c0,0-5,3.9-10.8,6.7C225.2,425.6,217.7,427.6,219.9,427.2z"
        />
        <path
          className="st0"
          stroke="url(#grad2)"
          d="M185.6,452.7c0,0-46.1,19.3-113.4,120.4"
        />
      </g>
    </svg>
  );
}
