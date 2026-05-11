export const personalInfo = {
  name: 'Tohid Shaikh',
  title: 'Backend & ML Engineer',
  description: 'Backend and ML engineer with hands-on experience building distributed systems, LLM-integrated pipelines, and data-intensive applications. From encrypted payment meshes to custom vector databases — I build the infrastructure, not just the model.',
  email: 'shaikhtohid921@gmail.com',
  phone: '+91-9510944574',
  location: 'Dahod, Gujarat, India',
  github: 'https://github.com/T786-eng',
  linkedin: 'https://linkedin.com/in/shaikh-tohid',
}

export const stats = [
  { value: '5M+', label: 'Records Processed' },
  { value: '6', label: 'End-to-End Projects' },
  { value: '92%', label: 'Model Accuracy' },
  { value: '10x', label: 'Query Speedup' },
]

export const tickerItems = [
  'Python', 'Flask', 'REST APIs', 'SQLAlchemy', 'Multithreading', 'TCP/IP',
  'LLM Integration', 'RAG Pipelines', 'Vector Databases', 'Anthropic API',
  'Ollama', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'SMOTE',
  'Git', 'Streamlit', 'Distributed Systems', 'System Design', 'DSA', 'HNSW',
]

export const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'SQL', 'Bash'] },
  { category: 'Backend & Systems', items: ['Flask', 'REST APIs', 'SQLAlchemy', 'Multithreading', 'TCP/IP', 'Distributed Systems'] },
  { category: 'AI / LLM', items: ['LLM Integration', 'RAG Pipelines', 'Vector Databases', 'Anthropic Claude API', 'Ollama', 'Prompt Engineering'] },
  { category: 'ML & Data', items: ['Scikit-learn', 'Pandas', 'NumPy', 'TF-IDF', 'SMOTE', 'Random Forest', 'NLP'] },
  { category: 'Core CS', items: ['Data Structures & Algorithms', 'System Design', 'Scalable Architecture'] },
  { category: 'Tools', items: ['Git', 'Streamlit', 'Jupyter', 'Plotly', 'Matplotlib'] },
]

export const experience = [
  {
    role: 'ML Engineer Intern',
    company: 'Edunet Foundation × IBM SkillsBuild',
    period: 'Jan 2026 – Feb 2026',
    location: 'Gujarat, India',
    bullets: [
      'Built a Random Forest classification pipeline on 12K records, achieving 91.2% accuracy and 0.87 F1-score through structured feature engineering and cross-validated model selection.',
      'Designed modular preprocessing workflows using Pandas and Scikit-learn, eliminating data leakage and ensuring reproducibility across training and evaluation environments.',
    ],
  },
  {
    role: 'ML Engineer Intern',
    company: '3Skill',
    period: 'Dec 2025 – Jan 2026',
    location: 'Gujarat, India',
    bullets: [
      'Developed a fraud detection model on 20K+ imbalanced financial transactions; applied SMOTE oversampling to improve recall from 61% to 84%, reaching 92% accuracy and 0.89 ROC-AUC.',
      'Reduced false-negative rate by 38% through targeted feature selection and threshold tuning on skewed real-world transaction data.',
    ],
  },
]

