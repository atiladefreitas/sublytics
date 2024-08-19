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
