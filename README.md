Welcome to My Portfolio

This site, hosted at juanviljoen.com, showcases my skills, projects, and experiences. The frontend was built using React. Below is an overview of the technologies used in this project:

Technologies and Services Used

AWS Services

AWS S3 (Simple Storage Service):
Used to store static files, including HTML, CSS, JavaScript, and images for the portfolio.

AWS CloudFront:
Serves as a content delivery network (CDN) to deliver the portfolio's static content globally with low latency and high performance.

AWS Certificate Manager:
Manages SSL/TLS certificates for secure communication between clients and CloudFront.

AWS Lambda:
Utilized for serverless computing to run the code that tracks visitor counts.

API Gateway:
Enhances the portfolio with dynamic functionalities, enabling interaction with the AWS Lambda function to update the visitor count.

DynamoDB:
A NoSQL database used to store the visitor count.

CI/CD
GitHub Actions:
Automates the build and deployment process whenever changes are pushed to the main branch.

Infrastructure as Code
Terraform:
Used to define and provision the AWS resources required for the visitor counter.

Deployment Process
The deployment process for this portfolio is automated using GitHub Actions. When changes are pushed to the main branch, the following steps are executed:

Build Frontend:
The React frontend is built, optimized, and prepared for deployment.

Terraform Deployment:
Terraform scripts are executed to provision or update the necessary AWS resources, including S3 buckets, CloudFront distribution, Lambda functions, and DynamoDB tables.

Secure Communication:
SSL/TLS certificates are managed using AWS Certificate Manager to ensure secure communication between clients and the CloudFront distribution.

Global Distribution:
CloudFront is configured to distribute the portfolio's static content to edge locations worldwide, reducing latency for users.

Feedback and Contact
I welcome any feedback or suggestions for improvements to my portfolio. If you have any questions or would like to get in touch, please reach out via the contact form on my portfolio.

Thank you for visiting! I hope you find it informative and enjoyable.

