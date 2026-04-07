---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **University of Liverpool**, Ph.D. in Computer Science, Mar 2026 - Present
  * Incoming doctoral study in computer science with a planned focus on recommendation systems, foundation models, and machine learning systems

* **Xi'an Jiaotong-Liverpool University**, B.Sc. in Information and Computing Science, Sep 2021 - Jul 2025
  * GPA: 3.8/4.0, top 5% in the major
  * University scholarship recipient for two consecutive years
  * Selected coursework: Algorithms and Data Structures, Artificial Intelligence, Machine Learning, Big Data Analytics

Work experience
======
* **Strategy Algorithm Engineer**, Xiaohongshu, Dec 2025 - Present
  * Foundation Models Group, Applied Algorithms, Business Technology
  * Building unified generative recommendation foundation models across multiple business scenarios
  * Designed Mixture-of-Experts structures to mitigate parameter interference and negative transfer
  * Led training and stability tuning with systematic analysis of capacity, expert layout, and training strategy

* **Research Intern (Deep Learning)**, Shenyang Institute of Automation, Chinese Academy of Sciences, Feb 2025 - Jun 2025
  * Reproduced and trained Action Chunking Transformer (ACT) models for long-sequence modeling studies
  * Completed local GPU training, logging, and hyperparameter experiments in a practical research workflow

Projects
======
* **UniGenRec**, Sep 2025 - Nov 2025
  * Unified generative recommendation research toolkit covering tokenization, generative architectures, training, and inference
  * Designed a modular pipeline for Amazon and MovieLens datasets, embedding generation, multimodal fusion, and sequential modeling
  * Implemented RQ-VAE, VQ-VAE, R-KMeans, PQ, and OPQ with a unified tokenizer interface
  * GitHub: [hupeiyu21/UniGenRec](https://github.com/hupeiyu21/UniGenRec)

Skills
======
* Python, PyTorch, Transformers, Linux, Git
* Recommender Systems, Collaborative Filtering, Sequential Recommendation, Generative Recommendation
* Literature reading, method reproduction, and turning papers into runnable code

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Additional
======
* Email: peiyuhu21@163.com
* Phone: 18562862528
* GitHub: [github.com/hupeiyu21](https://github.com/hupeiyu21)
* English: IELTS 6.5 (6.0), GRE 319
* Comfortable rapidly learning new tools and building small-scale validation experiments when projects demand it
