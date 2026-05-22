---
permalink: /
title: "Peiyu Hu"
author_profile: false
show_title: false
redirect_from:
  - /about/
  - /about.html
tagline: "Generative Recommendation Researcher"
typing_lines:
  - "Generative Recommendation Researcher"
  - "LLMs for Recommendation"
  - "Semantic Tokenization for AI Systems"
  - "Multimodal Recommender Modeling"
research_interests:
  - Generative Recommendation
  - LLM for Recommendation
  - Semantic Tokenization
  - Multimodal Recommenders
  - Foundation Models
skill_tags:
  - label: "Python"
    icon: "fab fa-python"
  - label: "PyTorch"
    icon: "fa-solid fa-fire-flame-curved"
  - label: "Transformers"
    icon: "fa-solid fa-microchip"
  - label: "CUDA"
    icon: "fa-solid fa-memory"
  - label: "NumPy"
    icon: "fa-solid fa-square-root-variable"
  - label: "Pandas"
    icon: "fa-solid fa-table-columns"
  - label: "Docker"
    icon: "fab fa-docker"
  - label: "MySQL"
    icon: "fa-solid fa-database"
  - label: "Java"
    icon: "fa-solid fa-mug-hot"
  - label: "Git"
    icon: "fab fa-git-alt"
  - label: "Linux"
    icon: "fab fa-linux"
education:
  school: "Xi'an Jiaotong-Liverpool University"
  degree: "B.Sc. in Information and Computing Science"
  period: "Sep 2021 - Jul 2025"
  details:
    - "GPA 3.8/4.0, top 5% in the major"
    - "Recipient of the university scholarship for two consecutive years"
    - "Core coursework: Algorithms and Data Structures, Artificial Intelligence, Machine Learning, Big Data Analytics"
additional_notes:
  - "Comfortable translating recent papers into runnable code and validating ideas through small-scale experiments."
  - "Strong self-learning ability with experience picking up new tools and research directions quickly."
  - "English: IELTS 6.5 (6.0), GRE 319"
news_items:
  - date: "2026-03"
    title: "Starting Ph.D. study in Computer Science at the University of Liverpool."
  - date: "2025-12"
    title: "Joined Xiaohongshu as a Strategy Algorithm Engineer working on generative recommendation foundation models."
  - date: "2025-11"
    title: "Built and released the UniGenRec toolkit for reproducible generative recommendation research."
---

{% include base_path %}
{% assign experience_page = site.pages | where: "url", "/experience/" | first %}
{% assign education_page = site.pages | where: "url", "/education/" | first %}

