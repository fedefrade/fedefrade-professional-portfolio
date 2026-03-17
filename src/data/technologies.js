/**
 * Technologies with display name, tags for filtering, and optional devicon (devicons.dev).
 * devicon: { name, version } - version is the SVG variant (original, plain, original-wordmark, plain-wordmark).
 * Tags: Development, Cloud, Database, Infrastructure, DevOps, Tooling, Blockchain, Management
 */
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

/**
 * Local icons in public/tech-logos. Key = technology id. Prefer SVG when both png and svg exist.
 */
const DOWNLOADED_ICONS = {
  aurora: '/tech-logos/aws-aurora-icon.svg',
  ec2: '/tech-logos/aws-ec2-icon.png',
  glacier: '/tech-logos/aws-glacier-icon.png',
  lambda: '/tech-logos/aws-lambda-icon.svg',
  s3: '/tech-logos/aws-s3-icon.svg',
  bash: '/tech-logos/bash-icon.png',
  ethers: '/tech-logos/ethers-seeklogo.svg',
  flask: '/tech-logos/flask-icon.svg',
  genexus: '/tech-logos/genexus-icon.png',
  looker: '/tech-logos/looker-icon.svg',
  web3: '/tech-logos/web3-icon.svg',
  ipfs: '/tech-logos/ipfs-icon.png',
}

export function getTechnologyIconUrl(techId, devicon) {
  if (DOWNLOADED_ICONS[techId]) return DOWNLOADED_ICONS[techId]
  if (!devicon) return null
  const { name, version = 'original' } = devicon
  return `${DEVICON_BASE}/${name}/${name}-${version}.svg`
}

/**
 * experience_time: string based on CV (MercadoLibre Dec 2017–Mar 2025, K2B Nov 2015–Dec 2017,
 * Freelance 2015, personal projects 2021–2022, 2025).
 * keywords: lowercase, no symbols; used for search. Includes tag names + frontend/backend + framework language (e.g. flask→python, react→javascript+nodejs).
 */
