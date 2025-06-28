import { ProjectData, ProjectItem } from "@/types/projects";

export const projects: ProjectItem[] = [
    {
      title: 'Talem',
      slug: "talem",
      imgSrc: '/projects-assets/talem.png',
      hoverImgSrc: '/projects-assets/talem-hover.png',
    },
    {
      title: 'DailySAT',
      slug: "dailysat",
      imgSrc: '/projects-assets/dailysat.png',
      hoverImgSrc: '/projects-assets/dailysat-hover.png',

    },
    {
      title: 'Trashify',
      slug: "trashify",
      imgSrc: '/projects-assets/trashify.png',
      hoverImgSrc: '/projects-assets/trashify-hover.png',
    },
    {
      title: 'Everyone Classroom',
      slug: "everyoneclass",
      imgSrc: '/projects-assets/everyone-stem.png',
      hoverImgSrc: '/projects-assets/everyone-stem-hover.png',
      },
];

export const projectData: ProjectData[] = [
  {
      slug: "talem",
      title: "Talem Website",
      link: "https://talem.org",
      description:
          "Talem is a website all about helping highschoolers with their high school journey. From extracurriculars to post-secondary help, we got you covered!",
      mainImage: "/mockups/talem/talem.png",
      impact: [
          "Built the whole blog platform",
          "Added user authentication using Firebase claim",
          "Updated about page with new UI designs",
      ],
      stats: [
        {
          stat: "400",
          desc: "daily users"
        },
        {
          stat: "$3,000",
          desc: "in funding"
        },
        {
          stat: "300k",
          desc: "total users :)"
        }
      ],
      nextProject: "/dailysat"
  },

  {
    slug: "dailysat",
    title: "DailySAT Platform",
    link: "https://dailysat.org",
    description:
        "DailySAT is the website that helps you with your post-secondary journey! From SAT prep through our extensive list to our financial literacy platform!!",
    mainImage: "/mockups/dailysat/dailysat.png",
    impact: [
        "Leading the team through a thorough discovery period",
        "Developing an implementation strategy for the build phase",
        "Bringing together people from various parts of the business to collaborate",
    ],
    stats: [
      {
        stat: "70k+",
        desc: "total users"
      },
      {
        stat: "1300",
        desc: "SAT questions added"
      },
      {
        stat: "130+",
        desc: "members on Discord"
      }
    ],
    nextProject: "/trashify"
},
{
  slug: "trashify",
  title: "Trashify Platform",
  link: "https://github.com/Hemit99123/trashify",
  description:
      "Trashify is a platform that allows you to find your clostest trash bin. It was a summer-break pet-project I created to learn new developmental processes.",
  mainImage: "/mockups/trashify/trashify.png",
  impact: [
      "Leading the team through a thorough discovery period",
      "Developing an implementation strategy for the build phase",
      "Bringing together people from various parts of the business to collaborate",
  ],
  stats: [
    {
      stat: "<70ms",
      desc: "api response"
    },
    {
      stat: "2",
      desc: "mircoservice integration"
    },
    {
      stat: "10+",
      desc: "investors interested (mircogrants)"
    }
  ],
  nextProject: "/everyone-class"
},
    {
        slug: "everyoneclass",
        title: "Everyone Classroom",
        link: "https://github.com/Hemit99123/everyone-class",
        description:
            "Everyone Classroom is a modern Learning Management System (LMS) designed to simplify classroom management for teachers and students. Create classrooms, add students, assign work, and track progress—all in one place.",
        mainImage: "/mockups/everyoneclass/everyoneclass.png",
        impact: [
            "Developed a scalable classroom management platform from scratch",
            "Implemented real-time collaboration features for teachers and students",
            "Integrated role-based access and secure authentication",
        ],
        stats: [
            {
                stat: "100+",
                desc: "students onboarded"
            },
            {
                stat: "6+",
                desc: "developers contributed"
            },
            {
                stat: "3+",
                desc: "organizations involved"
            }
        ],
        nextProject: "/talem"
    }
];