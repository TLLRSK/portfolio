import HeaderProject from "../../../components/headers/HeaderProject";

export default function ProjectTemplate() {
    return <section className="project">
        <article className="project__content">
            <HeaderProject/>
            <main className="project__main">
                <p>HERE GOES THE PROJECT MAIN CONTENT</p>
            </main>
        </article>
    </section>
}