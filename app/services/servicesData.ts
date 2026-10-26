export type ServiceType =
  | "free"
  | "paid"
  | "eligibility"
  | "enquiry";

export type ServiceAudience = "individual" | "business";

export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  duration: number;
  type: ServiceType;
  audience: ServiceAudience;
  price: number;
  description: string;
  idealFor: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "career-guidance",
    number: "01",
    title: "SAP Career Guidance",
    category: "Career Guidance",
    duration: 30,
    type: "free",
    audience: "business",
    price: 0,
    description:
      "Get guidance on SAP career paths, required skills, certifications, and opportunities.",
    idealFor: "Students and professionals exploring SAP careers.",
    image: "/Service-images/career-guidance.png",
    features: [
      "Career path discussion",
      "SAP module recommendations",
      "Learning roadmap",
    ],
  },
  {
    id: "sap-mm-mock-interview",
    number: "02",
    title: "SAP MM Mock Interview",
    category: "Interview Preparation",
    duration: 60,
    type: "paid",
    audience: "business",
    price: 1000,
    description:
      "Prepare for SAP MM interviews with a focused mock interview and personalized feedback.",
    idealFor: "SAP MM learners and job seekers.",
    image: "/Service-images/mock-interview.png",
    features: [
      "Mock interview questions",
      "Technical assessment",
      "Personalized feedback",
    ],
  },
  {
    id: "resume-job-profile",
    number: "03",
    title: "Resume & Job Profile Preparation",
    category: "Career Development",
    duration: 60,
    type: "paid",
    audience: "business",
    price: 798,
    description:
      "Improve your resume and professional profile to present your SAP skills and experience effectively.",
    idealFor: "Freshers and experienced professionals.",
    image: "/Service-images/resume-preparation.png",
    features: [
      "Resume review",
      "Profile improvement suggestions",
      "Job profile guidance",
    ],
  },
  {
    id: "placement-assistance",
    number: "04",
    title: "SAP Placement Assistance Consultation",
    category: "Placement Support",
    duration: 30,
    type: "eligibility",
    audience: "business",
    price: 0,
    description:
      "Discuss your SAP career goals and understand the available placement assistance options.",
    idealFor: "Eligible candidates seeking placement support.",
    image: "/Service-images/placement-assistance.png",
    features: [
      "Profile assessment",
      "Placement support discussion",
      "Next-step guidance",
    ],
  },
  {
    id: "course-admission",
    number: "05",
    title: "SAP Course Admission Counselling",
    category: "Course Counselling",
    duration: 30,
    type: "free",
    audience: "business",
    price: 0,
    description:
      "Understand SAP course options, learning requirements, and the admission process.",
    idealFor: "Learners planning to enrol in an SAP course.",
    image: "/Service-images/admission-counselling.png",
    features: [
      "Course information",
      "Admission process guidance",
      "Learning expectations",
    ],
  },
  {
    id: "sap-mm-live-demo",
    number: "06",
    title: "SAP MM Live Demo Session",
    category: "Live Demonstration",
    duration: 60,
    type: "free",
    audience: "business",
    price: 0,
    description:
      "Explore SAP MM concepts through a live demonstration and understand practical workflows.",
    idealFor: "Beginners interested in SAP MM.",
    image: "/Service-images/sap-mm-demo.png",
    features: [
      "Live demonstration",
      "Workflow introduction",
      "Questions and answers",
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServicePrice(service: Service): string {
  switch (service.type) {
    case "free":
      return "Free";

    case "paid":
      return `₹${service.price.toLocaleString("en-IN")}`;

    case "eligibility":
      return "Eligibility-Based";

    case "enquiry":
      return "Contact for Pricing";

    default: {
      const exhaustiveCheck: never = service.type;
      return exhaustiveCheck;
    }
  }
}

export function getServiceTypeLabel(service: Service): string {
  switch (service.type) {
    case "free":
      return "Free Consultation";

    case "paid":
      return "Paid Consultation";

    case "eligibility":
      return "Eligibility Required";

    case "enquiry":
      return "Corporate Service";

    default: {
      const exhaustiveCheck: never = service.type;
      return exhaustiveCheck;
    }
  }
}

/**
 * Design-only helper (no content): colour styling for the
 * price pill and the consultation-type dot on each card.
 */
export function getServiceTypeStyles(service: Service): {
  pill: string;
  dot: string;
} {
  switch (service.type) {
    case "free":
      return {
        pill: "bg-emerald-50 text-emerald-700 ring-emerald-200",
        dot: "bg-emerald-500",
      };

    case "paid":
      return {
        pill: "bg-blue-50 text-[#2855D9] ring-blue-200",
        dot: "bg-[#2855D9]",
      };

    case "eligibility":
      return {
        pill: "bg-amber-50 text-amber-700 ring-amber-200",
        dot: "bg-amber-500",
      };

    case "enquiry":
      return {
        pill: "bg-violet-50 text-violet-700 ring-violet-200",
        dot: "bg-violet-500",
      };

    default: {
      const exhaustiveCheck: never = service.type;
      return exhaustiveCheck;
    }
  }
}