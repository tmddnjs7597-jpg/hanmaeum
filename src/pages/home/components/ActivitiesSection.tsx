import { activities } from "@/mocks/home";

export default function ActivitiesSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-background-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="group">
              {/* Image container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-background-100">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Title */}
              <h3 className="mt-3 md:mt-4 text-sm md:text-base font-semibold text-primary-600 text-center leading-snug whitespace-pre-line">
                {activity.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}