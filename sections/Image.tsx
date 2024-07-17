
import { ImageWidget } from 'apps/admin/widgets.ts';

interface TeamMemberProps {
  /**
   * @format rich-text
   */
  name?: string;
  /**
   * @format rich-text
   */
  role?: string;
  /**
   * @widget ImageWidget
   */
  image?: ImageWidget;
  /**
   * @format url
   */
  linkedinUrl?: string;
}

interface TeamProps {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  members: TeamMemberProps[];
}

export default function Team({
  title = "Our team",
  description = "We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
  members = [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      linkedinUrl: "#",
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      linkedinUrl: "#",
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      linkedinUrl: "#",
    },
  ],
}: TeamProps) {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.