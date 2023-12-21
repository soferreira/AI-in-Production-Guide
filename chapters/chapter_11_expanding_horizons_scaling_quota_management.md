# Chapter 11: Expanding Horizons: Scaling & Quota Management

In the ever-evolving landscape of AI, the ability to scale solutions efficiently and manage quotas for managed services effectively is critical. In this chapter, we delve into techniques for expanding the horizons of your AI applications, ensuring they not only meet the growing demands of your customers but do so with strategic foresight.

![Digital artwork representing 'Expanding Horizons'](./../media/chapter11.jpeg)

## Scaling Azure AI solutions for optimal performance

To ensure that AI solutions can handle the increasing volume of data and requests from customers while maintaining low latency and high throughput, it is essential to scale them efficiently. In this section, we explore how you can scale your AI solutions in Azure to meet the demands of your customers.

### The importance of scaling Azure AI services to meet the demands of growing businesses

### How to scale Azure AI services

- **Combining PTU and TPM Azure OpenAI deployments**: When scaling Azure AI services, it's crucial to balance cost-efficiency with performance. The [Azure OpenAI Using PTUs/TPMs with API Management - Using the Scaling Special Sauce](https://github.com/Azure/aoai-apim/blob/main/README.md) article highlights how to secure reserved capacity for predictable performance and combine with pay-as-you-go tokens to offer flexibility for varying workloads. Combined with Azure API Management, this approach allows you to avoid bottlenecks in your AI solutions to scale out to meet customer demands.

### Useful examples for scaling Azure AI services

## Navigating quota management for Azure AI services

Managing quotas for AI services in Azure can be challenging, especially when dealing with multiple AI offerings. In this section, we explore essential resources that demonstrate how you can optimize your Azure AI service usage and avoid quota-related issues. You'll find tips on how to optimize your usage of Azure AI services.

### How to manage quotas for Azure AI services

Quotas are an essential concept across consumable Azure resources that help manage the allocation of rate limits across the deployments within your subscription. With Azure AI Services, quotas enable you to control the rate at which your AI solutions consume available capacity. By configuring quotas, you can ensure that your solutions don't consume more resources than you have allocated to them, which can help prevent overuse and overspending.

- **Managing quotas with Azure OpenAI (TPM)**: With Azure OpenAI, managing the quotas for model deployments is crucial to ensure that you have sufficient capacity to meet the demands of your customers. It is important to assess your project's needs and choose the right capacity for your use cases. With Azure OpenAI's out-of-the-box quota management, you can easily monitor your usage of each model deployment and make informed decisions. To ensure consistency across your environments when using the pay-as-you-go model, adopting an infrastructure-as-code approach is recommended to manage your Azure OpenAI deployments. This enables you to define your deployments in a declarative manner ensuring that you use only the resources you need and avoid over-allocation. Open-source software engineer John Reilly provides a simple, detailed guide to [handling capacity and quota limits for Azure OpenAI with Bicep](https://johnnyreilly.com/azure-open-ai-capacity-quota-bicep). The guide provides the necessary Bicep module to deploy Azure OpenAI model deployments and a sample highlight how to deploy the module.
- **Managing quotas with Azure OpenAI (PTU)**: When reaching quota limits on the pay-as-you-go model, provisioned throughput units (PTUs) are available to ensure predictable performance for your Azure OpenAI solutions by reserving processing capacity for prompts and generation completions purchased as a monthly commitment. By reserving capacity, this allows you to specify the required throughput offering stable maximum latency and throughput for your workloads. High throughput workloads may see improved cost savings vs using token-based consumption in Azure OpenAI. However, you must carefully assess your AI solution's throughput requirements to also prevent over-provisioning. Quota for PTUs is determined by a deployment type, model, and region triplet which is not interchangeable. For example, if you have 300 PTUs provisioned for GPT 3.5 Turbo, those PTUs can only be used for GPT 3.5 Turbo deployments within a specific Azure subscription. Once deployed, the throughput is available whether you use it or not. Therefore, it is important to ensure that you have the right capacity for your workloads.

### Useful examples for managing quotas with Azure AI services

- **Strategies for high-volume token usage with Azure OpenAI**: In the rapidly evolving landscape of AI solutions, engineering teams face the challenge of scaling and managing model quotas within Azure OpenAI. This is amplified with the need to optimize token usage for multi-tenant SaaS applications that will see high volumes of requests. Explore [strategies for optimizing high-volume token usage with Azure OpenAI](https://techcommunity.microsoft.com/t5/fasttrack-for-azure/strategies-for-optimizing-high-volume-token-usage-with-azure/ba-p/4007751) for a comprehensive guide to harness the full potential of Azure OpenAI Service to build reliable AI solutions that meet the demands of your customers. You will learn how to leverage models for different use cases, apply prompt engineering techniques, and use embeddings to provide context and reduce the overall token count without compromising on the quality of the results.

## Best practices for scaling and quota management for Azure AI services

## Conclusion
