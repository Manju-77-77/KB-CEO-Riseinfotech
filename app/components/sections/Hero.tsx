import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6">
          {profile.name}
        </h1>

        <h2 className="text-3xl text-blue-400 mb-4">
          {profile.headline}
        </h2>

        <p className="text-gray-400 mb-8">
          {profile.subtitle}
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg">
            Schedule Consultation
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            View Journey
          </button>
        </div>
      </div>
    </section>
  );
}