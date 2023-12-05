# AI in Production Guide

This article centralizes Azure AI information and tools to enable a smooth transition of AI workloads into Production environment.

<!-- vscode-markdown-toc -->
* [Performance](#Performance)
* [Network and Security](#NetworkandSecurity)
* [Cost Management/Optimization](#CostManagementOptimization)
* [Reliability/High Availability](#ReliabilityHighAvailability)
	* [Strategies for Managing High Volume Token Demand](#StrategiesforManagingHighVolumeTokenDemand)
	* [Load Balancing multi-region Azure OpenAI Instances with Azure API Management](#LoadBalancingmulti-regionAzureOpenAIInstanceswithAzureAPIManagement)
	* [Optimizing Token Usage with GPT Models for Efficient Text Processing](#OptimizingTokenUsagewithGPTModelsforEfficientTextProcessing)
* [Scaling & Quota management](#ScalingQuotamanagement)
* [Observability](#Observability)
* [Multitenant applications](#Multitenantapplications)
	* [Multitenancy and Azure OpenAI Service](#MultitenancyandAzureOpenAIService)
	* [Design patterns for multitenant SaaS applications and Azure AI Search](#DesignpatternsformultitenantSaaSapplicationsandAzureAISearch)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Performance'></a>Performance

## <a name='NetworkandSecurity'></a>Network and Security

## <a name='CostManagementOptimization'></a>Cost Management/Optimization

## <a name='ReliabilityHighAvailability'></a>Reliability/High Availability

Reliability and high availability are critical components of any production system, including AI solutions built with large language models (LLMs). In this section, we will explore the best practices you can apply to your AI solutions to ensure they have appropriate means in place to load balance requests, failover to healthy instances, and recover from failures.

### <a name='StrategiesforManagingHighVolumeTokenDemand'></a>Strategies for Managing High Volume Token Demand

<link-to-new-content>

### <a name='LoadBalancingmulti-regionAzureOpenAIInstanceswithAzureAPIManagement'></a>Load Balancing multi-region Azure OpenAI Instances with Azure API Management

If you are developing a production AI solution using Azure OpenAI and need to optimize for high availability and reliability, you may want to use multiple Azure OpenAI instances across multiple regions. However, managing and distributing the requests to a pool of Azure OpenAI instances can be a challenge. In this article and code sample, we show you how to use Azure API Management to simplify this process using load balancing policies with a straight forward Bicep template deployment.

The benefits of adopting this approach include:

- **Operational excellence**: Azure API Management provides a centralized point of control for all your Azure OpenAI instances. You can use Azure API Management to manage access policies, monitor usage, and apply rate limits to applications using your service.
- **Performance efficiency**: Taking advantage of round-robin load balancing techniques in Azure API Management, you can distribute requests across multi-region deployments of Azure OpenAI to optimize for performance and throughput. You can also use Azure API Management to cache responses and optimize for latency.
- **Reliability**: As well as load balancing, Azure API Management provides resiliency in your AI solutions without additional application code. You can easily apply retry policies, handle errors gracefully, and failover to healthy instances ensuring high availability.

Discover more: [Azure OpenAI Service Load Balancing with Azure API Management](https://learn.microsoft.com/en-gb/samples/azure-samples/azure-openai-apim-load-balancing/azure-openai-service-load-balancing-with-azure-api-management/)

### <a name='OptimizingTokenUsagewithGPTModelsforEfficientTextProcessing'></a>Optimizing Token Usage with GPT Models for Efficient Text Processing

When using large language models (LLMs) such as GPT-4, token usage is a critical factor in determining both the cost and performance of your AI solution. Tokens are the basic, numerical representation of words and phrases that GPT models use to analyze and generate text. In this article, we explore the key challenges and solutions for optimizing AI solutions for token usage.

You will learn:

- **The concept and types of tokens**: You will understand what tokens are, how they are formed.
- **The challenges and solutions for token usage optimization**: You will discover the challenges that limit token usage in large language models, such as compute and memory constraints. You will also learn how to overcome them with techniques such as text truncation and chunking.
- **How to take advantage of tooling to optimize token usage**: You will learn how to use tools, such as the Token Metrics and Code Optimizer, to help you test and optimize the number of tokens in your requests to GPT models.

Discover more: [Unlocking the Power of Tokens: Optimizing Token Usage in GPT for Efficient Text Processing](https://techcommunity.microsoft.com/t5/healthcare-and-life-sciences/unlocking-the-power-of-tokens-optimizing-token-usage-in-gpt-for/ba-p/3826665)

## <a name='ScalingQuotamanagement'></a>Scaling & Quota management

## <a name='Observability'></a>Observability

## <a name='Multitenantapplications'></a>Multitenant applications

### <a name='MultitenancyandAzureOpenAIService'></a>Multitenancy and Azure OpenAI Service

A multitenant solution is one used by multiple customers, or tenants. When you have a multitenant system that uses Azure OpenAI, there are several elements and isolation models you need to consider that factor into your architecture.

Discover more: [Multitenancy and Azure OpenAI Service](https://learn.microsoft.com/azure/architecture/guide/multitenant/service/openai)

### <a name='DesignpatternsformultitenantSaaSapplicationsandAzureAISearch'></a>Design patterns for multitenant SaaS applications and Azure AI Search

In the case of a multitenant scenario, the application developer consumes one or more search services and divides their tenants among services, indexes, or both. Azure AI Search has a few common patterns when modeling a multitenant scenario.

Discover more: [Design patterns for multitenant SaaS applications and Azure AI Search](https://learn.microsoft.com/azure/search/search-modeling-multitenant-saas-applications)
