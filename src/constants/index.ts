import {Work} from "../types/user";
import unistar from "../assets/unistar-logo.png";

export const WORKEXPERIENCE: Work[] = [
    {
        id: btoa("Frontend EngineerUNISTAR2020-082020-09"),
        isCurrent: true,
        startDate: "2020-08",
        endDate: "",
        title: "Frontend Engineer",
        company: "UNISTAR",
        companyLogo: unistar,
        description: `
    1. Refactor old platform
      - Clarify requirement across departments with PD/Designers/QA
      - Refactor old game platform to make the whole products maintainable and easy to develop new features.
      - Refactor and develop new projects with the framework core-fe,mainly replace the old platforms containing Ember, React, Redux-Saga, Redux-Observable, and pure JavaScript, and meanwhile set the standard for development process.
      - Discuss with teammates about how to apply the clean architecture, DDD, presenter, etc to new project.
    2. Develop a new deposit/withdraw admin system for our customer service 
      - Responsible for history records page which built with core-fe, React, Redux, etc.
    3. Maintain client side product by using electron to load web system and make product downloadable for those who don’t wan’t to download app or go to our web
    4. UI Library
      - Use storybook to show our components and make PM, Designer, RD on the same page.
      - Develop and maintain ui library.
      - Build CI/CD with Docker and Jenkins.
    5. Webpack engineer
     - Performance tuning when bundle size over the limit.
     - Upgrade the Node.js / Webpack from old projects and solve css override issue.
     - Align webpack configs in old projects with newest one.
     - Modify public path and support different environment CDN dynamically.
    6. Security bot
     - Check security issues provided by GitHub security bot and deal with it periodically to maintain the project quality. 
    7. Use Kibana to track system issue
     - Use Kibana to track the online issue and solve it beforehand.
    9. Management
      - Go over the requirement and arrange jira tickets to suitable members.
      - Mentor junior teammate about webpack and code review. 
      `,
    },
    {
        id: btoa("Frontend EngineerAMPOS2019-022020-06"),
        startDate: "2019-02",
        endDate: "2020-06",
        title: "Frontend Engineer",
        company: "AMPOS",
        companyLogo: unistar,
        description: `
    1. Refactor old platform
      - Clarify requirement across departments with PD/Designers/QA
      - Refactor old game platform to make the whole products maintainable and easy to develop new features.
      - Refactor and develop new projects with the framework core-fe,mainly replace the old platforms containing Ember, React, Redux-Saga, Redux-Observable, and pure JavaScript, and meanwhile set the standard for development process.
      - Discuss with teammates about how to apply the clean architecture, DDD, presenter, etc to new project.
    2. Develop a new deposit/withdraw admin system for our customer service 
      - Responsible for history records page which built with core-fe, React, Redux, etc.
    3. Maintain client side product by using electron to load web system and make product downloadable for those who don’t wan’t to download app or go to our web
    4. UI Library
      - Use storybook to show our components and make PM, Designer, RD on the same page.
      - Develop and maintain ui library.
      - Build CI/CD with Docker and Jenkins.
    5. Webpack engineer
     - Performance tuning when bundle size over the limit.
     - Upgrade the Node.js / Webpack from old projects and solve css override issue.
     - Align webpack configs in old projects with newest one.
     - Modify public path and support different environment CDN dynamically.
    6. Security bot
     - Check security issues provided by GitHub security bot and deal with it periodically to maintain the project quality. 
    7. Use Kibana to track system issue
     - Use Kibana to track the online issue and solve it beforehand.
    9. Management
      - Go over the requirement and arrange jira tickets to suitable members.
      - Mentor junior teammate about webpack and code review. 
      `,
        isCurrent: false,
    },
];

export const SUMMARY: string[] = [
    "4+ years of software engineer experiences(Fullstack)",
    "Co-work with BD/PM/QA/Support team to complete release.",
    "Manage work and mentor members.",
    "Familiar with frontend skills like,react, typescript, vue, vuex, d3, scss,webpack,etc.",
    "Familiar with AWS service, like api gateway, lambda, cloudfront,etc",
    "Solid experiences in performing gitlab CI/CD to existing product.",
    "Solid experiences in performing multiple testing tools like react-testing-library/Jest/ Mocha/ Nightwatch,etc to ensure coding quality.",
    "Communicative, practical, problem solving, and passionate about coding and leaning innovative technology.",
    "Others: play nextjs, nests, tailwind, etc in my side projects",
];
