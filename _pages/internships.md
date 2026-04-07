---
layout: single
title: "Experience"
permalink: /experience/
author_profile: false
experiences:
  - role: "Strategy Algorithm Engineer"
    company: "Xiaohongshu"
    duration: "Dec 2025 - Present"
    logo: "/images/xiaohongshu-icon.jpg"
    team: "Foundation Models Group, Applied Algorithms, Business Technology"
    tech_stack: ["Generative Recommendation", "MoE", "PyTorch", "Model Training"]
    summary: "Working on unified generative recommendation foundation models for multi-business scenarios, with a focus on scalable shared backbones and robust multi-objective learning."
    highlights:
      - "Contributed to the One Model initiative, building a unified generative recommendation model across multiple business distributions and targets."
      - "Designed and implemented a Mixture-of-Experts architecture to reduce parameter interference and negative transfer during multi-task and multi-scenario training."
      - "Led training and stability tuning, analyzing model capacity, expert configuration, and training strategies for convergence behavior and online performance."
  - role: "Research Intern (Deep Learning)"
    company: "Shenyang Institute of Automation, Chinese Academy of Sciences"
    duration: "Feb 2025 - Jun 2025"
    logo: "/images/cas-logo.jpg"
    team: "Deep Learning Research"
    tech_stack: ["Python", "PyTorch", "Transformers", "ACT"]
    summary: "Focused on reproducing sequence modeling research and building hands-on deep learning engineering experience in local GPU training environments."
    highlights:
      - "Reproduced and trained the Action Chunking Transformer (ACT) model to study its behavior on long-sequence modeling tasks."
      - "Completed local GPU-based training, experiment logging, and hyperparameter studies while building practical model engineering intuition."
---

<p class="section-intro">Research and engineering experience spanning generative recommendation, deep learning, and practical model development. The card layout keeps responsibilities, technical focus, and concrete contributions easy to scan.</p>

<div class="experience-stack">
  {% for item in page.experiences %}
    {% include experience-card.html item=item %}
  {% endfor %}
</div>
