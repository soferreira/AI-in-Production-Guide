---
nav_order: 16
has_children: false
title: Chapter 15 - Monitoring and Maintenance
permalink: /chapters/chapter_15_continuing_voyage_monitoring_maintenance
layout: default
---

# Chapter 15: Continuing the Voyage: Monitoring and Maintenance

The effective use of AI Services services is not only just about implementation, it's also about continuous monitoring and maintenance. The importance of monitoring and maintenance in Azure AI services cannot be overstated. It ensures the smooth operation of AI applications, helps in identifying and rectifying issues promptly, and aids in optimizing performance over time. Moreover, it provides valuable insights into the system's behavior, which can be used to make informed decisions and strategic improvements.

![Continuing the Voyage: Monitoring and Maintenance](./../media/chapter15.jpg)

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Here are some key elements of AI monitoring:

- **Model Performance Monitoring**: This involves tracking the performance of AI models to ensure they continuously  deliver reliable and accurate results. Metrics such as precision and accuracy are commonly used to assess model performance. Continuous monitoring of these metrics allows engineers to detect shifts in model behavior, identify potential performance degradation or drift, and take necessary corrective measures to maintain model accuracy. We covered [performance](./chapter_07_navigating_rough_seas_performance) in chapter 7.

- **Resource Consumption Monitoring**: AI applications can be resource-intensive, requiring substantial CPU and GPU usage, memory, and storage. Monitoring these resources ensures that AI systems have sufficient capacity to efficiently manage workloads without performance bottlenecks or system outages. Depending on the deployment platform, various tools can be used.

- **API Usage Monitoring**: AI models are usually accessed via APIs (Application Programming Interfaces). Monitoring API usage involves tracking metrics such as request rates, response times, and throughput. This allows engineers to detect unusual patterns, like sudden surges in API calls, which could indicate increased demand or potential issues.

- **Request Volume Monitoring**: The number of requests made to AI models is another crucial metric. High request volumes can put a strain on AI systems and affect response times. Monitoring request volume helps engineering teams identify peak usage periods and plan for scalability challenges.

- **Cost Management**: Deploying AI can incur significant costs, including charges for cloud computing and API usage. Monitoring these costs helps organizations optimize resource utilization and manage their budgets effectively. We covered [cost management](./chapter_09_managing_expedition_cost_management_optimization) in chapter 9.

## Monitor Azure AI and Machine Learning services