export const projects = [
  {
    id: 1, number: '01', category: 'Backend Systems',
    title: 'UPI Offline Mesh',
    description: 'Offline UPI payment system using a gossip-based mesh network. Hybrid RSA-OAEP + AES-256-GCM encryption secures payment packets across virtual bridge nodes. Thread-safe idempotency cache with optimistic locking prevents duplicate settlements.',
    metrics: [{ value: 'RSA+AES', label: 'Hybrid Encryption' }, { value: '0 dupes', label: 'Idempotency' }, { value: 'Gossip', label: 'Mesh Protocol' }],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'RSA-OAEP', 'AES-256-GCM', 'Multithreading'],
    github: 'https://github.com/T786-eng/UPI_Without_Internet-main',
    live: null, featured: true,
  },
  {
    id: 2, number: '02', category: 'AI & ML',
    title: 'Vector Database + RAG Pipeline',
    description: 'Vector database from scratch with HNSW, KD-Tree, and Brute-Force search. Sub-200ms ANN query latency. RAG pipeline using Ollama for document-grounded question answering with semantic chunking and real-time concurrent retrieval.',
    metrics: [{ value: '<200ms', label: 'ANN Latency' }, { value: 'HNSW', label: 'Search Algo' }],
    stack: ['Python', 'Flask', 'HNSW', 'KD-Tree', 'Ollama', 'REST API'],
    github: 'https://github.com/T786-eng/Your-OWN-AI-Main',
    live: null, featured: false,
  },
  {
    id: 3, number: '03', category: 'Data Engineering',
    title: 'UIDAI Aadhaar — Project DRAM',
    description: '5M+ Aadhaar records across 12 data sources. 807 districts classified using Z-score anomaly detection and custom UER metric. 10x query speedup via vectorized boolean masking. Presented at UIDAI National Innovation Challenge 2026.',
    metrics: [{ value: '5M+', label: 'Records' }, { value: '10x', label: 'Speedup' }, { value: '807', label: 'Districts' }],
    stack: ['Python', 'Pandas', 'SciPy', 'Plotly', 'Streamlit'],
    github: 'https://github.com/T786-eng/Hackhathon--Project-DRAM--Dynamic-Resource-Allocation-Model-for-Aadhaar-Infrastructure',
    live: 'https://mcowodyfqqwzvh2h5bn5sr.streamlit.app/', featured: false,
  },
  {
    id: 4, number: '04', category: 'Systems & Networking',
    title: 'Deep Packet Inspection Engine',
    description: '10-module DPI engine parsing raw PCAP files across Ethernet/IP/TCP/UDP layers. 20+ apps detected via TLS SNI fingerprinting with stateful 5-tuple flow tracking. Multithreaded Reader → Load Balancer → Fast Path pipeline with consistent hashing.',
    metrics: [{ value: '20+', label: 'Apps Detected' }, { value: '10', label: 'Modules' }],
    stack: ['Python', 'Multithreading', 'TCP/IP', 'TLS', 'PCAP'],
    github: 'https://github.com/T786-eng/DPI-Engine---Deep-Packet-Inspection-System',
    live: null, featured: false,
  },
]

export const certifications = [
  {
    name: 'Introduction to AI & ML on Google Cloud',
    issuer: 'Google Cloud',
    date: 'Jan 27, 2026',
    badgeUrl: 'https://skills.google/public_profiles/b49f48e4-d78c-45c7-a5ba-824317bc1901/badges/21786088',
    verifyUrl: 'https://skills.google/public_profiles/b49f48e4-d78c-45c7-a5ba-824317bc1901/badges/21786088',
    badgeImg: '/badges/google-aiml.svg',
    color: '#4285F4',
  },
  {
    name: 'AI Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jan 29, 2026',
    badgeUrl: 'https://www.credly.com/earner/earned/badge/5d8d233a-0b69-4d80-a6d1-c82ddc0d138c',
    verifyUrl: 'https://www.credly.com/earner/earned/badge/5d8d233a-0b69-4d80-a6d1-c82ddc0d138c',
    badgeImg: '/badges/ibm-ai.svg',
    color: '#1F70C1',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 18, 2025',
    badgeUrl: 'https://www.credly.com/earner/earned/badge/01ffec18-4a76-4e58-a7fe-580389898f30',
    verifyUrl: 'https://www.credly.com/earner/earned/badge/01ffec18-4a76-4e58-a7fe-580389898f30',
    badgeImg: '/badges/cisco-py1.svg',
    color: '#1BA0D7',
  },
  {
    name: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 21, 2025',
    badgeUrl: 'https://www.credly.com/earner/earned/badge/779225d4-d278-4149-9b63-25717b41f033',
    verifyUrl: 'https://www.credly.com/earner/earned/badge/779225d4-d278-4149-9b63-25717b41f033',
    badgeImg: '/badges/cisco-py2.svg',
    color: '#1BA0D7',
  },
  {
    name: 'McKinsey Forward Program',
    issuer: 'McKinsey.org',
    date: 'Dec 10, 2025',
    badgeUrl: 'https://www.credly.com/earner/earned/badge/19b4022e-51b8-49c7-9b7e-ff2a5ff7881b',
    verifyUrl: 'https://www.credly.com/earner/earned/badge/19b4022e-51b8-49c7-9b7e-ff2a5ff7881b',
    badgeImg: '/badges/mckinsey.svg',
    color: '#00A3E0',
  },
]
