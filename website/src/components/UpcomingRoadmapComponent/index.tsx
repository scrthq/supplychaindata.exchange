import Link from '@docusaurus/Link';
import styles from './styles.module.css'

type RoadmapItem = {
    title: string;
    description: JSX.Element;
    prompt: string;
    url: string;
}

const RoadmapList : RoadmapItem[] = [
    {
        title: "Q4 2024",
        description: (
            <>
                We'll be finalizing a list of location and organization identification and affiliation types to publish in Q4. 
                Contribute by submitting a standard!
            </>
        ),
        prompt: "Submit a Standard",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSf5iJlmyyYj1QY2tH6IUmVTZL4samFfFglrHXyIh6BDKDc-Qg/viewform",
    },
    {
        title: "Q4 2024 - Q1 2025 +",
        description: (
            <>
                We're also looking for partners to pilot the core schema and build extensions with. Please send shuya@opensupplyhub.org 
                an email with interest.
            </>
        ),
        prompt: "Setup a Call",
        url: "https://calendar.app.google/UYyr5qPvNd3RLn5K6",
    },
    {
        title: "Q1 2025",
        description: (
            <>
                In partnership with IEEE, we'll be hosting a hackathon to build out demos, tools, and extensions for SC-DEX. 
                Read more about the event and how to get involved.
            </>
        ),
        prompt: "Hackathon One Pager",
        url: "https://docs.google.com/document/d/1IRwKWZGFK8UZV21PYrqWcKy0JQi__W-A4MKd7MVd62w/edit?tab=t.0",
    },
    {
        title: "Q2 2025",
        description: (
            <>
                From now through Q1, our initial advisory board will be guiding the process for nominating and electing our 
                governance board. Please review the model if interested in joining!
            </>
        ),
        prompt: "Review Governance Model",
        url: "https://docs.google.com/document/d/1m4GJPTr-9cg9yE2G0cyFhhNl5qFRK6j8phr9oVKKgg4/edit?tab=t.0",
    },
];

function Roadmap({title, description, prompt, url} : RoadmapItem) {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
            <Link
                className=""
                to={url}>
                    {prompt}
            </Link>
        </div>
    );
}

export default function UpcomingRoadmapComponent() {
    return (
        <div className='container'>
            {
                RoadmapList.map((props, idx) => (
                    <Roadmap key={idx} {...props}/>
                ))
            }
        </div>
    );
}