---
nav_order: 13
has_children: false
title: Chapter 12 - Observability
permalink: /chapters/chapter_12_keeping_log_observability
layout: default
---

# Chapter 12: Keeping a Log: Observability

In this chapter, we delve into the fascinating world of observability in the context of Artificial Intelligence (AI). Observability, a term borrowed from control theory, is the ability to infer the internal states of a system based on its external outputs. In the realm of AI, observability takes on a new dimension as we strive to understand and interpret the behavior of complex AI models. From generative AI to predictive Machine Learning (ML), each AI model presents unique challenges and opportunities for observability. We will also explore how Azure services can be leveraged for AI observability.

![Keeping a Log: Observability](./../media/chapter12.jpg)

## What is Observability?

Observability is the ability to understand the internal state of a system based on its external outputs, such as logs, metrics, traces, and other telemetry data. It helps developers monitor, troubleshoot, and debug complex systems, such as cloud-based applications, by providing a comprehensive view of their behavior and performance.

Observability is different from monitoring, which is a more limited way of tracking specific metrics and alerting observers when they exceed certain thresholds.

Observability involves collecting and analyzing a large amount of data from various sources, which can provide deeper insights into the system’s behavior and identify areas where improvements can be made. Observability can also help enhance the user experience, reduce downtime, and lower maintenance costs by enabling faster and more accurate problem resolution.

Implementing observability requires a toolbox of techniques and tools covering the three pillars: logging, tracing, and metrics.

Steps to implement observability include:

- **Instrumentation**: Identify and implement tools that measure your systems' performance, covering logging, metrics, and tracing. Linking your network management and control systems can boost observability.
- **Collection**: After setting up instrumentation, collect the generated data using tools like logging frameworks, metric collection systems, and tracing libraries.
- **Storage**: Decide on a storage method for collected data. A centralized location like a database or data lake is often used, allowing for later query and analysis. Regular backups and automated retrieval systems can help manage data accessibility.
- **Analysis**: Analyze collected data for insights into system behavior and performance. This can involve dashboards, alerting systems, and machine learning models.
- **Visualization**: Present data in visually understandable formats such as charts and graphs to identify trends and patterns.

To understand this in more detail, consider the following in-depth resources:

