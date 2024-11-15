import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type WorkstreamItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  linkPrompt: string;
  url: string;
};

const WorkstreamList: WorkstreamItem[] = [
	{
		title: 'Standards Mapping',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
					This data exchange standard must be interoperable with industry specific data standards. 
					We're mapping relevant standards to understand where we need to de-duplicate and how to 
					translate between data formats. A set of standards included in our core schema will be updated in Q4 2024.
			</>
		),
		linkPrompt: "Submit a Standard",
		url: "https://docs.google.com/forms/d/e/1FAIpQLSf5iJlmyyYj1QY2tH6IUmVTZL4samFfFglrHXyIh6BDKDc-Qg/viewform",
	},
	{
		title: 'Public Policy',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				With CSRD, CSDDD, and more regulations rolling out around supply chain reporting, we're identifying and 
				prioritizing features that ease policy implementation for compliance.
			</>
		),
		linkPrompt: "Read our Notes",
		url: "https://docs.google.com/document/d/1GyaDlhWMihnFFSsaXjSPDomtiZm21AHKgRSo2vi5bQw/edit?tab=t.0",
	},
	{
		title: 'Stakeholder Journeys',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				For this exchange standard to benefit workers, civil society, corporations, and legislators alike, we're mapping 
				the design of onboarding, UI/UX, and moments of collaboration across the ecosystem of stakeholders.
			</>
		),
		linkPrompt: "Read the Known Barriers Report",
		url: "https://docs.google.com/document/d/1IUpzQHztTHuEZ-0yxOjVVZm33P7rOkc4Xq43D_1JmS8/edit?usp=sharing",
	},
	{
		title: 'Technical Requirements',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				API libraries scale up data harmonization and analysis to global level systems — we're building tools for more 
				efficient and de-duplicative reporting.
			</>
		),
		linkPrompt: "Review the Technical Draft",
		url: "https://github.com/opensupplyhub/supplychaindata.exchange",
	},
	{
		title: 'Governance',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				An open standard is shaped by its community of practitioners and we're designing governance mechanisms to ensure 
				that this standard remains inclusive and accessible to all.
			</>
		),
		linkPrompt: "Review Governance Model Draft",
		url: "https://docs.google.com/document/d/1m4GJPTr-9cg9yE2G0cyFhhNl5qFRK6j8phr9oVKKgg4/edit?tab=t.0",
	},
	{
		title: 'Add or join a workstream?',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<></>
		),
		linkPrompt: "Add the Calendar",
		url: "https://calendar.google.com/calendar/embed?src=c_fd4d5a796ed9aa10910af10faaed09247ccac713ef9b77cf4d7874db20304398%40group.calendar.google.com&ctz=America%2FNew_York",
	},
];

function Feature({title, Svg, description, url, linkPrompt}: WorkstreamItem) {
	return (
		<div className="col col--4" style={{padding: "8px"}}>
			<div className={clsx(`shadow--md ${styles.feature}`)}>
				<div className="text--center">
					<Svg className={styles.featureSvg} role="img" />
				</div>
				<div className='text--center'>
					<Heading as='h3'>{title}</Heading>
				</div>
				<div className='text--left padding-horiz--md'>
					<p>{description}</p>
				</div>
				<Link
					className="button button--primary button--lg"
                    style={{color: "white"}}
					to={url}>
					{linkPrompt}
				</Link>
			</div>
		</div>
	);
}

export default function AboutComponent(): JSX.Element {
  return (
    <section className={styles.features}>
        <Heading as="h1" className='text--center padding-horiz--lg'>
            In order to co-create and maintain an open exchange standard, we've activated these workstreams:
        </Heading>
		<div className="container">
			<div className="row">
				{WorkstreamList.map((props, idx) => (
					<Feature key={idx} {...props}/>
				))}
			</div>
		</div>
    </section>
  );
}
