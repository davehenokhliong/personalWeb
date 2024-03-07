import Image from "next/image";
import { GitHubIcon, GmailIcon, LinkedinIcon } from "components/icons";
import ExperienceButton from "components/buttons/experienceButton";
import ProjectButton from "components/buttons/projectButton";
import ResumeButton from "components/buttons/resumeButton";
import AcademicButton from "components/buttons/academicButton";
import headshot from '../public/headshot.jpg'


export const revalidate = 60;

export default async function HomePage() {
  return (
    <>
      <section>
        <h1 className="font-bold text-3xl font-serif">Dave Henokh Liong</h1>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          Hi! I'm Dave, a penultimate student studying{" "}
          <a rel="noopener noreferrer" target="_blank "className="text-orange-300 hover:text-orange-400" href="https://www.eee.hku.hk/">
            Electronics Engineering focusing on Data & AI Systems
          </a> 
          {" "}in{" "}
          <a rel="noopener noreferrer" target="_blank " className="text-orange-300 hover:text-orange-400" href="https://www.hku.hk/">
            The University of Hong Kong
          </a>.
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt="Dave Henokh Liong"
            className="rounded-full"
            src={headshot}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://linkedin.com/in/dave-henokh-liong/"
              className="flex items-center gap-2">
              <LinkedinIcon />
              linkedin.com/in/dave-henokh-liong/
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/davehenokhliong"
              className="flex items-center gap-2">
              <GitHubIcon />
              github.com/davehenokhliong
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:davehenokhn@gmail.com"
              className="flex items-center gap-2">
              <GmailIcon />
              davehenokh@gmail.com
            </a>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          I'm really passionate in coding, especially in the fields of{" "}
          <strong>AGI and webdev</strong>.
          I enjoy building chatbots, sites, & SaaS. Take a look at my projects!
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <ExperienceButton />
          <ProjectButton />
          <AcademicButton />
          <ResumeButton />
        </ul>
      </section>
    </>
  );
}