- **What Is Observability? Everything a Beginner Needs to Know**: [In Stackify's article](https://stackify.com/what-is-observability-everything-a-beginner-needs-to-know/), they offer a thorough introduction to observability in software development, emphasizing its role in understanding a system's internal state via external outputs. It differentiates observability from monitoring and stresses the importance of data collection and analysis for system insights. The page also highlights the benefits of observability in enhancing user experience, reducing downtime, and cutting maintenance costs.
- **What is observability and why is it important?**: [This article from IBM](https://www.ibm.com/resources/automate/observability-basics) is the first in a series that starts with the basics of observability, why it's important, and how to embark on an observability journey. It also explores the varying needs and paths a company might take depending on their business type. It is a thorough exploration of observability for a company embarking on this journey.

## AI Observability

AI systems present their own set of unique challenges, distinct from those of the regular application stack. These include issues like model drift, data quality concerns, outliers, and training-serving skew, among others. In this section, we will explore how observability can be used as a powerful tool to address these challenges.

Observability, is a proactive and comprehensive approach that extends beyond monitoring to provide a high-level overview of the system's health, performance, and behavior. It covers not only the model but also the associated data, infrastructure, and code, facilitating troubleshooting and root cause analysis. Observability empowers you to gain insights into the inner workings of the AI system, enabling informed decisions about model improvements, optimizations, and reworkings.

While monitoring primarily aims to raise alerts when an issue arises, observability enables you to investigate the reasons behind these alerts, understand the root causes of problems, and devise strategies to enhance the model's performance. Monitoring focuses on tracking and analyzing low-level model-specific metrics, while observability broadens the scope to encompass the entire system, including input data, infrastructure, and code. Dive in as we unravel how AI Observability can be leveraged to build robust, efficient, and accountable AI systems.

- **AI Observability 101: A Complete Guide**: From Censius, [this blog post](https://censius.ai/blogs/ai-observability-guide) presents an in-depth guide on AI observability. It discusses the unique challenges of maintaining visibility into AI systems, the importance of observability in managing these systems, and how it contributes to their reliability and performance. The post also explores various techniques and tools for achieving AI observability, making it a valuable read for anyone working with AI systems and looking to enhance their understanding of AI observability.
- **CI/CD and AI Observability: A Comprehensive Guide for DevOps Teams**: [Collabnix's comprehensive guide](https://collabnix.com/ci-cd-and-ai-observability-a-comprehensive-guide-for-devops-teams/) provides an in-depth look into the integration of CI/CD and AI observability, specifically for DevOps teams. It discusses how incorporating AI observability into the CI/CD pipeline can help identify issues early, improve system performance, and ensure the reliability of AI models. The guide also provides practical advice and strategies for implementing AI observability in DevOps practices.

### Observability of ML Models

The implementation of ML observability is crucial for enhancing the reliability, explainability, and maintainability of ML systems. It enables effective detection, diagnosis, and troubleshooting of issues, provides insights for model improvement, and allows a holistic understanding of the system. By adopting observability, you can gain end-to-end visibility into your ML systems, fostering reliability, explainability, and optimization.

- **A Guide to Machine Learning Model Observability**: [In Encord's blog post](https://encord.com/blog/model-observability-techniques/), they highlight the two main components of observability: model monitoring, which detects production issues through automated metrics, and model explainability, which investigates a model's decision-making process for root-cause analysis. The article also discusses the nuances of observability for large language models and computer vision models, which require advanced techniques due to their unique challenges. It also addresses future trends and challenges in model observability, emphasizing the need for improved explainability techniques to understand modern model workings.
- **ML Observability: what, why, how**: [Ubuntu's article on ML Observability](https://ubuntu.com/blog/ml-observability) discusses the the goals of observability to automatically surface and address ML issues, such as training data gaps, compare model performances, validate models, it also acts as a guardrail for models in production. It then shows how to implement in practice ML observability with an open-source stack of technologies.

### Generative AI Observability

Generative AI and Large Language Models (LLMs) are making significant waves globally. The observability toolkit for these technologies is still new, and the best practices are emerging. As such, it is essential to keep a close eye on this area for exciting and novel advancements. Below we provide resources to start the exploration.

- **LLM Monitoring and Observability — A Summary of Techniques and Approaches for Responsible AI**: [Towards Data Science's guide](https://towardsdatascience.com/llm-monitoring-and-observability-c28121e75c2f) provides detail on evaluating, tracking, and monitoring Large Language Models (LLMs). It outlines five methods for evaluating LLMs, discusses the complexities of tracking LLMs in sophisticated applications, and emphasizes the importance of monitoring LLMs to protect users and brands. A great resource for those managing the lifecycle of LLMs in production.

Open-source libraries for LLM evaluation and tracking:

- **[TruLens](https://github.com/truera/trulens)**: Designed to measure the quality and effectiveness of Large Language Model (LLM) applications using feedback functions. These functions programmatically evaluate the quality of inputs, outputs, and intermediate results of LLM applications, considering aspects like coherence, relevance, and diversity. Use cases include question answering, retrieval-augmented generation, and agent-based applications.
- **[Phoenix](https://github.com/Arize-ai/phoenix)**: An observability library specifically built to help data scientists evaluate outputs from large language models (LLMs) like OpenAI’s GPT-4, Google’s Bard, Anthropic’s Claude, and others. Phoenix is designed for experimentation, evaluation, and troubleshooting. The toolset is designed to ingest inference data for LLMs, computer vision (CV), natural language processing (NLP), and tabular datasets as well as LLM traces. It allows AI Engineers and Data Scientists to quickly visualize their data, evaluate performance, track down issues, and conduct root-cause analysis.

## Azure AI Observability

- **Observability in Machine Learning**: [Microsoft's engineering playbook](https://microsoft.github.io/code-with-engineering-playbook/observability/ml-observability/) discusses different stages of the ML lifecycle, including experimentation and production, and the unique observability approaches required for each. It also explores various model metric evaluation solutions like Azure Machine Learning Service SDK, MLFlow, TensorBoard, and Application Insights.
- **Azure ML Observability library**: [This article from Microsoft Tech Community](https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/azureml-observability-a-scalable-and-extensible-solution-for-ml/ba-p/3474066) provides a step-by-step guide to a solution accelerator that supports end to end data collection, monitoring and drift analysis. The library is extensible to plug in different drift detection algorithms and runs on top of the scalable Azure Data Explorer.
- **Observability for your Azure OpenAI instance**: [Albert Avetisian's starter kit](https://github.com/aavetis/azure-openai-logger) aims to create a simple and easy to deploy solution to add observability to your Azure OpenAI instance. The approach adds an API Management instance as a proxy for your existing Azure OpenAI service, and funnels logs / requests / responses to an Application Insights instance. Additionally, a prebuilt query is saved to a workbook for easy access to logs.

## Key Takeaways and Actionable Strategies for AI Implementation

In conclusion, observability is a vital component for any technology leader focused on the cutting edge of AI and ML system development and maintenance. Observability, distinct from mere monitoring, offers a comprehensive view of a system's internal state through external outputs. This is especially crucial in AI, where complexities like model drift, data quality, and training-serving skew present unique challenges. Azure services provide robust tools for implementing AI observability, enhancing system reliability, and performance.

For CTOs, Development Leads, and Chief Architects, the following recommendations are critical:

- **Implement Comprehensive Observability Tools**: Adopt a full suite of observability tools covering logging, tracing, and metrics. This should include systems for the collection, storage, and analysis of data. Tools like Azure Machine Learning Service SDK and Azure ML Observability library can be particularly effective.
- **Focus on AI-Specific Observability Challenges**: Pay special attention to AI-specific challenges like model drift and training-serving skew. Use tools like TruLens and Phoenix for evaluating and tracking Large Language Models (LLMs), ensuring that your AI systems remain reliable and effective over time.
- **Integrate Observability into CI/CD Pipelines**: Ensure that observability is an integral part of your Continuous Integration and Continuous Deployment (CI/CD) processes. This approach will help in early detection of issues, continuous performance improvement, and maintaining the reliability of AI models.

By embracing these strategies, leaders can ensure that their AI and ML systems are not only advanced and efficient but also transparent and reliable, ultimately leading to better decision-making and enhanced system performance.