The [Monitor Azure AI Services](https://learn.microsoft.com/training/modules/monitor-cognitive-services/) course will teach you the significance of monitoring Azure AI Services. This is crucial for tracking utilization, identifying trends, and detecting and troubleshooting issues. Upon completion of this module, you will have the ability to monitor Azure AI Services costs, create alerts, view metrics, and manage diagnostic logging. Metrics for the resource type Microsoft.CognitiveServices/accounts are comprehensively listed and can be accessed via the following link: [Supported metrics for Microsoft.CognitiveServices/accounts](https://learn.microsoft.com/azure/azure-monitor/reference/supported-metrics/microsoft-cognitiveservices-accounts-metrics).

In the sections that follow, we will highlight the resources available that discuss best practices, and provide practical guidance on how to effectively monitor and maintain your Azure AI services.

### Azure OpenAI

Azure OpenAI, a part of the Azure AI services, is a robust and comprehensive tool that offers a wide range of features to optimize performance, manage resources, and ensure security. This section will guide you through various aspects of Azure OpenAI, providing a deeper understanding of its functionalities and how to leverage them effectively.

- **Microsoft on Azure OpenAI Performance Optimization**: In ["How to Optimize Performance for Azure OpenAI"](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/latency), Microsoft provides insights on important performance concepts - latency and throughput, and how to optimize them for applications using Azure OpenAI. The article provides tips on reducing latency and increasing throughput, such as using faster models, lowering the max tokens parameter, enabling streaming, modifying the content filtering policies, optimizing quota, batching requests, and using provisioned deployments. It also guides on monitoring and measuring performance using Azure Monitor and the Azure OpenAI Benchmarking repository. This guide can be extremely useful for those looking to maximize the efficiency of their Azure OpenAI deployments.

- **Managing Azure OpenAI Service Quota**: Azure OpenAI provides a flexible quota system that allows you to manage rate limits across your deployments effectively. This system ensures that resources are allocated optimally, preventing overuse and underuse. This [article](https://learn.microsoft.com/azure/ai-services/openai/how-to/quota?tabs=rest) walks you through the process of managing your Azure OpenAI quota, helping you to actively manage the allocation of rate limits across the deployments within your subscription.

- **Monitoring Azure OpenAI Service**: Monitoring is a critical aspect of managing any service. Azure OpenAI uses Azure Monitor, a powerful service that provides monitoring and analytics of Azure resources. This [guide](https://learn.microsoft.com/azure/ai-services/openai/how-to/monitoring) will help you understand how to monitor your Azure OpenAI resources effectively, ensuring optimal performance and availability.

    Additionally, the [Azure OpenAI Insights](https://techcommunity.microsoft.com/t5/fasttrack-for-azure/azure-openai-insights-monitoring-ai-with-confidence/ba-p/4026850) article provides a downloadable Azure Monitor workbook. This workbook, combined with Azure OpenAI's comprehensive metrics and diagnostic logs, can be a powerful tool for scaling and monitoring your AI initiatives.

- **Implementing Logging and Monitoring**: This [architecture](https://learn.microsoft.com/azure/architecture/ai-ml/openai/architecture/log-monitor-azure-openai) provides advanced logging capabilities for tracking API usage and performance. The architecture also offers robust security measures to protect sensitive data and prevent malicious activity, ensuring that your enterprise deployments are secure and efficient.

    This [repository](https://github.com/Azure-Samples/openai-python-enterprise-logging) details the deployment of an Enterprise Azure OpenAI reference architecture. It provides advanced patterns for customers using models with larger token sizes, advanced analytics on prompts and responses, and requirements to send these events to another type of data store. It ensures comprehensive logging of Azure OpenAI model execution, advanced usage and throttling controls

- **Abuse Monitoring**:Azure OpenAI Service detects and mitigates instances of recurring content and/or behaviors that suggest use of the service in a manner that may violate the Code of Conduct or other applicable product terms. Details on how to do Abuse Monitoring can be found [here](https://learn.microsoft.com/azure/ai-services/openai/concepts/abuse-monitoring).

### Azure AI search

- **Understanding Performance Benchmarking**: Azure AI Search's performance depends on a variety of factors including the size of your search service and the types of queries you're sending. To help estimate the size of search service needed for your workload, [this article](https://learn.microsoft.com/azure/search/performance-benchmarks) shows you the several performance benchmarks for different search services and configurations.

- **Factors Influencing Azure AI Search Performance**:Azure AI Search's performance is influenced by several factors, including the types of queries you're sending. This [article](https://learn.microsoft.com/azure/search/search-performance-analysis) describes the tools, behaviors, and approaches for analyzing query and indexing performance in Azure AI Search.
In any large implementation, it's critical to do a performance benchmarking test of your Azure AI Search service before you roll it into production. You should test both the search query load that you expect, but also the expected data ingestion workloads. Having benchmark numbers helps to validate the proper search tier, service configuration, and expected query latency.

- **Tips for Boosting Performance**:Understanding the factors that most likely impact search performance can help you avoid inefficiencies and maximize your search service's potential. Key factors include index composition (schema and size), query design, and service capacity (tier, and the number of replicas and partitions). Discover more:[Tips for better performance in Azure AI Search](https://learn.microsoft.com/azure/search/search-performance-tips)

- **Monitoring Azure AI Search with Azure Monitor**: Azure Monitor provides monitoring capabilities over all Azure resources, including Azure AI Search. This [article](https://learn.microsoft.com/azure/search/monitor-azure-cognitive-search) explains how monitoring works for Azure AI Search, including how to measure query performance and volume using built-in metrics and resource logging.

- **Monitoring Query Requests**: This [article](https://learn.microsoft.com/azure/search/search-monitor-queries) explains how to measure query performance and volume using built-in metrics and resource logging. The Azure portal shows basic metrics about query latency, query load, and throttling.

- **Monitoring Indexer Status and Results**: You can monitor indexer processing in the Azure portal, or programmatically through REST calls or an Azure SDK. In addition to status about the indexer itself, you can review start and end times, and detailed errors and warnings from a particular run.

    Discover more: [Monitor indexer status and results in Azure AI Search](https://learn.microsoft.com/azure/search/search-howto-monitor-indexers)

- **Collect telemetry data for search traffic analytics**: Search traffic analytics is a pattern for collecting telemetry about user interactions with your Azure AI Search application, such as user-initiated click events and keyboard inputs. Using this information, you can determine the effectiveness of your search solution, including popular search terms, click through rate, and which query inputs yield zero results.

    This pattern takes a dependency on Application Insights (a feature of Azure Monitor) to collect user data. It requires that you add instrumentation to your client code, as described in this article. Finally, you will need a reporting mechanism to analyze the data. Discover more: [Collect telemetry data for search traffic analytics](https://learn.microsoft.com/azure/search/search-traffic-analytics)

- **Visualizing Azure AI Search Logs and Metrics with Power BI**: Azure AI Search can send operation logs and service metrics to an Azure Storage account, which you can then visualize in Power BI. This [article](https://learn.microsoft.com/azure/search/search-monitor-logs-powerbi) explains the steps and how to use a Power BI Template App to visualize the data. The template can help you gain detailed insights about your search service, including information about queries, indexing, operations, and service metrics.

- **Setting Up for Success with Azure AI Search Performance**: The [article](https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/azure-cognitive-search-performance-setting-yourself-up-for/ba-p/2324037) provides an overview of performance in Azure AI Search. It guides you through the key factors that determine performance, shows you some performance benchmarks, and how you can run your own performance tests. It also provides tips on how you can diagnose and fix performance issues you might be experiencing.

### Azure Machine Learning

- **Data Collection from Models in Production**: This [article](https://learn.microsoft.com/azure/machine-learning/concept-data-collection?view=azureml-api-2) introduces the Azure Machine Learning Data collector, which provides real-time logging of input and output data from models deployed to managed online endpoints or Kubernetes online endpoints. The logged inference data is stored in Azure blob storage and can be used for model monitoring, debugging, or auditing, thereby providing observability into the performance of your deployed models.

- **Collecting Production Data from Deployed Models**: Learn how to [collect production inference data from a model](https://learn.microsoft.com/azure/machine-learning/how-to-collect-production-data?view=azureml-api-2&tabs=azure-cli) deployed to an Azure Machine Learning managed online endpoint or Kubernetes online endpoint. Azure Machine Learning Data collector logs inference data in Azure blob storage. You can enable data collection for new or existing online endpoint deployments. The data collected with the provided Python SDK is automatically registered as a data asset in your Azure Machine Learning workspace and can be used for model monitoring. If you're interested in collecting production inference data for an MLFlow model deployed to a real-time endpoint, doing so can be done with a single toggle. To learn how to do this, see [Data collection for MLFlow models](https://learn.microsoft.com/azure/machine-learning/how-to-collect-production-data?view=azureml-api-2&tabs=azure-cli#collect-data-for-mlflow-models).

- **Model Monitoring in Azure Machine Learning**: Model monitoring is the last step in the machine learning end-to-end lifecycle. This [article](https://learn.microsoft.com/azure/machine-learning/concept-model-monitoring?view=azureml-api-2) discusses the signals and metrics you can monitor, and the recommended practices for using model monitoring. It also explains how Azure Machine Learning acquires monitoring signals through data analysis on streamed production inference data and reference data.

- **Monitoring Azure Machine Learning with Azure Monitor**: When you have critical applications and business processes relying on Azure resources, you want to monitor those resources for their availability, performance, and operation. This [article](https://learn.microsoft.com/azure/machine-learning/monitor-azure-machine-learning?view=azureml-api-2) describes the monitoring data generated by Azure Machine Learning and how to analyze and alert on this data with Azure Monitor.

- **Monitoring Performance of Models Deployed to Production**: Once a machine learning model is in production, it's important to critically evaluate the inherent risks associated with it and identify blind spots that could adversely affect your business. This [article](https://learn.microsoft.com/azure/machine-learning/how-to-monitor-model-performance?view=azureml-api-2&tabs=azure-cli) provides insights on how to perform out-of-box and advanced monitoring setup for models that are deployed to Azure Machine Learning online endpoints. It also explains how to set up model monitoring for models that are deployed outside Azure Machine Learning or deployed to Azure Machine Learning batch endpoints.

### Azure Machine Learning Studio

- **Monitor and analyze jobs in studio**: You can use Azure Machine Learning studio to monitor, organize, and track your jobs for training and experimentation. Your ML job history is an important part of an explainable and repeatable ML development process. Discover more [here](https://learn.microsoft.com/azure/machine-learning/how-to-track-monitor-analyze-runs?view=azureml-api-2).

- **Organize & track training jobs**: You can use the jobs list view in Azure Machine Learning studio to organize and track your jobs. By selecting a job, you can view and analyze its details, such as metrics, parameters, logs, and outputs. This way, you can keep track of your ML job history and ensure a transparent and reproducible ML development process. Discover more [here](https://learn.microsoft.com/azure/machine-learning/how-to-track-monitor-organize-jobs?view=azureml-api-2).

- **Visualize training results in studio**: Explore your experimentation results with a dashboard view. The dashboard view contains a combination of different tiles – chart visualizations, comparison table, markdown, and more for a view that is dynamic, flexible, and customizable for you to explore your experimentation results. The dashboard can help you to save time, keep your results organized, and make informed decisions such as whether to re-train or deploy your model. Discover more [here](https://learn.microsoft.com/azure/machine-learning/how-to-visualize-jobs?view=azureml-api-2).

## Key Takeaways and Actionable Strategies for AI Monitoring in Azure

It is important to monitor AI solutions to ensure their availability, performance, and operation. Monitoring can help detect and resolve issues quickly, and ensure that the AI solution is performing optimally. Here are some recommendations when building AI solutions on Azure to act on:

- **Set up monitoring dashboards**: Azure provides out-of-box dashboards for each of your Azure resources. To access the monitoring dashboards, sign in to the Azure portal and select the overview pane for one of your Azure resources.

- **Configure diagnostic settings**: You can configure Azure Monitor to generate data in activity logs, resource logs, virtual machine logs, and platform metrics. Platform metrics and the Azure Monitor activity log are collected and stored automatically. This data can be routed to other locations by using a diagnostic setting. Azure Monitor resource logs aren’t collected and stored until you create a diagnostic setting and then route the logs to one or more locations. When you create a diagnostic setting, you specify which categories of logs to collect.

- **Analyze metrics**: You can analyze metrics for your Azure resources with Azure Monitor tools in the Azure portal. From the Overview page for your Azure resource, select Metrics under Monitoring in the left pane.

By following these recommendations, teams can ensure that their AI solutions are performing optimally and that any issues are detected and resolved quickly.
