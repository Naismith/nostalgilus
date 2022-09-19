import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "src/constants";

const Forum = ({ forum }: { forum: any }) => (
  <div>
    <p>{forum.name}</p>
    <ul>
      {forum.children.map((childForum: any) => (
        <li key={childForum.id}>
          <Link to={PATHS.FORUM(childForum.id)}>{childForum.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const HomePage = () => {
  const [forums, setForums] = useState<any[]>([]);

  useEffect(() => {
    const main = async () => {
      const response = await fetch("/api/v0/forums/");
      const data = await response.json();
      setForums(data.forums);
    };

    main();
  }, []);

  return (
    <div>
      {forums.map((forum) => (
        <Forum key={forum.id} forum={forum} />
      ))}
    </div>
  );
};

export default HomePage;
