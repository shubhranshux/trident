import { FadeInUp, SlideIn } from "../utils/animations";
import { Star, Bookmark, Calendar, MapPin, Clock } from "lucide-react";

// Department data with realistic images and accurate metadata matching the new UI style
const DEPARTMENTS = [
  {
    name: "Computer Science & Engg.",
    category: "B.Tech . M.Tech . Ph.D",
    desc: "Focusing on advanced algorithms, distributed computing, and cutting-edge software paradigms.",
    est: "Est. 2005",
    campus: "Trident Main Campus",
    duration: "4 Years Full-Time",
    seats: "438 Seats",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Artificial Intelligence & ML",
    category: "B.Tech . M.Tech",
    desc: "Exploring neural networks, deep learning models, and cognitive automation systems.",
    est: "Est. 2020",
    campus: "Adv. Computing Block",
    duration: "4 Years Full-Time",
    seats: "198 Seats",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Data Science",
    category: "B.Tech . M.Tech",
    desc: "Rigorous training in big data analytics, predictive modeling, and statistical intelligence.",
    est: "Est. 2021",
    campus: "Data Analytics Lab",
    duration: "4 Years Full-Time",
    seats: "78 Seats",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Biotechnology",
    category: "B.Tech . Intg. M.Tech",
    desc: "Intersecting biology with technology for pharmaceutical, agricultural, and biochemical innovations.",
    est: "Est. 2007",
    campus: "Life Sciences Block",
    duration: "4 Years Full-Time",
    seats: "120 Seats",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Electronics & Telecomm.",
    category: "B.Tech . M.Tech",
    desc: "Designing robust communications, microwave tech, and advanced signaling systems.",
    est: "Est. 2005",
    campus: "Communication Wing",
    duration: "4 Years Full-Time",
    seats: "48 Seats",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "VLSI Design",
    category: "B.Tech . M.Tech",
    desc: "Pioneering microelectronics, semiconductor design, and extreme miniaturization.",
    est: "Est. 2010",
    campus: "Microelectronics Lab",
    duration: "4 Years Full-Time",
    seats: "48 Seats",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Electrical & Electronics",
    category: "Diploma . B.Tech . M.Tech",
    desc: "Mastering power grids, renewable energy, and modern control engineering.",
    est: "Est. 2005",
    campus: "Power Engg. Block",
    duration: "4 Years Full-Time",
    seats: "126 Seats",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mechanical Engineering",
    category: "Diploma . B.Tech . M.Tech",
    desc: "Advancing automation, thermodynamics, and sustainable manufacturing practices.",
    est: "Est. 2012",
    campus: "Industrial Block",
    duration: "4 Years Full-Time",
    seats: "108 Seats",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Civil Engineering",
    category: "B.Tech . M.Tech",
    desc: "Building the future through smart infrastructure and eco-friendly structural design.",
    est: "Est. 2014",
    campus: "Infrastructure Wing",
    duration: "4 Years Full-Time",
    seats: "66 Seats",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Department of MBA",
    category: "Core . IEVD . Env. Mgmt.",
    desc: "Fostering strategic leadership, entrepreneurial agility, and global business acumen.",
    est: "Est. 2008",
    campus: "Management Block",
    duration: "2 Years Full-Time",
    seats: "180 Seats",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Department of MCA",
    category: "Master of Computer App.",
    desc: "Advanced studies in enterprise software architecture, databases, and IT framework deployments.",
    est: "Est. 2005",
    campus: "Computing Center",
    duration: "2 Years Full-Time",
    seats: "60 Seats",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  }
];

