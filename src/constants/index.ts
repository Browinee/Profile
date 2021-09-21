import {Work} from "../types/user";
import unistar from "../assets/unistar-logo.png";
import ampos from "../assets/ampos-logo.png";
import skyrec from "../assets/skyrec.png";
import {v4 as uuidv4} from "uuid";
import {breakpoints} from "../theme/theme";

export const WORKEXPERIENCE: Work[] = [
    {
        id: uuidv4(),
        isCurrent: true,
        startDate: "2020-08-08",
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
        id: uuidv4(),
        startDate: "2019-02-02",
        endDate: "2020-06-31",
        title: "Frontend Engineer",
        company: "AMPOS",
        companyLogo: ampos,
        description: `
    1. Report service
     - Develop new feature for report module.
     - Discuss the coding style with team member and make it a dependency for company inside.
     - Testing
    2. Datalake
    -  Disscuss  with cross function team to clearify their requirements.
    - In charge of plan and implementation of datalake across different countries. Including dynamodb, cloudformation, lambda, api gateway, etc.
      `,
        isCurrent: false,
    },
    {
        id: uuidv4(),
        startDate: "2017-02-02",
        endDate: "2018-12-20",
        title: "Frontend Engineer",
        company: "Skyrec",
        companyLogo: skyrec,
        description: `
    1. BI frontend system
     - Develop new feature for report module.
     - Discuss the coding style with team member and make it a dependency for company inside.
     - Testing
    2. BI backend system
    -  Discuss  with cross function team to clearify their requirements.
    -  In charge of plan and implementation of datalake across different countries. Including dynamodb, cloudformation, lambda, api gateway, etc.
    3. Routine work
    - Be responsible for discussing with support team about BI system issues and define whether it is a bug with QA.
    4. SDK
    -  Discuss with PM about api in every release and implement it and maintain it.
    -  Discuss with senior RD about the architecture of clouding sdk .We use api gateway and lambda to implement it and maintain the whole architecture on my own.
    -  Introduce gitlab ci/cd to sdk in order to save time for deploying.
    5. Release owner
    -  Co-work with different department and discuss product demand. 
    -  Co-work with QA, frontend(QAs are newbie, and frontend colleague is part-time) to complete product release.
    6. Git
    -  Discuss with senior RD about how to transport codebase from svn to git.
    -  Share experience about using git in frontend seminar.
    -  Introduce gitflow and commit message format to frontend team.
    7. Weekly Report
    -  Discuss with RD head about whole architecture and impelement frontend template and backend logic on my own.
    8. Value-adder reseller website
    -  Discuss with PM/BD team about how to manage value-adder reseller information.
    -  Discuss with PM about inserting ga tracking code and analyzing user habits.
    9. Mentor
    -  Make intern plan to help them get involved our team as soon as possible.
    10.Refractor
    -  Improving frontend system efficiency by editing origin function. 
    -  Refactor export page in frontend system and prevent it from crashing when users selected multiple months.
    -  Solving problem of internal server error causing by selection of multiple months.
      `,
        isCurrent: false,
    },
];

export const SUMMARY: string[] = [
    "4+ years of software engineer experiences(Fullstack)",
    "Co-work with BD/PM/QA/Support team to complete release.",
    "Manage work and mentor members.",
    "Familiar with frontend skills like,react,redux-saga, redux-thunk, redux-observable, typescript, vue, vuex, d3, scss,webpack,etc.",
    "Familiar with AWS service, like api gateway, lambda, cloudfront,etc",
    "Solid experiences in performing gitlab CI/CD to existing product.",
    "Solid experiences in performing multiple testing tools like react-testing-library/Jest/ Mocha/ Nightwatch,etc to ensure coding quality.",
    "Communicative, practical, problem solving, and passionate about coding and leaning innovative technology.",
    "Others: play nextjs, nests, tailwind, etc in my side projects",
];

export const QUERY = `(max-width: ${breakpoints.md})`;
