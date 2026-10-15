// All site content lives here. Edit these arrays to update the website.
// Later, replace with fetch() calls to a CMS or API without changing components.

export const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/scholars', label: 'Scholars' },
  { to: '/events', label: 'Events' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/resources', label: 'Resources' },
  { to: '/news', label: 'News' },
]

export const stats = [
  { value: '5,000+', label: 'Scholars' },
  { value: '40+', label: 'Countries' },
  { value: '200+', label: 'Research projects' },
  { value: '120', label: 'Events held' },
]

export const areas = [
  { name: 'AI and Machine Learning', text: 'Models, methods and responsible deployment.' },
  { name: 'Data Science', text: 'Statistics, data engineering and open datasets.' },
  { name: 'Health and Medicine', text: 'Public health, clinical research and biotech.' },
  { name: 'Sustainability', text: 'Climate, energy and resilient food systems.' },
  { name: 'Social Sciences', text: 'Education, policy, economics and society.' },
  { name: 'Engineering', text: 'Materials, robotics and sustainable infrastructure.' },
]

export const scholars = [
  { id: 'amina-rahman', name: 'Dr. Amina Rahman', role: 'Computational Biologist', country: 'Bangladesh', area: 'Health and Medicine', interests: ['Genomics', 'Machine learning', 'Drug discovery'], bio: 'Amina studies how machine learning can speed up the search for treatments for neglected diseases. She mentors early-career researchers in the IRSC community.' },
  { id: 'daniel-okafor', name: 'Dr. Daniel Okafor', role: 'Climate Data Scientist', country: 'Nigeria', area: 'Sustainability', interests: ['Climate models', 'Remote sensing', 'Agriculture'], bio: 'Daniel builds open datasets that help farming communities plan for changing rainfall. His work combines satellite imagery with local field records.' },
  { id: 'li-wei', name: 'Prof. Li Wei', role: 'Machine Learning Researcher', country: 'China', area: 'AI and Machine Learning', interests: ['Language models', 'Evaluation', 'Fairness'], bio: 'Li leads a lab on evaluating language models across languages. He co-chairs the IRSC reading group on trustworthy AI.' },
  { id: 'sofia-marin', name: 'Dr. Sofia Marin', role: 'Education Researcher', country: 'Spain', area: 'Social Sciences', interests: ['Learning science', 'Policy', 'Equity'], bio: 'Sofia researches how schools adopt new technology and what that means for equity. She edits the IRSC guide to writing policy briefs.' },
  { id: 'hassan-ali', name: 'Dr. Hassan Ali', role: 'Materials Engineer', country: 'Pakistan', area: 'Engineering', interests: ['Solar cells', 'Nanomaterials', 'Energy storage'], bio: 'Hassan develops low-cost materials for solar panels and batteries. He runs IRSC workshops on lab writing and grant proposals.' },
  { id: 'maya-patel', name: 'Maya Patel', role: 'PhD Candidate, Public Health', country: 'India', area: 'Health and Medicine', interests: ['Epidemiology', 'Maternal health', 'Biostatistics'], bio: 'Maya analyses maternal health outcomes across South Asia. She is the student representative on the IRSC leadership team.' },
]

export const projects = [
  { id: 1, title: 'Open Rainfall Atlas', area: 'Sustainability', summary: 'A community-built dataset of rainfall and crop yields across 14 countries.', lead: 'Dr. Daniel Okafor', year: 2026 },
  { id: 2, title: 'Multilingual Model Benchmarks', area: 'AI and Machine Learning', summary: 'Evaluation tasks for language models in 30 under-resourced languages.', lead: 'Prof. Li Wei', year: 2026 },
  { id: 3, title: 'Maternal Health Observatory', area: 'Health and Medicine', summary: 'Shared methods for tracking maternal outcomes in low-resource settings.', lead: 'Maya Patel', year: 2025 },
  { id: 4, title: 'Low-Cost Perovskite Cells', area: 'Engineering', summary: 'Testing stable solar materials that can be made with local supply chains.', lead: 'Dr. Hassan Ali', year: 2025 },
]

