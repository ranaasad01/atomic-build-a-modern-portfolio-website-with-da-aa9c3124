export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects-data";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title + " — Alex Morgan",
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 2);

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const related = relatedProjects.length > 0 ? relatedProjects : otherProjects;

  return <ProjectDetailClient project={project} relatedProjects={related} />;
}