const VerticalCard = ({ dept }) => (
  <div className="bg-white rounded-[24px] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full flex flex-col h-full border border-gray-100/50">
    <div className="relative w-full h-[60%] sm:h-[260px] md:h-[280px] mb-4 2xl:h-[320px]">
      <img src={dept.image} alt={dept.name} className="w-full h-full object-cover rounded-[16px]" loading="lazy" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/40 transition-colors">
        <Bookmark size={15} strokeWidth={2} />
      </div>
    </div>
    
    <div className="px-2 pb-2 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-1">
         <h3 className="text-[19px] font-semibold text-[#3d3d3d] leading-tight pr-2">{dept.name}</h3>
      </div>
      <p className="text-[#B0B0B0] text-[13px] font-medium mb-3">{dept.category}</p>
      
      <p className="text-[#666] text-[14px] leading-[1.6] mb-5 border-l-2 border-[#E47A53]/30 pl-3">
        {dept.desc}
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2.5 text-[#737373] text-[13.5px] font-medium">
          <Calendar size={16} outline fill="none" strokeWidth={1.5} /> {dept.est}
        </div>
        <div className="flex items-center gap-2.5 text-[#737373] text-[13.5px] font-medium">
          <MapPin size={16} strokeWidth={1.5} /> {dept.campus}
        </div>
        <div className="flex items-center gap-2.5 text-[#737373] text-[13.5px] font-medium">
          <Clock size={16} strokeWidth={1.5} /> {dept.duration}
        </div>
      </div>
      
      <div className="mt-auto flex items-end justify-between pt-4 border-t border-gray-50">
        <div>
           <p className="text-[#888888] text-[12px] font-medium mb-1">Capacity</p>
           <p className="text-[#333333] text-[16px] font-bold">{dept.seats}</p>
        </div>
        <a href="https://academics-tat.tekkzy.com/departments-of-engineering/" className="bg-[#E47A53] hover:bg-[#D3603B] text-white text-[14px] font-semibold py-2.5 px-6 rounded-xl transition-colors">
          Explore
        </a>
      </div>
    </div>
  </div>
);

const HorizontalCard = ({ dept }) => (
  <div className="bg-white rounded-[24px] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full flex flex-col sm:flex-row h-full border border-gray-100/50 items-stretch gap-4 md:gap-5">
    <div className="relative w-full sm:w-[220px] md:w-[260px] lg:w-[240px] xl:w-[280px] shrink-0 h-[200px] sm:h-auto min-h-[160px]">
      <img src={dept.image} alt={dept.name} className="w-full h-full object-cover rounded-[16px] absolute inset-0" loading="lazy" />
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-black/40 transition-colors">
        <Bookmark size={15} strokeWidth={2} />
      </div>
    </div>
    
    <div className="pr-3 pb-2 sm:pt-2 flex-1 flex flex-col min-w-0">
      <div className="flex justify-between items-start mb-1">
         <h3 className="text-[18px] md:text-[20px] font-semibold text-[#3d3d3d] leading-tight pr-2 truncate">{dept.name}</h3>
      </div>
      <p className="text-[#B0B0B0] text-[13px] font-medium mb-3">{dept.category}</p>
      
      <p className="text-[#666] text-[14px] leading-[1.6] mb-5 border-l-2 border-[#E47A53]/30 pl-3">
        {dept.desc}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-start sm:flex-wrap gap-x-6 gap-y-2 mb-4 shrink-0">
        <div className="flex items-center gap-2.5 text-[#737373] text-[13.5px] font-medium whitespace-nowrap w-full sm:w-auto">
          <Calendar size={16} strokeWidth={1.5} /> {dept.est}
        </div>
        <div className="flex items-center gap-2.5 text-[#737373] text-[13.5px] font-medium whitespace-nowrap w-full sm:w-auto mt-2 sm:mt-0">
          <MapPin size={16} strokeWidth={1.5} /> {dept.campus}
        </div>
        <div className="flex items-center gap-2.5 text-[#737373] text-[13.5px] font-medium whitespace-nowrap w-full sm:w-auto mt-2 sm:my-2 xl:my-0">
          <Clock size={16} strokeWidth={1.5} /> {dept.duration}
        </div>
      </div>
      
      <div className="mt-auto flex items-end justify-between w-full pt-1 2xl:pt-4 border-t sm:border-none border-gray-50">
        <div className="pt-2 sm:pt-0">
           <p className="text-[#888888] text-[12px] font-medium mb-0.5">Capacity</p>
           <p className="text-[#333333] text-[15px] font-bold leading-none">{dept.seats}</p>
        </div>
        <a href="https://academics-tat.tekkzy.com/departments-of-engineering/" className="bg-[#E47A53] hover:bg-[#D3603B] text-white text-[14px] font-semibold py-2.5 px-6 rounded-xl transition-colors">
          Explore
        </a>
      </div>
    </div>
  </div>
);

export default function Programs() {
  return (
    <section className="relative py-24 bg-[#F2F4F5] border-y border-[#EFE7DF]/60 overflow-hidden text-left">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        
        {/* Header matched perfectly */}
        <div className="mb-14">
          <SlideIn direction="left">
            <h2 className="text-[#3d3d3d] text-4xl md:text-[44px] font-bold mb-3 tracking-tight">Academic Departments</h2>
            <p className="text-[#737373] text-lg font-medium max-w-2xl">
               Discover our 50+ specialized undergraduate and postgraduate degrees across immersive, industry-aligned departments.
            </p>
          </SlideIn>
        </div>

        {/* Asymmetrical Masonry Card Grid */}
        <div className="space-y-6">
          
          {/* Section 1 - Left Col Vertical, Right Col Horizontals */}
          <FadeInUp delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-4 xl:col-span-3">
                 <VerticalCard dept={DEPARTMENTS[0]} />
              </div>
              <div className="col-span-1 lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
                 <HorizontalCard dept={DEPARTMENTS[1]} />
                 <HorizontalCard dept={DEPARTMENTS[2]} />
              </div>
            </div>
          </FadeInUp>

          {/* Section 2 - Left Col Horizontals, Right Col Vertical */}
          <FadeInUp delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-8 xl:col-span-9 flex flex-col gap-6 order-2 lg:order-1">
                 <HorizontalCard dept={DEPARTMENTS[4]} />
                 <HorizontalCard dept={DEPARTMENTS[5]} />
              </div>
              <div className="col-span-1 lg:col-span-4 xl:col-span-3 order-1 lg:order-2">
                 <VerticalCard dept={DEPARTMENTS[3]} />
              </div>
            </div>
          </FadeInUp>

          {/* Section 3 - Left Col Vertical, Right Col Horizontals */}
          <FadeInUp delay={300}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-4 xl:col-span-3">
                 <VerticalCard dept={DEPARTMENTS[6]} />
              </div>
              <div className="col-span-1 lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
                 <HorizontalCard dept={DEPARTMENTS[7]} />
                 <HorizontalCard dept={DEPARTMENTS[8]} />
              </div>
            </div>
          </FadeInUp>

          {/* Section 4 - Left Col Horizontals, Right Col Call To Action Block */}
          <FadeInUp delay={400}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="col-span-1 lg:col-span-8 xl:col-span-9 flex flex-col gap-6 order-2 lg:order-1">
                 <HorizontalCard dept={DEPARTMENTS[9]} />
                 <HorizontalCard dept={DEPARTMENTS[10]} />
              </div>
              <div className="col-span-1 lg:col-span-4 xl:col-span-3 order-1 lg:order-2 h-full min-h-[300px]">
                 <div className="bg-[#2C3A8C] rounded-[24px] p-10 h-full text-white flex flex-col justify-center items-center text-center shadow-[0_12px_40px_rgba(44,58,140,0.3)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8BD63]/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    
                    <h3 className="serif text-3xl xl:text-4xl font-bold mb-4 z-10 text-[#E8BD63]">Explore More</h3>
                    <p className="text-white/80 mb-8 text-[15px] max-w-[280px] z-10 leading-relaxed font-medium">Discover our 9 UG Programs, 12 PG Programs, 2 Integrated PG Programs, and 3 Diploma Programs.</p>
                    <a href="https://academics-tat.tekkzy.com/departments-of-engineering/" className="bg-white hover:bg-gray-50 text-[#1A2660] font-bold py-3.5 px-8 rounded-xl transition-all z-10 w-full md:w-auto shadow-lg hover:-translate-y-0.5">
                        View All Programs
                    </a>
                 </div>
              </div>
            </div>
          </FadeInUp>
          
        </div>
      </div>
    </section>
  );
}
