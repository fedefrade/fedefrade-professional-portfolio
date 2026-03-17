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

export const TECHNOLOGIES = [
  { id: 'nodejs', name: 'Node.js', tags: ['Development'], devicon: { name: 'nodejs', version: 'original' } },
  { id: 'javascript', name: 'JavaScript', tags: ['Development'], devicon: { name: 'javascript', version: 'original' } },
  { id: 'react', name: 'React.js', tags: ['Development'], devicon: { name: 'react', version: 'original' } },
  { id: 'typescript', name: 'TypeScript', tags: ['Development'], devicon: { name: 'typescript', version: 'original' } },
  { id: 'python', name: 'Python', tags: ['Development'], devicon: { name: 'python', version: 'original' } },
  { id: 'flask', name: 'Flask', tags: ['Development'], devicon: { name: 'flask', version: 'original' } },
  { id: 'bash', name: 'Bash', tags: ['Development', 'DevOps'], devicon: { name: 'bash', version: 'original' } },
  // { id: 'sql', name: 'SQL', tags: ['Database'] },
  { id: 'aws', name: 'AWS', tags: ['Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'mysql', name: 'MySQL', tags: ['Database'], devicon: { name: 'mysql', version: 'original' } },
  { id: 'aurora', name: 'Amazon Aurora', tags: ['Database', 'Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'documentdb', name: 'DocumentDB', tags: ['Database', 'Cloud'], devicon: { name: 'mongodb', version: 'original' } },
  { id: 'mongodb', name: 'MongoDB', tags: ['Database'], devicon: { name: 'mongodb', version: 'original' } },
  { id: 'terraform', name: 'Terraform', tags: ['Infrastructure', 'DevOps'], devicon: { name: 'terraform', version: 'original' } },
  { id: 'kubernetes', name: 'Kubernetes', tags: ['Infrastructure', 'DevOps'], devicon: { name: 'kubernetes', version: 'original' } },
  { id: 'docker', name: 'Docker', tags: ['Infrastructure', 'DevOps'], devicon: { name: 'docker', version: 'original' } },
  { id: 'github', name: 'GitHub', tags: ['Tooling'], devicon: { name: 'github', version: 'original' } },
  { id: 'jira', name: 'Jira', tags: ['Tooling', 'Management'], devicon: { name: 'jira', version: 'original' } },
  { id: 'trello', name: 'Trello', tags: ['Tooling', 'Management'], devicon: { name: 'trello', version: 'original' } },
  { id: 'looker', name: 'Looker', tags: ['Tooling'] },
  { id: 'solidity', name: 'Solidity', tags: ['Blockchain', 'Development'], devicon: { name: 'solidity', version: 'original' } },
  { id: 'ethers', name: 'Ethers.js', tags: ['Blockchain', 'Development'] },
  { id: 'web3', name: 'Web3', tags: ['Blockchain'] },
  { id: 'ipfs', name: 'IPFS', tags: ['Blockchain', 'Infrastructure'] },
  { id: 'jenkins', name: 'Jenkins', tags: ['DevOps', 'Tooling'], devicon: { name: 'jenkins', version: 'original' } },
  { id: 'linux', name: 'Linux', tags: ['Infrastructure'], devicon: { name: 'linux', version: 'original' } },
  { id: 'lambda', name: 'AWS Lambda', tags: ['Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 's3', name: 'Amazon S3', tags: ['Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'ebs', name: 'Amazon EBS', tags: ['Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'ec2', name: 'Amazon EC2', tags: ['Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'glacier', name: 'AWS Glacier', tags: ['Cloud'], devicon: { name: 'amazonwebservices', version: 'plain-wordmark' } },
  { id: 'php', name: 'PHP', tags: ['Development'], devicon: { name: 'php', version: 'original' } },
  { id: 'java', name: 'Java', tags: ['Development'], devicon: { name: 'java', version: 'original' } },
  { id: 'genexus', name: 'GeneXus', tags: ['Development'] },
  { id: 'tomcat', name: 'Apache Tomcat', tags: ['Infrastructure'], devicon: { name: 'tomcat', version: 'original' } },
  { id: 'railway', name: 'Railway', tags: ['Cloud', 'Infrastructure'], devicon: { name: 'railway', version: 'original' } },
  { id: 'cloudflare', name: 'Cloudflare', tags: ['Infrastructure'], devicon: { name: 'cloudflare', version: 'original' } },
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
