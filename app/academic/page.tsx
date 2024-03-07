import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic',
  description: 'My academic background.',
};

export default async function AcademicPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Academic Background</h1>
      <p>I am grateful to have received 6 awards & scholarships in engineering:</p>
      <ul className="list-disc list-inside">
        <li>Dean's Honours List</li>
        <li>HKU Engineering Alumni Association Scholarship 2023-24</li>
        <li>EE 72 Chan Kam Yin Scholarship 2022-23</li>
        <li>HK & Kowloon Electrical Appliances Merch. Assoc. Scholarship 2022-23</li>
        <li>Institution of Engineering and Technology Prize 2022</li>
        <li>HKU Foundation for Outstanding Academic Talents 2021-24</li>
      </ul>
      <br></br>
      <div className="flex flex-wrap gap-4">
        <div className="w-1/2 md:w-1/3">
          <img src="/academic/iet2022.jpeg" alt="IET Scholarship" className="w-full h-auto mb-2 object-cover" />
          <p className="text-center text-sm">IET Prize</p>
        </div>
        <div className="w-1/2 md:w-1/3">
          <img src="/academic/hkueaa.png" alt="HKU Engineering Alumni Association Scholarship" className="w-full h-auto mb-2 object-cover" />
          <p className="text-center text-sm">HKU Engineering Alumni Association Scholarship</p>
        </div>
        <div className="w-1/2 md:w-1/3">
          <img src="/academic/ee72.png" alt="EE 72 Chan Kam Yin Scholarship" className="w-full h-auto mb-2 object-cover" />
          <p className="text-center text-sm">EE 72 Chan Kam Yin Scholarship</p>
        </div>
        <div className="w-1/2 md:w-1/3">
          <img src="/academic/hkufoundation.png" alt="HKU Foundation for Outstanding Academic Talents" className="w-full h-auto mb-2 object-cover" />
          <p className="text-center text-sm">HKU Foundation for Outstanding Academic Talents Scholarship</p>
        </div>
      </div>
    </section>
  );
}