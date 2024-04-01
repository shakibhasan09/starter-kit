import { Content } from "@/components/shared/content";
import { Header } from "@/components/shared/header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const ProjectsPage = () => {
    return (
        <>
            <Header>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                    Dashboard
                </h1>
            </Header>
            <Content>hello</Content>
        </>
    );
};

export const Route = createLazyFileRoute("/__authenticated/projects/")({
    component: ProjectsPage,
});
