"use client";

import AIChatbot from "../../../content/projects/AIChatbot.mdx";
import BBD from "../../../content/projects/BBD.mdx";
import SharePrompts from "../../../content/projects/SharePrompts.mdx";
import WebDevelopment from "../../../content/projects/WebDevelopment.mdx";
import MustiMusik from "../../../content/projects/MustiMusik.mdx";
import ProjectButton from "components/buttons/projectButton";

export default function Project({ params }) {
  return (
    <>
      <div className="font-bold text-3xl font-serif max-w-[650px]"></div>
      <article className="prose dark:prose-invert prose-lg prose-headings:text-green-500">
        {params.id == "Web%20Development%20Projects" && <WebDevelopment />}
        {params.id == "AI%20Chatbot" && <AIChatbot />}
        {params.id == "Share%20Prompts" && <SharePrompts />}
        {params.id == "BBD" && <BBD />}
        {params.id == "Musti%20Musik" && <MustiMusik />}
      </article>
      <br />
      <ProjectButton />
    </>
  );
}
