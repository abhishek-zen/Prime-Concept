import heroImage from "@assets/generated_images/hero_image_of_senior_professionals_collaborating.png";
import architectImage from "@assets/generated_images/portrait_of_senior_woman_architect.png";
import financeImage from "@assets/generated_images/portrait_of_senior_man_finance_consultant.png";
import teacherImage from "@assets/generated_images/portrait_of_senior_woman_teacher.png";
import engineerImage from "@assets/generated_images/portrait_of_senior_man_engineer.png";

export interface Expert {
  id: string;
  name: string;
  title: string;
  category: string;
  bio: string;
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  image: string;
  skills: string[];
  verified: boolean;
  experience: number; // years
  availability: string;
}

export const CATEGORIES = [
  "All",
  "Education & Teaching",
  "Finance & Accounting",
  "Engineering & Architecture",
  "Human Resources",
  "Legal Advisory",
  "Business Strategy",
  "Mentorship",
];

export const EXPERTS: Expert[] = [
  {
    id: "1",
    name: "Dr. Eleanor Vance",
    title: "Retired Chief Architect",
    category: "Engineering & Architecture",
    bio: "Over 40 years of experience in sustainable urban planning and commercial architecture. Former Principal at Vance & Associates. Passionate about mentoring young architects and advising on green building certifications.",
    hourlyRate: 1200, // INR
    rating: 4.9,
    reviewCount: 84,
    image: architectImage,
    skills: [
      "Urban Planning",
      "Green Building",
      "LEED Certification",
      "Project Management",
    ],
    verified: true,
    experience: 42,
    availability: "Mon, Wed, Fri (Morning)",
  },
  {
    id: "2",
    name: "Mr. Rajesh Kumar",
    title: "Ex-CFO, MNC Manufacturing",
    category: "Finance & Accounting",
    bio: "Chartered Accountant with 35 years of corporate finance experience. I help small businesses streamline their cash flow, manage taxes, and prepare for audits without the jargon.",
    hourlyRate: 1500,
    rating: 4.8,
    reviewCount: 112,
    image: financeImage,
    skills: [
      "Taxation",
      "Auditing",
      "Cash Flow Management",
      "Financial Strategy",
    ],
    verified: true,
    experience: 35,
    availability: "Weekends & Evenings",
  },
  {
    id: "3",
    name: "Prof. Sarah Jenkins",
    title: "Retired University Dean",
    category: "Education & Teaching",
    bio: "Dedicated educator specializing in English Literature and Academic Writing. I offer personalized tutoring for college students and guidance on thesis writing.",
    hourlyRate: 800,
    rating: 5.0,
    reviewCount: 45,
    image: teacherImage,
    skills: [
      "Academic Writing",
      "English Literature",
      "Curriculum Design",
      "Thesis Guidance",
    ],
    verified: true,
    experience: 38,
    availability: "Flexible",
  },
  {
    id: "4",
    name: "Eng. Robert Chen",
    title: "Senior Civil Engineer",
    category: "Engineering & Architecture",
    bio: "Civil engineering consultant with a focus on structural integrity and infrastructure projects. I provide second opinions on construction plans and mentor junior site engineers.",
    hourlyRate: 1000,
    rating: 4.7,
    reviewCount: 29,
    image: engineerImage,
    skills: [
      "Structural Engineering",
      "Site Safety",
      "Infrastructure",
      "CAD Review",
    ],
    verified: true,
    experience: 30,
    availability: "Tuesday & Thursday",
  },
  {
    id: "5",
    name: "Ms. Anita Desai",
    title: "Former VP of Human Resources",
    category: "Human Resources",
    bio: "Helping startups build their first HR policies and culture codes. Expert in conflict resolution and executive coaching.",
    hourlyRate: 1800,
    rating: 4.9,
    reviewCount: 67,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop", // Stock fallback
    skills: [
      "Talent Acquisition",
      "Culture Building",
      "Conflict Resolution",
      "Executive Coaching",
    ],
    verified: true,
    experience: 28,
    availability: "Mon - Thu",
  },
  {
    id: "6",
    name: "Mr. David Wilson",
    title: "Retired Commercial Lawyer",
    category: "Legal Advisory",
    bio: "Specializing in contract law and small business compliance. I help freelancers and startups understand their legal standing without the expensive firm fees.",
    hourlyRate: 2000,
    rating: 4.6,
    reviewCount: 53,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // Stock fallback
    skills: ["Contract Law", "Compliance", "IP Rights", "Negotiation"],
    verified: true,
    experience: 33,
    availability: "By Appointment",
  },
];

export const REVIEWS = [
  {
    id: 1,
    user: "Priya M.",
    comment:
      "Dr. Vance's mentorship was invaluable for my final year architecture project. Her insights on sustainability saved me weeks of rework.",
    rating: 5,
  },
  {
    id: 2,
    user: "StartUp Inc.",
    comment:
      "Rajesh helped us clean up our books before our seed round. Highly professional and explained everything clearly.",
    rating: 5,
  },
  {
    id: 3,
    user: "Student123",
    comment:
      "Prof. Jenkins is so patient! My essay writing has improved significantly.",
    rating: 4.5,
  },
];
