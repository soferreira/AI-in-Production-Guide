# Chapter 11: Expanding Horizons: Scaling & Quota Management

In the ever-evolving landscape of AI, the ability to scale solutions efficiently and manage quotas for managed services effectively is critical. In this chapter, we delve into techniques for expanding the horizons of your AI applications, ensuring they not only meet the growing demands of your customers but do so with strategic foresight.

![Digital artwork representing 'Expanding Horizons'](./../media/chapter11.jpeg)

## Scaling Azure AI solutions for optimal performance

To ensure that AI solutions can handle the increasing volume of data and requests from customers while maintaining low latency and high throughput, it is essential to scale them efficiently. In this section, we explore how you can scale your AI solutions in Azure to meet the demands of your customers.

### How to scale Azure AI services

Scaling for production is a crucial aspect of any solution, and ones built with AI are no exception. As the number of users increase, your AI solutions need to be able to handle the increased load without compromising performance. The following resources provide guidance on how to overcome the challenges that come with scaling an AI solution on Azure. You will learn how to scale your AI solution in production to meet customer demand and ensure a seamless user experience.

- **Scaling up infrastructure for AI model performance**: If you are building and deploying powerful AI models, ensuring that you utilize the Azure's AI infrastructure will provide the necessary scalability and power to deliver the best performance for your deployment. [Microsoft's investment in AI infrastructure](https://azure.microsoft.com/en-us/blog/scale-generative-ai-with-new-azure-ai-infrastructure-advancements-and-availability/) enables you to take advantage of the latest CPU and GPU performance for faster AI model performance to handle the increasing demand of AI workloads efficiently.
- **Scaling Azure AI Services**: When scaling out for production AI workloads, it is essential to consider the scaling options available to you. For example, taking advantage of [auto-scaling in Azure AI Services](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/autoscale?tabs=portal) will allow you to dynamically adjust the service capacity based on real-time usage. This reduces the risks of being throttled by potential "too many requests" errors and provides your users with a smooth experience during usage spikes. However, it is also important to consider the cost implications of using such features and ensure that you have the right capacity for your workloads.

### Useful examples for scaling Azure AI services

- **Scaling Azure Cognitive Services deployments**: The [scaling strategies for large scale Azure Cognitive Services deployment article](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/scaling-strategies-for-large-scale-azure-cognitive-services/ba-p/3819520) provides valuable insights on how to take advantage of resource allocation capabilities of Azure Cognitive services to maintain service stability. Taking advantage of the built-in Autoscale feature, you ensure that the real-time demand on your deployed Cognitive Services increases and decreases the resource capacity when needed. Combined with techniques for load balancing, backoff strategies, and regular load testing, you can avoid unexpected spikes that lead to throttling your AI solutions.
- **Combining PTU and TPM Azure OpenAI deployments**: When scaling Azure AI services, it's crucial to balance cost-efficiency with performance. The [Azure OpenAI Using PTUs/TPMs with API Management - Using the Scaling Special Sauce](https://github.com/Azure/aoai-apim/blob/main/README.md) article highlights how to secure reserved capacity for predictable performance and combine with pay-as-you-go tokens to offer flexibility for varying workloads. Combined with Azure API Management, this approach allows you to avoid bottlenecks in your AI solutions to scale out to meet customer demands.

## Navigating quota management for Azure AI services

Managing quotas for AI services in Azure can be challenging, especially when dealing with multiple AI offerings. In this section, we explore essential resources that demonstrate how you can optimize your Azure AI service usage and avoid quota-related issues. You'll find tips on how to optimize your usage of Azure AI services.

### How to manage quotas for Azure AI services

Quotas are an essential concept across consumable Azure resources that help manage the allocation of rate limits across the deployments within your subscription. With Azure AI Services, quotas enable you to control the rate at which your AI solutions consume available capacity. By configuring quotas, you can ensure that your solutions don't consume more resources than you have allocated to them, which can help prevent overuse and overspending.

- **Optimizing Azure Machine Learning quotas at scale**: When considering [quota for Azure Machine Learning](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/optimize-ai-machine-learning-cost), choose the right virtual machines (VMs) that align with your workload requirements to avoid unnecessary costs when training your models. Taking advantage of the built-in monitoring capabilities of Azure Machine Learning, you can quickly identify under utilized resources and scale down to maximize usage and reduce costs. As you continue to monitor your usage, defining a good estimate for your compute will allow you to also take advantage of Azure Reserved VM instances at a discounted rate ensuring you get the best value in terms of quota for your AI solutions. With Azure Machine Learning, consider the [additional resources quotas](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-manage-quotas?view=azureml-api-2) for your workloads such as assets, managed endpoints, and storage.
- **Managing quotas with Azure OpenAI (TPM)**: With Azure OpenAI, managing the quotas for model deployments is crucial to ensure that you have sufficient capacity to meet the demands of your customers. It is important to assess your project's needs and choose the right capacity for your use cases. With Azure OpenAI's out-of-the-box quota management, you can easily monitor your usage of each model deployment and make informed decisions. To ensure consistency across your environments when using the pay-as-you-go model, adopting an infrastructure-as-code approach is recommended to manage your Azure OpenAI deployments. This enables you to define your deployments in a declarative manner ensuring that you use only the resources you need and avoid over-allocation. Open-source software engineer John Reilly provides a simple, detailed guide to [handling capacity and quota limits for Azure OpenAI with Bicep](https://johnnyreilly.com/azure-open-ai-capacity-quota-bicep). The guide provides the necessary Bicep module to deploy Azure OpenAI model deployments and a sample highlight how to deploy the module.
- **Managing quotas with Azure OpenAI (PTU)**: When reaching quota limits on the pay-as-you-go model, provisioned throughput units (PTUs) are available to ensure predictable performance for your Azure OpenAI solutions by reserving processing capacity for prompts and generation completions purchased as a monthly commitment. By reserving capacity, this allows you to specify the required throughput offering stable maximum latency and throughput for your workloads. High throughput workloads may see improved cost savings vs using token-based consumption in Azure OpenAI. However, you must carefully assess your AI solution's throughput requirements to also prevent over-provisioning. Quota for PTUs is determined by a deployment type, model, and region triplet which is not interchangeable. For example, if you have 300 PTUs provisioned for GPT 3.5 Turbo, those PTUs can only be used for GPT 3.5 Turbo deployments within a specific Azure subscription. Once deployed, the throughput is available whether you use it or not. Therefore, it is important to ensure that you have the right capacity for your workloads.

### Useful examples for managing quotas with Azure AI services

- **Strategies for high-volume token usage with Azure OpenAI**: In the rapidly evolving landscape of AI solutions, engineering teams face the challenge of scaling and managing model quotas within Azure OpenAI. This is amplified with the need to optimize token usage for multi-tenant SaaS applications that will see high volumes of requests. Explore [strategies for optimizing high-volume token usage with Azure OpenAI](https://techcommunity.microsoft.com/t5/fasttrack-for-azure/strategies-for-optimizing-high-volume-token-usage-with-azure/ba-p/4007751) for a comprehensive guide to harness the full potential of Azure OpenAI Service to build reliable AI solutions that meet the demands of your customers. You will learn how to leverage models for different use cases, apply prompt engineering techniques, and use embeddings to provide context and reduce the overall token count without compromising on the quality of the results.
- **Designing Azure Machine Learning infrastructure for production**: The [Azure MLOps Accelerator](https://microsoft.github.io/azureml-ops-accelerator/2-Design/) provides data science and engineering teams with a comprehensive guide to designing and deploying Azure Machine Learning infrastructure at scale from development to production. You will learn how to apply best practices to determine compute requirements, manage quotas, and optimize costs for your AI solutions.

## Best practices for scaling and quota management for Azure AI services

When it comes to scaling and quota management for Azure AI services, there are a few best practices to keep in mind.

### Azure Machine Learning

- **Optimize compute resources to meet workload requirements**: Determine the right virtual machine SKU choice for training, for inference, or as a workstation to work from. Start small and scale up as needed.
- **Manage endpoint deployments to avoid quota limits**: With a maximum 100 endpoint deployments per subscription, regularly monitor your managed endpoints and ensure that you decommission any that are no longer in use.
- **Monitor usage to identify underutilized resources**: Use the built-in monitoring capabilities of Azure Machine Learning to identify underutilized resources and scale accordingly to maximize usage and optimize costs.

### Azure AI Services

- **Assign quotas per deployment**: When using Azure AI Services, such as Azure Cognitive Services or Azure OpenAI, assign tokens-per-minute (TPM) limits for each deployment to ensure that you have sufficient capacity for your AI solution use cases avoiding over-allocation and overspending.
- **Scale out with multi-region deployments**: When scaling out your AI solutions, consider deploying your solutions across multiple regions to maximize the available quota capacity available for your Azure subscription.
- **Request quota increases**: When you reach your quota limits, for high volume workloads, request quota increases for your Azure AI services to ensure that you can meet the demands of your customers.

## Conclusion

Scaling is a fundamental requirement for meeting the escalating demands of users and applying appropriate strategies for optimizing AI solutions leads to smooth user experiences on Azure. From leveraging the latest advancements in Azure's AI infrastructure to employing built-in auto-scaling features in Azure AI Services, these practical insights guide you in maintaining seamless user experiences during usage spikes.

Equally important is understanding quota management, an essential practice for controlling resource consumption and preventing overuse and overspending. Whether optimizing Azure Machine Learning quotas at scale or managing quotas with Azure OpenAI using TPMs or PTUs, it is important to align resources with your project needs.

By implementing these practices, you can navigate the complexities of scaling and quota management, ensuring that your Azure AI solutions not only meet current demands but also remain adaptable to the evolving landscape of AI.
