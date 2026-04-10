import AiDataCard from "@/components/AiDataCard";
import Image from "next/image";
import Link from "next/link";

const aiTechData = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Conversational AI",
    description:
      "An advanced AI chatbot capable of understanding and generating human-like text for conversations, coding help, and content creation.",
    company: "OpenAI",
    year: 2022,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 2,
    name: "Tesla Autopilot",
    category: "Autonomous Driving",
    description:
      "AI-powered driver assistance system enabling self-driving features using computer vision and deep learning.",
    company: "Tesla",
    year: 2016,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 3,
    name: "Google Bard (Gemini)",
    category: "Generative AI",
    description:
      "Google’s AI model designed for reasoning, content generation, and multimodal understanding across apps.",
    company: "Google",
    year: 2023,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 4,
    name: "Midjourney",
    category: "AI Image Generation",
    description:
      "AI tool that creates stunning artwork and images from text prompts using generative diffusion models.",
    company: "Midjourney Inc.",
    year: 2022,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 5,
    name: "IBM Watson",
    category: "AI Analytics",
    description:
      "Enterprise AI platform used for data analysis, healthcare insights, and business automation.",
    company: "IBM",
    year: 2011,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 6,
    name: "Amazon Alexa",
    category: "Voice Assistant",
    description:
      "AI voice assistant that performs tasks, answers queries, and controls smart home devices.",
    company: "Amazon",
    year: 2014,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 7,
    name: "DeepMind AlphaFold",
    category: "AI in Healthcare",
    description:
      "AI system that predicts protein structures, revolutionizing biological research and drug discovery.",
    company: "DeepMind",
    year: 2020,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 8,
    name: "Grammarly AI",
    category: "Writing Assistant",
    description:
      "AI-powered writing assistant that checks grammar, clarity, tone, and style in real time.",
    company: "Grammarly",
    year: 2009,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 9,
    name: "Adobe Firefly",
    category: "Creative AI",
    description:
      "Generative AI for designers to create images, text effects, and creative assets quickly.",
    company: "Adobe",
    year: 2023,
    image: "https://i.ibb.co.com/PBkQBDG/email.webp",
  },
  {
    id: 10,
    name: "GitHub Copilot",
    category: "AI Coding Assistant",
    description:
      "AI pair programmer that suggests code snippets and functions directly inside your editor.",
    company: "GitHub",
    year: 2021,
    image: "",
  },
];


export const metadata = {
  title: 'Ai data',
  description: 'Effective Ai from nawadays',
}


export default function Home() {

  console.log()
  return (
    <>

      <div className="space-y-10 container mx-auto mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            aiTechData.map(techData => <AiDataCard key={techData.id} techData={techData} />)
          }
        </div>
      </div>

    </>
  );
}
