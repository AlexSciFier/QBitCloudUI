import React, { useEffect, useState } from "react";
import Application from "../../api/applicationApi";

export default function About() {
  const [appVersion, setAppVersion] = useState();
  const [buildInfo, setBuildInfo] = useState({});
  useEffect(() => {
    Application.getVersion().then((res) => setAppVersion(res));
    Application.getBuildInfo().then((res) => setBuildInfo(res));
  }, []);

  return (
    <div>
      <div className="font-medium mt-3">QBitCloud UI</div>
      <div>v 1.0.2</div>
      <a
        className="text-primary hover:underline"
        href="https://github.com/AlexSciFier/QBitCloudUI"
      >
        GitHub
      </a>
      <div className="font-medium mt-3">Client version</div>
      <div>{appVersion}</div>
      <div className="font-medium mt-3">Build info</div>
      <div>
        {Object.entries(buildInfo).map((entry) => (
          <div key={entry[0]}>
            {entry[0]}: {entry[1]}
          </div>
        ))}
      </div>
    </div>
  );
}
