# Research Tutor

Research Tutor is a simple web application that helps you decide which statistical test to use based on a few basic characteristics of your data. Built with **Next.js** and **TypeScript**, it offers a clean user interface and an API endpoint that contains the decision logic for common tests such as t‑tests, ANOVA and chi‑square.

## Features

- **Interactive UI** – Specify whether your outcome variable is categorical, whether the groups are paired, and the number of groups you want to compare.
- **Smart recommendations** – The application recommends appropriate tests such as one‑sample t‑test, independent samples t‑test, paired t‑test, one‑way ANOVA, chi‑square tests, and McNemar’s test, complete with a brief rationale.
- **API endpoint** – A dedicated API route encapsulates the decision logic so it can be reused or extended easily.

## Screenshots

Below are example screenshots of the application. Replace the placeholder paths with actual images after you deploy the app and capture screenshots.

| Homepage | Recommendation Result |
|---------|-----------------------|
| ![](./public/screenshot-home.png) | ![](./public/screenshot-result.png) |

## Getting Started

To set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/research-tutor-ai.git
   cd research-tutor-ai
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## One‑click Deployment on Vercel

Deploying this project to Vercel is straightforward:

1. **Sign in to Vercel** at [vercel.com](https://vercel.com) using your GitHub account.
2. Click **“New Project”** and choose **Import Git Repository**.
3. Select the `research-tutor-ai` repository. Vercel will detect that this is a Next.js project and prefill the correct settings.
4. Click **“Deploy”**. Vercel will build and deploy your application, assigning it a unique URL.
5. Once deployment is complete, you can access the live app at the provided Vercel URL.

You can add custom domains or environment variables via the Vercel dashboard if needed.

<!-- Placeholder for deployment screenshot -->
![](./public/vercel-deploy.png)

## Contributing

Contributions are welcome! If you have suggestions for improvements or would like to add additional statistical tests, please follow these steps:

1. Fork this repository and create your feature branch:

   ```bash
   git checkout -b my-new-feature
   ```

2. Commit your changes and push to your branch:

   ```bash
   git commit -am 'Add some feature'
   git push origin my-new-feature
   ```

3. Open a pull request. Please provide a clear description of the changes and the motivation behind them.

Before submitting a pull request, make sure your code passes linting and builds successfully.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.