export const TECHNOLOGIES = [
  { id: 'nodejs', name: 'Node.js', tags: ['Development'], experience_time: '6+ years', keywords: ['development', 'backend'], devicon: { name: 'nodejs', version: 'original' } },
  { id: 'javascript', name: 'JavaScript', tags: ['Development'], experience_time: '6+ years', keywords: ['development', 'frontend', 'backend'], devicon: { name: 'javascript', version: 'original' } },
  { id: 'react', name: 'React.js', tags: ['Development'], experience_time: '6+ years', keywords: ['development', 'frontend', 'javascript', 'nodejs'], devicon: { name: 'react', version: 'original' } },
  { id: 'typescript', name: 'TypeScript', tags: ['Development'], experience_time: '4+ years', keywords: ['development', 'frontend', 'backend', 'javascript', 'nodejs'], devicon: { name: 'typescript', version: 'original' } },
  { id: 'python', name: 'Python', tags: ['Development'], experience_time: '6+ years', keywords: ['development', 'backend'], devicon: { name: 'python', version: 'original' } },
  { id: 'flask', name: 'Flask', tags: ['Development'], experience_time: '4+ years', keywords: ['development', 'backend', 'python'], devicon: { name: 'flask', version: 'original' } },
  { id: 'bash', name: 'Bash', tags: ['Development', 'DevOps'], experience_time: '7+ years', keywords: ['development', 'devops', 'backend'], devicon: { name: 'bash', version: 'original' } },
  // { id: 'sql', name: 'SQL', tags: ['Database'] },
  { id: 'aws', name: 'AWS', tags: ['Cloud'], experience_time: '5+ years', keywords: ['cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'mysql', name: 'MySQL', tags: ['Database'], experience_time: '5+ years', keywords: ['database', 'backend'], devicon: { name: 'mysql', version: 'original' } },
  { id: 'aurora', name: 'Amazon Aurora', tags: ['Database', 'Cloud'], experience_time: '3+ years', keywords: ['database', 'cloud', 'backend'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'documentdb', name: 'DocumentDB', tags: ['Database', 'Cloud'], experience_time: '3+ years', keywords: ['database', 'cloud', 'backend'], devicon: { name: 'mongodb', version: 'original' } },
  { id: 'mongodb', name: 'MongoDB', tags: ['Database'], experience_time: '3+ years', keywords: ['database', 'backend'], devicon: { name: 'mongodb', version: 'original' } },
  { id: 'terraform', name: 'Terraform', tags: ['Infrastructure', 'DevOps'], experience_time: '4+ years', keywords: ['infrastructure', 'devops', 'backend'], devicon: { name: 'terraform', version: 'original' } },
  { id: 'kubernetes', name: 'Kubernetes', tags: ['Infrastructure', 'DevOps'], experience_time: '4+ years', keywords: ['infrastructure', 'devops', 'backend'], devicon: { name: 'kubernetes', version: 'original' } },
  { id: 'docker', name: 'Docker', tags: ['Infrastructure', 'DevOps'], experience_time: '5+ years', keywords: ['infrastructure', 'devops', 'backend'], devicon: { name: 'docker', version: 'original' } },
  { id: 'github', name: 'GitHub', tags: ['Tooling'], experience_time: '7+ years', keywords: ['tooling'], devicon: { name: 'github', version: 'original' } },
  { id: 'jira', name: 'Jira', tags: ['Tooling', 'Management'], experience_time: '3+ years', keywords: ['tooling', 'management'], devicon: { name: 'jira', version: 'original' } },
  { id: 'trello', name: 'Trello', tags: ['Tooling', 'Management'], experience_time: '5+ years', keywords: ['tooling', 'management'], devicon: { name: 'trello', version: 'original' } },
  { id: 'looker', name: 'Looker', tags: ['Tooling'], experience_time: '2 years', keywords: ['tooling'], devicon: null },
  { id: 'solidity', name: 'Solidity', tags: ['Blockchain', 'Development'], experience_time: '2 years', keywords: ['blockchain', 'development', 'backend'], devicon: { name: 'solidity', version: 'original' } },
  { id: 'ethers', name: 'Ethers.js', tags: ['Blockchain', 'Development'], experience_time: '2 years', keywords: ['blockchain', 'development', 'backend'], devicon: null },
  { id: 'web3', name: 'Web3', tags: ['Blockchain'], experience_time: '2+ years', keywords: ['blockchain'], devicon: null },
  { id: 'ipfs', name: 'IPFS', tags: ['Blockchain', 'Infrastructure'], experience_time: '2 years', keywords: ['blockchain', 'infrastructure'], devicon: null },
  { id: 'jenkins', name: 'Jenkins', tags: ['DevOps', 'Tooling'], experience_time: '2+ years', keywords: ['devops', 'tooling', 'backend'], devicon: { name: 'jenkins', version: 'original' } },
  { id: 'linux', name: 'Linux', tags: ['Infrastructure'], experience_time: '7+ years', keywords: ['infrastructure', 'backend'], devicon: { name: 'linux', version: 'original' } },
  { id: 'lambda', name: 'AWS Lambda', tags: ['Cloud'], experience_time: '3+ years', keywords: ['cloud', 'backend'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 's3', name: 'Amazon S3', tags: ['Cloud'], experience_time: '4+ years', keywords: ['cloud', 'backend'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'ebs', name: 'Amazon EBS', tags: ['Cloud'], experience_time: '3+ years', keywords: ['cloud', 'backend'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'ec2', name: 'Amazon EC2', tags: ['Cloud'], experience_time: '4+ years', keywords: ['cloud', 'backend'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'glacier', name: 'AWS Glacier', tags: ['Cloud'], experience_time: '3+ years', keywords: ['cloud', 'backend'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'php', name: 'PHP', tags: ['Development'], experience_time: '1 year', keywords: ['development', 'backend'], devicon: { name: 'php', version: 'original' } },
  { id: 'java', name: 'Java', tags: ['Development'], experience_time: '2 years', keywords: ['development', 'backend'], devicon: { name: 'java', version: 'original' } },
  { id: 'genexus', name: 'GeneXus', tags: ['Development'], experience_time: '2 years', keywords: ['development', 'backend'], devicon: null },
  { id: 'tomcat', name: 'Apache Tomcat', tags: ['Infrastructure'], experience_time: '2 years', keywords: ['infrastructure', 'backend'], devicon: { name: 'tomcat', version: 'original' } },
  { id: 'railway', name: 'Railway', tags: ['Cloud', 'Infrastructure'], experience_time: '1 year', keywords: ['cloud', 'infrastructure'], devicon: { name: 'railway', version: 'original' } },
  { id: 'cloudflare', name: 'Cloudflare', tags: ['Infrastructure'], experience_time: '1 year', keywords: ['infrastructure'], devicon: { name: 'cloudflare', version: 'original' } },
]

export const TAG_LABELS = {
  Development: { en: 'Development', es: 'Desarrollo' },
  Cloud: { en: 'Cloud', es: 'Cloud' },
  Database: { en: 'Database', es: 'Base de datos' },
  Infrastructure: { en: 'Infrastructure', es: 'Infraestructura' },
  DevOps: { en: 'DevOps', es: 'DevOps' },
  Tooling: { en: 'Tooling', es: 'Herramientas' },
  Blockchain: { en: 'Blockchain', es: 'Blockchain' },
  Management: { en: 'Management', es: 'Gestión' },
}
