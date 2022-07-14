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

export { links };
