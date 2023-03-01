import React from "react";

const workExperience = [
  {
    title: "Willamette University",
    position: "Web Production Assistant",
    duration: "2022 - Present",
    subItems: [
      "Update and build new web pages and review for quality assessment",
      "Troubleshoot Web and CMS-related questions via phone",
      "Provide customer service regarding WU website to faculty, staff, and student employees",
    ],
  },
  {
    title: "Willamette University",
    position: "Intramural Supervisor",
    duration: "2021 - present",
    subItems: [
      "Plan and organize intramural events monthly ",
      "Effectively supervise multiple projects and personnel involved",
      "Respond to any injuries, medical situations, or incident reports",
    ],
  },
  {
    title: "Bangldesh Int'l School & College",
    position: "School President & Event Organizer",
    duration: "2018 - 2020",
    subItems: [
      "Maintain school's overall discipline and honor code",
      "Support community development and organize events for student engagement",
      "Report disciplinary events and help to resolve disputes and arguments",
    ],
  },
];

const Experience = () => {
  const workItems = workExperience.map((item) => (
    <li className="pl-8 mb-4">
      <div className="font-semibold">{item.title}</div>
      <div className="text-gray-600">{item.position}</div>
      <div className="text-gray-600">{item.duration}</div>
      <ul className="list-disc list-inside pl-4">
        {item.subItems.map((subItem) => (
          <li>{subItem}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="container mx-auto px-4 py-8 justify-center" id="exp">
      <div className="text-3xl font-bold mb-4">Experience</div>
      <div>
        <div className="text-xl font-semibold mb-4 grid items-center ">Work Experience</div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 h-full w-px bg-gray-400 left-6"></div>
          <ul className="pl-6 sm:pl-12">{workItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
