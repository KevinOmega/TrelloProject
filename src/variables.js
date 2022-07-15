import { IoLogoGameControllerA } from "react-icons/io";
import { AiFillEye, AiFillStar } from "react-icons/ai";
import { FaRocket, FaBuilding } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { BiPaperPlane } from "react-icons/bi";
import { MdSdStorage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BsPencilFill, BsLightbulbFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    name: "Features",
    content: [
      {
        id: 101,
        logo: <AiFillEye />,
        title: "Views",
        info: "View your team's projects from every angle",
      },
      {
        id: 102,
        logo: <IoLogoGameControllerA />,
        title: "Automation",
        info: "Automate tasks and workflows with butler automation",
      },
      {
        id: 103,
        logo: <FaRocket />,
        title: "Power-Ups",
        info: "Power up your teams by linking them favorite tools with Trello plugins",
      },
      {
        id: 104,
        logo: <HiTemplate />,
        title: "Templates",
        info: "Give your team a blueprint for succes with easy-to-use templates from industry leaders and the Trello community",
      },
    ],
  },
  {
    id: 2,
    name: "Solutions",
    content: [
      {
        id: 105,
        logo: <BiPaperPlane />,
        title: "Marketing teams",
        info: "Whether launching a new product, campaign , or creating content, Trello helps marketing teams succeed",
      },
      {
        id: 106,
        logo: <MdSdStorage />,
        title: "Product management",
        info: "Use trello's management boards and roadmap features to simplify complex projcts and processes",
      },
      {
        id: 107,
        logo: <RiTeamFill />,
        title: "Engineering teams",
        info: "Ship more code , faster , and give your developers the freedom to be more agile with Trello",
      },
      {
        id: 108,
        logo: <BsPencilFill />,
        title: "Design teams",
        info: "Empower your design teams by using Trello to streamline creative request and promote more fluid cross-team collaboration",
      },
    ],
  },
  {
    id: 3,
    name: "Plans",
    content: [
      {
        id: 109,
        logo: <BsLightbulbFill />,
        title: "Standard",
        info: "For teams that need to manage more work and scale collaboration",
      },
      {
        id: 110,
        logo: <AiFillStar />,
        title: "Premium",
        info: "Best for teams up to 100 that need to trak multiple projects and visualize work in a variety of ways",
      },
      {
        id: 111,
        logo: <FaBuilding />,
        title: "Enterprise ",
        info: "Everything your enterprise teams and admins need to manage projects",
      },
      {
        id: 112,
        logo: "",
        title: "Free plan ",
        info: "For individuals or small teams looking to keep work organized",
      },
    ],
  },
  {
    id: 4,
    name: "Pricing",
    url: "https://trello.com/pricing",
  },
  {
    id: 5,
    name: "Resources",
    content: [
      {
        id: 113,
        logo: "",
        title: "Trello guide",
        info: "Our easy to follow workflow guide will take you from project set-up to Trello expert in no time",
      },
      {
        id: 114,
        logo: "",
        title: "Remote work guide",
        info: "The complete guide to settin up your team for remote work success",
      },
      {
        id: 115,
        logo: "",
        title: "Trello blog",
        info: "Explore articles and resources to help guide your Trello experience",
      },
      {
        id: 116,
        logo: "",
        title: "Webinars",
        info: "Enjoy our free Trello webinars and become a productivity professional",
      },
      {
        id: 117,
        logo: "",
        title: "Developers",
        info: "The sky's the limit in what you can deliver to Trello users in your Power-Up",
      },
    ],
  },
];

const teams = [
  {
    id: 1,
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg",
  },
  {
    id: 2,
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg",
  },
  {
    id: 3,
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg",
  },
  {
    id: 4,
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/2zdwHAyV1sdTRtu3VZWrnp/cdabf13fb68d433667812689add7cdc8/Google.svg",
  },
  {
    id: 5,
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg",
  },
  {
    id: 6,
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=576&fm=webp",
  },
];

const features = [
  {
    id: 1,
    name: "CHOOSE A VIEW",
    title: "The board is just the beginning",
    description:
      "Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg",
    more: {
      info: "You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:",
      characteristics: [
        {
          id: 1,
          content: "Use a Timeline view for project planning",
        },
        {
          id: 2,
          content: "Calendar helps with time management",
        },
        {
          id: 3,
          content: "Table view connects work across boards",
        },
        {
          id: 4,
          content: "See board stats with Dashboard, and more!",
        },
      ],
    },
  },
  {
    id: 2,
    name: "DIVE INTO THE DETAILS",
    title: "Cards contain everything you need",
    description:
      "Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/4B1RPRoUspHQXgYCRAndBX/466053fb07ff2cdc0ae06649d5f30d8f/card-back.svg",
    more: {
      info: "Spin up a Trello card with a click, then uncover everything it can hold. Break down bigger card tasks into steps with file attachment previews, reminders, checklists and comments—emoji reactions included! Plus, gain powerful perspective by seeing all cards by list and status at the board level.",
      characteristics: [
        {
          id: 1,
          content: "Manage deadlines",
        },
        {
          id: 2,
          content: "Provide and track feedback",
        },
        {
          id: 3,
          content: "Assign tasks and hand off work",
        },
        {
          id: 4,
          content: "Connect work across apps",
        },
      ],
    },
  },
  {
    id: 3,
    name: "MEET YOUR NEW BUTLER",
    title: "No-code automation",
    description:
      "Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/1zR830Rgv5hpZbwuiyAFkq/326d72f720d090342f0744a8deb8b727/automation.png?w=576&fm=webp",
    more: {
      info: "Butler uses natural language commands to automate just about any task in Trello:",
      characteristics: [
        {
          id: 1,
          content: "Automate common actions like moving lists",
        },
        {
          id: 2,
          content: "Create custom buttons to build process quickly",
        },
        {
          id: 3,
          content: "Surface upcoming deadlines to the team",
        },
        {
          id: 4,
          content: "Schedule teammate assignments, and more!",
        },
      ],
    },
  },
  {
    id: 4,
    name: "POWER-UPS",
    title: "Integrate top work tools",
    description:
      "Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/17AXIwjhGkuPEpvcWzwoIJ/e6e767d503809a89be375846ac81bbef/power-ups.png?w=576&fm=webp",
    more: {
      info: "From Reporting to Custom Fields to your beloved software integrations—we’ve got functionalities, your favorites, and more!",
      characteristics: [
        {
          id: 1,
          content: "Confluence",
        },
        {
          id: 2,
          content: "Slack",
        },
        {
          id: 3,
          content: "Dropbox",
        },
        {
          id: 4,
          content: "Google Drive",
        },
        {
          id: 5,
          content: "Evernote",
        },
      ],
    },
  },
];

const infoCards = [
  {
    id: 1,
    name: "See Trello pricing",
    info: "Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg",
    btn: "Compare pricing",
  },
  {
    id: 2,
    name: "What is Trello",
    info: "Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg",
    btn: "Tour Trello",
  },
  {
    id: 3,
    name: "Discover Trello Enterprise",
    info: "The productivity tool teams love, paired with the features and security needed for scale.",
    image:
      "https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg",
    btn: "Learn more",
  },
];

export { links, teams, features, infoCards };
