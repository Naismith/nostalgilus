import React, { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "src/constants";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Forum = ({ forum }: { forum: any }) => {
  const id = useId();
  return (
    <Accordion defaultExpanded disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={id}
      >
        <p>{forum.name}</p>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {forum.children.map((childForum: any) => (
            <li key={childForum.id}>
              <Link to={PATHS.FORUM(childForum.id)}>{childForum.name}</Link>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

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
