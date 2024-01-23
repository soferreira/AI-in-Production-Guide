# Chapter 13: Building for Everyone: Multitenant Architecture

A multitenant solution refers to a single software application that is utilized by multiple customers, also known as tenants. It's important to distinguish between tenants and users; while users are individual accounts, a tenant represents a collective group of users from a single organization, company, or group.Examples of multitenant applications include:  

Business-to-Business (B2B): multitenant solutions are often seen in software as a service (SaaS) products like accounting software and work tracking tools. These applications are shared among different businesses, each operating as a distinct tenant.

Business-to-Consumer (B2C): multitenant solutions are common in services like music streaming platforms, photo sharing apps, and social networking sites. Here, each consumer forms a tenant.

Enterprise-wide platform solutions: multitenant solutions can take the form of shared platform services. An example is a shared Kubernetes cluster used by multiple business units within a single organization, each unit acting as a separate tenant.

When building your own multitenant solutions, there are several key architectural [considerations](https://learn.microsoft.com/azure/architecture/guide/multitenant/considerations/overview) that will influence your design, as well as different architectural [approaches](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/overview).

## Architectural approaches for AI and ML in multitenant solutions

When building AI/ML applications in a multitenant environment, there are several key considerations and approaches to keep in mind:

- **Data Isolation and Privacy**: Each tenant's data should be isolated from others to ensure privacy and security. This is particularly important in AI/ML applications where data is the key driver of the system's learning and predictions.
- **Model Training and Deployment**: Depending on the application, you might need to train a separate model for each tenant or a shared model for all tenants. If you're training separate models, you'll need to manage resources efficiently to handle the computational load. If you're using a shared model, you'll need to ensure that it performs well across all tenants.
- **Scalability**: As the number of tenants increases, your AI/ML application should be able to scale accordingly. This includes the ability to handle increased data volumes, model training tasks, and prediction requests.
- **Performance**: The performance of the AI/ML application should be consistent across all tenants, regardless of the size or activity level of each tenant.
- **Customizability**: Depending on your application, you might need to provide tenants with the ability to customize the AI/ML models or features to suit their specific needs.
- **Cost Management**: The costs of running AI/ML workloads can be high, especially when it comes to data storage and compute resources for model training and prediction. You'll need to manage these costs effectively while ensuring fair pricing for each tenant.

Approaches to these considerations can vary. For example, you might choose to have each tenant's data and models completely isolated. Alternatively, you might opt to have data and models that are shared across tenants, but with strict access controls to ensure data privacy. Hybrid approaches are also possible, depending on the specific needs and constraints of your application. Discover more: [Architectural approaches for AI and ML in multitenant solutions](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/ai-ml)

## Multitenancy and Azure OpenAI Service

A multitenant solution is one used by multiple customers, or tenants. When you have a multitenant system that uses Azure OpenAI, there are several elements and isolation models you need to consider that factor into your architecture.

Discover more: [Multitenancy and Azure OpenAI Service](https://learn.microsoft.com/azure/architecture/guide/multitenant/service/openai)

## Design patterns for multitenant SaaS applications and Azure AI Search

In the case of a multitenant scenario, the application developer consumes one or more search services and divides their tenants among services, indexes, or both. Azure AI Search has a few common patterns when modeling a multitenant scenario.

Discover more: [Design patterns for multitenant SaaS applications and Azure AI Search](https://learn.microsoft.com/azure/search/search-modeling-multitenant-saas-applications)