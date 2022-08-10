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
      <a className="text-primary hover:underline" href="/">
        GitHub
      </a>
      <div className="font-medium mt-3">Version</div>
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
