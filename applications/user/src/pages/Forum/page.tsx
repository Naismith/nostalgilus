import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PATHS } from "src/constants";
import { ChildForum, Thread } from "./components";

const Forum = () => {
  const { id } = useParams();
  const [forum, setForum] = useState<any>(null);

  useEffect(() => {
    const main = async () => {
      if (id) {
        const response = await fetch(`/api/v0/forum/${id}`);
        const data = await response.json();
        setForum(data);
      }
    };

    main();
  }, [id]);

  console.log(forum);

  if (!forum) {
    return <div>loading</div>;
  }

  return (
    <div>
      <Link to={PATHS.HOME}>Back to home</Link>
      <h1>{forum.name}</h1>
      {(forum.children || []).map((childForum: any) => (
        <ChildForum key={childForum.id} forum={forum} />
      ))}
      {forum.threads.map((thread: any) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default Forum;