export const publications = [
  { id: 1, title: 'Evaluating language models beyond English', authors: 'Li, W., Marin, S.', venue: 'Journal of Computational Linguistics', year: 2026 },
  { id: 2, title: 'Satellite-derived rainfall estimates for smallholder farms', authors: 'Okafor, D., Rahman, A.', venue: 'Environmental Data Science', year: 2026 },
  { id: 3, title: 'Policy adoption of classroom technology: a six-country study', authors: 'Marin, S.', venue: 'Education Policy Review', year: 2025 },
]

export const events = [
  { id: 1, title: 'IRSC Global Research Conference 2026', type: 'Conference', date: '2026-11-18', place: 'Online and Istanbul', text: 'Three days of talks, posters and peer feedback sessions.' },
  { id: 2, title: 'Writing a Strong Grant Proposal', type: 'Workshop', date: '2026-11-05', place: 'Online', text: 'A hands-on session with funded researchers and reviewers.' },
  { id: 3, title: 'Open Data in Practice', type: 'Webinar', date: '2026-10-28', place: 'Online', text: 'How to publish datasets others can find, cite and reuse.' },
  { id: 4, title: 'Trustworthy AI Reading Group', type: 'Seminar', date: '2026-12-02', place: 'Online', text: 'Monthly discussion of one paper, led by a community member.' },
]

export const opportunities = [
  { id: 1, title: 'IRSC Early-Career Fellowship', type: 'Fellowship', deadline: '2026-12-15', org: 'IRSC', text: 'Twelve months of mentoring and a research stipend for early-career scholars.' },
  { id: 2, title: 'Global South Research Scholarship', type: 'Scholarship', deadline: '2026-12-01', org: 'Partner universities', text: "Tuition support for master's and PhD students." },
  { id: 3, title: 'Summer Research Internship', type: 'Internship', deadline: '2027-02-10', org: 'IRSC partner labs', text: 'Ten-week placements in partner research labs.' },
  { id: 4, title: 'Open Science Seed Grants', type: 'Grant', deadline: '2027-01-20', org: 'IRSC', text: 'Small grants for open datasets, tools and replication studies.' },
  { id: 5, title: 'Call for Papers: IRSC Proceedings', type: 'Call for papers', deadline: '2026-11-30', org: 'IRSC', text: 'Submit full papers or extended abstracts for peer review.' },
]

export const resources = [
  { group: 'Research guides', items: ['How to read a paper in 30 minutes', 'Writing a literature review', 'Choosing a research question'] },
  { group: 'Journals', items: ['Directory of open-access journals', 'Spotting predatory journals', 'Where to publish your first paper'] },
  { group: 'Tools', items: ['Reference managers compared', 'Reproducible notebooks', 'Survey and interview tools'] },
  { group: 'Datasets', items: ['Open datasets by discipline', 'Citing a dataset', 'Data management plan template'] },
  { group: 'Learning', items: ['Free statistics courses', 'Academic English for researchers', 'Presenting at conferences'] },
]

export const news = [
  { id: 'conference-announced', title: 'Global Research Conference 2026 opens registration', date: '2026-10-08', summary: 'Registration is open for the three-day conference in November.', body: 'Registration is now open for the IRSC Global Research Conference. The programme includes keynote talks, parallel sessions, a poster hall and a mentoring day for early-career researchers. Members receive reduced fees and can apply for travel support.' },
  { id: 'fellowship-call', title: 'Early-Career Fellowship call is live', date: '2026-10-01', summary: 'Applications close on 15 December.', body: 'The fellowship supports twelve months of research and mentoring. Applicants submit a two-page proposal, a CV and one reference. Selected fellows are paired with a senior scholar from the community.' },
  { id: 'rainfall-atlas', title: 'Open Rainfall Atlas reaches 14 countries', date: '2026-09-20', summary: 'The community dataset now covers more farming regions.', body: 'The Open Rainfall Atlas has grown to cover 14 countries after new contributions from members in East Africa and South Asia. The data is free to download and cite.' },
]

export const testimonials = [
  { quote: 'IRSC connected me with a co-author on another continent. Our paper started from one conversation in the community forum.', name: 'Maya Patel', role: 'PhD Candidate, India' },
  { quote: 'The grant workshop changed how I write proposals. I secured my first funding six months later.', name: 'Dr. Hassan Ali', role: 'Materials Engineer, Pakistan' },
  { quote: 'Reviewers in the reading group give honest and kind feedback. It is the best place to test early ideas.', name: 'Dr. Sofia Marin', role: 'Education Researcher, Spain' },
]
