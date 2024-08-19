# [Sublytics](https://sublytics.vercel.app/)

Sublytics is an AI-powered newsletter analytics dashboard with Next.js 14+, visualizing engagement metrics, top-performing content, and responsive design for small business owners.

## About

This project was developed Using NextJS empowered with Typescript and TailwindCSS.

Here is some tools used on the UI development:

- [Material Tailwind](https://www.material-tailwind.com/) for stunning ui components
- [Apexcharts](https://apexcharts.com/) for breathtaking charts
- [Framer Motion](https://www.framer.com/motion/) for blazing cool and modern animations
- [JEST](https://jestjs.io/pt-BR/) for powerful unit testing

## Features

- **Next.js 14+ with App Router and TypeScript**: Utilizes the latest Next.js features for optimal performance and developer experience.
- **Redux State Management**: Efficient state management across the application.
- **Responsive Design**: Ensures a seamless experience across desktop and mobile devices.
- **Date Range Selection**: Allows users to filter data based on custom date ranges.
- **Engagement Overview**: Displays a chart combining open rates and click-through rates over time.
- **Newsletter Performance Table**: Lists all newsletters within the selected date range, showing individual performance metrics.
- **API Integration**: Includes a mock API route that serves analytics data for demonstration purposes.
- **Data Processing**: Implements a data processing layer that transforms raw data into a format suitable for visualization.
- **Loading States**: Implements loading states for components while data is being fetched.
- **Unit Testing**: Includes unit tests for data processing logic using Jest.

## Running locally
*This project was built using `pnpm` but felt free to use the package manager you are comfortable with.*

#### Clone the repository
```bash
git clone git@github.com:atiladefreitas/sublytics.git
```

#### Install the dependencies
```bash
# npm
npm install

# yarn
yarn install

# pnpm // recommended
pnpm install
```

#### Run the project
```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm // recommended
pnpm dev
```

<details>
<summary><h2>Written questions answers for DailyAI</h2></summary>

1. How would you modify your solution to handle real-time updates for a large number of subscribers (e.g., 1 million+)? Consider both frontend and backend implications.
   
> For this, I would focus on optmize real time updates by using a state manager as Redux with React Query to ensure effiency in caching and real time updates. I also will use windowing technique to render only visible items aiming in reduce DOM nodes and improving performance, avoiding memory leaks and for avoid unnecessary re-renders and control update frequency is preferable the usage of WebSockets. Additionally, I would leverage Web Workers for heavy processing, keeping the main thread free for UI updates.

2. Describe how you would measure and improve the performance of your application. What metrics would you focus on, and what techniques would you employ?

> To measure and improve performance, i would focus on Core Web Vitals metric such as LCP, FID and CLS, using tools such Lighthouse, Chrome devtools and by implementing real time monitoring with Google Analytics, these metrics can be optmized by code splitting techniques with React.lazy and Suspense, optimizing the crtical rendering path and prioritizing resources, as well dynamic imports, and efficient dependency management. In addition, I would integrate a performance monitoring system into the CI/CD pipeline to detect regressions early, and perform regular performance, accessibility, and cross-browser compatibility audits to ensure consistent performance across different devices and browsers. Browserstack, New Relic or Datadog can be good choices for every day monitoring.

</details>
