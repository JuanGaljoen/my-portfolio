Resume/Portfolio Readme
Welcome to my resume/portfolio! This site is hosted at https://resume.juanviljoen.cloud/ and showcases my skills, projects, and experiences. The frontend of the portfolio was built using React. Below is an overview of the technologies used in this project:

Technologies and Services Used
AWS S3 (Simple Storage Service):

Used to store the static files, including HTML, CSS, JavaScript, and images that make up the frontend of the portfolio.
AWS CloudFront:

Used as a content delivery network (CDN) to serve the portfolio's static content globally with low latency and high performance.
AWS Certificate Manager:

Used to manage SSL/TLS certificates to ensure secure communication between clients and CloudFront.
AWS Lambda:

Utilized for serverless compute to perform certain backend tasks if needed, such as handling contact form submissions or other dynamic functionalities.
DynamoDB:

Utilized as a NoSQL database for storing data like user contacts, project details, or any other necessary information.
GitHub Actions:

Used to automate the build and deployment process of the portfolio whenever changes are pushed to the main branch.
Terraform:

Used for infrastructure as code (IAC) to define and provision the AWS resources required for hosting the portfolio.
Deployment Process
The deployment process for this portfolio is automated using GitHub Actions. Whenever changes are pushed to the main branch, the following steps are performed:

Build Frontend:

The React frontend is built, optimized, and prepared for deployment.
Terraform Deployment:

Terraform scripts are executed to provision or update the necessary AWS resources, including S3 buckets, CloudFront distribution, Lambda functions, and DynamoDB tables.
Secure Communication:

SSL/TLS certificates are managed using AWS Certificate Manager, ensuring secure communication between clients and the CloudFront distribution.
Global Distribution:

CloudFront is configured to distribute the static content of the portfolio to edge locations worldwide, reducing latency for users.

Feedback and Contact
I welcome any feedback or suggestions for improvements to my portfolio. If you have any questions or would like to get in touch with me, feel free to reach out via the contact form on my portfolio.

Thank you for visiting my portfolio! I hope you find it informative and enjoyable.