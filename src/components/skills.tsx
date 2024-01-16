import SectionContent from "@/components/section-content";
import SectionHeader from "@/components/section-header";

export default function Skills() {
  return (
    <section className="p-2 px-4 rounded-md bg-slate-200 w-auto lg:w-2/5 print:w-2/5">
      <SectionHeader>Skills</SectionHeader>
      <SectionContent>
        <ul className="list-disc list-outside">
          <li>Expert in JavaScript/TypeScript/ES6 and
            frameworks/libraries like React (Redux, MobX,
            react-query)</li>
          <li>Unit tests with Jest, End-to-end tests with Cypress</li>
          <li>Working with REST and GraphQL APIs</li>
          <li>CI/CD with Github Actions, Bitbucket CI, Circle CI</li>
          <li>Broad experience in HTML5/ CSS3 cross-browser
            development, since IE6</li>
          <li>Good at implementing mobile-first responsive
            solutions</li>
          <li>Build tools like webpack, grunt, gulp</li>
          <li>Version control tools like git, mercurial and
            subversion</li>
          <li>Experienced user of linux/unix CLI</li>
          <li>Experienced Docker user</li>
          <li>Node.js if I need to go fullstack</li>
          <li>React Native if I need to go mobile</li>
          <li>Basic knowledge of other Web Development
            technologies / programming languages — Ruby on
            Rails, Python, PHP, MySQL, Mongo, Docker, Rancher,
            Kubernetes</li>
        </ul>
      </SectionContent>
      <SectionHeader>Languages</SectionHeader>
      <SectionContent>
        <ul>
          <li>English — fluent</li>
          <li>Ukrainian — native</li>
          <li>Dutch - A2</li>
        </ul>
      </SectionContent>
    </section>
  )
}