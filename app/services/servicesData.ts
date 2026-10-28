
export type ServiceType =
  | "free"
  | "paid"
  | "eligibility"
  | "enquiry";

export type ServiceAudience = "individual" | "business";
export type ServiceSection = "b2c" | "b2b";

export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  duration: number;
  type: ServiceType;
  audience: ServiceAudience;
  section: ServiceSection;
  price: number;
  description: string;
  idealFor: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  // ==========================================
  // B2C SERVICES
  // ==========================================

  {
    id: "career-guidance",
    number: "01",
    title: "SAP Career Guidance",
    category: "Career Guidance",
    duration: 30,
    type: "free",
    audience: "individual",
    section: "b2c",
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
    id: "sap-mm-live-demo",
    number: "02",
    title: "SAP MM Live Demo Session",
    category: "Live Demonstration",
    duration: 60,
    type: "free",
    audience: "individual",
    section: "b2c",
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

  {
    id: "course-admission",
    number: "03",
    title: "SAP Course Admission Counselling",
    category: "Course Counselling",
    duration: 30,
    type: "free",
    audience: "individual",
    section: "b2c",
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
    id: "sap-mm-mock-interview",
    number: "04",
    title: "SAP MM Mock Interview",
    category: "Interview Preparation",
    duration: 60,
    type: "paid",
    audience: "individual",
    section: "b2c",
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
    number: "05",
    title: "Resume & Job Profile Preparation",
    category: "Career Development",
    duration: 60,
    type: "paid",
    audience: "individual",
    section: "b2c",
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
    number: "06",
    title: "SAP Placement Assistance Consultation",
    category: "Placement Support",
    duration: 30,
    type: "eligibility",
    audience: "individual",
    section: "b2c",
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

  // ==========================================
  // B2B RELATED SERVICES
  // ==========================================

  {
    id: "resource-outsourcing",
    number: "07",
    title: "Resource Supply & Outsourcing",
    category: "Resource Outsourcing",
    duration: 0,
    type: "enquiry",
    audience: "business",
    section: "b2b",
    price: 0,
    description:
      "Connect businesses with skilled professionals to meet workforce and project requirements.",
    idealFor: "",
    image: "/Service-images/Resource Supply & Outsourcing.png",
    features: [],
  },

  {
    id: "sap-consulting-projects",
    number: "08",
    title: "SAP Consulting & Project Handling",
    category: "SAP Consulting",
    duration: 0,
    type: "enquiry",
    audience: "business",
    section: "b2b",
    price: 0,
    description:
      "Support SAP implementation, project execution, and business process improvement.",
    idealFor: "",
    image: "/Service-images/SAP Consulting & Project Handling.png",
    features: [],
  },

  {
    id: "freelancing-jobs",
    number: "09",
    title: "Freelancing Jobs",
    category: "Freelancing",
    duration: 0,
    type: "enquiry",
    audience: "business",
    section: "b2b",
    price: 0,
    description:
      "Explore project-based opportunities for independent professionals and skilled talent.",
    idealFor: "",
    image: "/Service-images/Freelancing Jobs.png",
    features: [],
  },

  {
    id: "internships",
    number: "10",
    title: "Internships",
    category: "Internships",
    duration: 0,
    type: "enquiry",
    audience: "business",
    section: "b2b",
    price: 0,
    description:
      "Gain practical experience through industry-oriented learning and project exposure.",
    idealFor: "",
    image: "/Service-images/Internships.png",
    features: [],
  },

  {
    id: "workshops",
    number: "11",
    title: "Workshops",
    category: "Workshops",
    duration: 0,
    type: "enquiry",
    audience: "business",
    section: "b2b",
    price: 0,
    description:
      "Build practical skills through focused training sessions and hands-on activities.",
    idealFor: "",
    image: "/Service-images/Workshops.png",
    features: [],
  },

  {
    id: "boot-camps",
    number: "12",
    title: "Boot Camps",
    category: "Boot Camps",
    duration: 0,
    type: "enquiry",
    audience: "business",
    section: "b2b",
    price: 0,
    description:
      "Develop job-ready skills through intensive, structured training programs.",
    idealFor: "",
    image: "/Service-images/Boot Camps.png",
    features: [],
  },
];

// ==========================================
// SERVICE HELPERS
// ==========================================

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
      return "Contact for Details";

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
      return "Paid Consultation";

    default: {
      const exhaustiveCheck: never = service.type;
      return exhaustiveCheck;
    }
  }
}
