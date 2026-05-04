import {
  SiPython, SiJavascript, SiPostgresql,
  SiScikitlearn, SiPytorch, SiTensorflow,
  SiLangchain, SiFastapi, SiDocker,
  SiGithub, SiHuggingface,
  SiStreamlit, SiLinux,
} from 'react-icons/si'
import { FaBrain, FaAws } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

export const skillCategories = [
  {
    label: 'AI / Machine Learning',
    color: 'blue',
    skills: [
      { name: 'Machine Learning', icon: FaBrain },
      { name: 'Deep Learning', icon: SiPytorch },
      { name: 'LLM Applications', icon: FaBrain },
      { name: 'NLP', icon: FaBrain },
      { name: 'Prompt Engineering', icon: TbApi },
      { name: 'RAG Systems', icon: FaBrain },
    ],
  },
  {
    label: 'Frameworks & Tools',
    color: 'violet',
    skills: [
      { name: 'LangChain', icon: SiLangchain },
      { name: 'LangGraph', icon: SiLangchain },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'HuggingFace', icon: SiHuggingface },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Scikit-learn', icon: SiScikitlearn },
    ],
  },
  {
    label: 'Programming',
    color: 'emerald',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    label: 'Deployment & Cloud',
    color: 'orange',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub', icon: SiGithub },
      { name: 'CI/CD', icon: TbApi },
      { name: 'REST APIs', icon: TbApi },
      { name: 'MLflow', icon: FaBrain },
    ],
  },
]
