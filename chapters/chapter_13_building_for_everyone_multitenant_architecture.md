# Chapter 13: Building for Everyone: Multitenant Architecture

- **Description**: Designing AI solutions for multi-tenant architectures. Resources on best practices, challenges, and strategies for multi-tenancy.

## Architectural approaches for AI and ML in multitenant solutions

Multitenant solutions, increasingly incorporating AI and ML, provide similar  functionalities to a multitude of tenants. Although tenants usually cannot access or share each other's data, there are instances where they might utilize the same models. The design of multitenant AI/ML solutions necessitates careful consideration of data, model requirements, and the computational resources for model training and inference. Crucial factors include the deployment, distribution, and orchestration of these models, ensuring the solution's accuracy, reliability, and scalability.

Discover more: [Architectural approaches for AI and ML in multitenant solutions](https://learn.microsoft.com/azure/architecture/guide/multitenant/approaches/ai-ml)

## Multi tenancy and Azure OpenAI Service

A multitenant solution is one used by multiple customers, or tenants. When you have a multitenant system that uses Azure OpenAI, there are several elements and isolation models you need to consider that factor into your architecture.

Discover more: [Multitenancy and Azure OpenAI Service](https://learn.microsoft.com/azure/architecture/guide/multitenant/service/openai)

## Design patterns for multitenant SaaS applications and Azure AI Search

In the case of a multitenant scenario, the application developer consumes one or more search services and divides their tenants among services, indexes, or both. Azure AI Search has a few common patterns when modeling a multitenant scenario.

Discover more: [Design patterns for multitenant SaaS applications and Azure AI Search](https://learn.microsoft.com/azure/search/search-modeling-multitenant-saas-applications)
