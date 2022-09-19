import React, { useEffect, useState } from "react";

const Forum = ({ forum }: { forum: any }) => (
  <div>
    <p>{forum.name}</p>
    <ul>
      {forum.children.map((childForum: any) => (
        <li key={childForum.id}>{childForum.name}</li>
      ))}
    </ul>
  </div>
);

const App = () => {
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

export default App;