<div class="home-landing">
  {% include home-hero.html %}

  <section class="home-news-banner" id="news">
    <div class="home-news-banner__header">
      <h2><i class="fa-solid fa-bolt" aria-hidden="true"></i><span>News</span></h2>
      <span class="home-news-banner__hint">Latest updates</span>
    </div>
    <div class="home-news-banner__items">
      {% for item in page.news_items %}
        <article class="home-news-banner__item">
          <span class="home-news-banner__date">{{ item.date }}</span>
          <p class="home-news-banner__title">{{ item.title }}</p>
        </article>
      {% endfor %}
    </div>
  </section>

  <div class="home-stack">
    <section class="home-panel">
      <h2><i class="fa-solid fa-user-astronaut" aria-hidden="true"></i><span>About</span></h2>
      <p class="section-intro">I am Peiyu Hu, a researcher and engineer focused on generative recommendation, LLM-enhanced recommender systems, multimodal modeling, and semantic tokenization for scalable recommendation pipelines.</p>

      <div class="about-showcase">
        <div class="about-showcase__main">
          <p>I am currently working on foundation-model-driven recommendation systems and practical research tooling. My recent work explores how semantic representations, customized retrieval, and unified generative backbones can improve recommendation quality, transferability, and system robustness.</p>
        </div>
      </div>

      <div class="profile-block">
        <h3><i class="fa-solid fa-compass-drafting" aria-hidden="true"></i><span>Research Interests</span></h3>
        <div class="profile-chip-grid">
          {% for topic in page.research_interests %}
            <span class="profile-chip">{{ topic }}</span>
          {% endfor %}
        </div>
      </div>

      <div class="profile-block">
        <h3><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i><span>Skills</span></h3>
        <div class="profile-chip-grid">
          {% for skill in page.skill_tags %}
            <span class="profile-chip profile-chip--skill profile-chip--muted">
              {% if skill.icon %}<i class="{{ skill.icon }}" aria-hidden="true"></i>{% endif %}
              <span>{{ skill.label }}</span>
            </span>
          {% endfor %}
        </div>
      </div>

      <div class="profile-block">
        <h3><i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>Additional</span></h3>
        <ul class="mini-list mini-list--compact mini-list--plain">
          {% for note in page.additional_notes %}
            <li>{{ note }}</li>
          {% endfor %}
        </ul>
      </div>
    </section>

    <section class="home-panel">
      <div class="panel-heading">
        <h2><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i><span>Education</span></h2>
        <a class="panel-link" href="{{ base_path }}/education/">View all</a>
      </div>
      <div class="education-stack education-stack--homepage">
        {% if education_page and education_page.educations %}
          {% for education in education_page.educations limit: 2 %}
            {% include education-card.html item=education %}
          {% endfor %}
        {% endif %}
      </div>
    </section>

    <section class="home-panel">
      <div class="panel-heading">
        <h2><i class="fa-solid fa-book-open" aria-hidden="true"></i><span>Publications</span></h2>
        <a class="panel-link" href="{{ base_path }}/publications/">View all</a>
      </div>
      <div class="publications-grid publications-grid--homepage">
        {% for post in site.publications reversed limit: 4 %}
          {% include publication-card.html %}
        {% endfor %}
      </div>
    </section>

    <section class="home-panel">
      <div class="panel-heading">
        <h2><i class="fa-solid fa-briefcase" aria-hidden="true"></i><span>Experience</span></h2>
        <a class="panel-link" href="{{ base_path }}/experience/">View all</a>
      </div>
      <div class="experience-stack experience-stack--homepage">
        {% if experience_page and experience_page.experiences %}
          {% for experience in experience_page.experiences limit: 2 %}
            {% include experience-card.html item=experience %}
          {% endfor %}
        {% endif %}
      </div>
    </section>

    <section class="home-panel">
      <div class="panel-heading">
        <h2><i class="fa-solid fa-diagram-project" aria-hidden="true"></i><span>Projects</span></h2>
        <a class="panel-link" href="{{ base_path }}/projects/">View all</a>
      </div>
      <div class="projects-grid projects-grid--homepage">
        {% for post in site.portfolio limit: 3 %}
          {% include project-card.html %}
        {% endfor %}
      </div>
    </section>

    <section class="home-panel">
      <div class="panel-heading">
        <h2><i class="fa-solid fa-pen-nib" aria-hidden="true"></i><span>Blog Posts</span></h2>
        <a class="panel-link" href="{{ base_path }}/year-archive/">View all</a>
      </div>
      <ul class="mini-list">
        {% for post in site.posts limit: 4 %}
          <li>
            <p class="mini-list__meta"><span>{{ post.date | date: "%Y-%m-%d" }}</span></p>
            <h3 class="mini-list__title"><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
            {% if post.excerpt %}<p class="mini-list__summary">{{ post.excerpt | markdownify | strip_html | truncate: 140 }}</p>{% endif %}
          </li>
        {% endfor %}
      </ul>
    </section>

    <section class="home-panel">
      <div class="panel-heading">
        <h2><i class="fa-solid fa-file-lines" aria-hidden="true"></i><span>CV</span></h2>
        <a class="panel-link" href="{{ base_path }}/cv/">Open CV</a>
      </div>
      <p class="mini-list__summary">A compact academic CV including education, publications, experience, skills, and contact information is available as a standalone page.</p>
    </section>
  </div>
</div>
