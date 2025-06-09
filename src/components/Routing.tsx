import { Route, Routes } from "react-router";
// import { PageNotFound } from "../components";
import { AboutMe } from "../layout/sections/AboutMe";
import { Skills } from "../layout/sections/skills/Skills";
import { Projects } from "../layout/sections/projects/Projects";
import { Contacts } from "../layout/sections/contacts/Contacts";
import { Main } from "../layout/sections/main/Main";

export const Path = {
  Main: "/",
  AboutMe: "/aboutMe",
  Skills: "/skills",
  Projects: "/projects",
  Contacts: "/contacts",
  NotFound: "*",
} as const;

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Main} element={<Main />} />
      <Route path={Path.AboutMe} element={<AboutMe />} />
      <Route path={Path.Skills} element={<Skills />} />
      <Route path={Path.Projects} element={<Projects />} />
      <Route path={Path.Contacts} element={<Contacts />} />
      {/* <Route path={Path.NotFound} element={<PageNotFound />} /> */}
    </Routes>
  );
};
