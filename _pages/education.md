---
layout: single
title: "Education"
permalink: /education/
author_profile: false
educations:
  - school: "利物浦大学"
    school_en: "University of Liverpool"
    logo: "/images/liverpool-favicon.jpg"
    logo_shape: "wide"
    degree: "Ph.D."
    major: "Computer Science"
    start_date: "Mar 2026"
    end_date: "Present"
    summary: "Incoming doctoral study in computer science, continuing work on recommendation systems, foundation models, and research-driven machine learning systems."
  - school: "西交利物浦大学"
    school_en: "Xi'an Jiaotong-Liverpool University"
    logo: "/images/xjtlu-icon.jpg"
    degree: "Bachelor"
    major: "Information and Computing Science"
    start_date: "Sep 2021"
    end_date: "Jul 2025"
    gpa: "GPA 3.8/4.0"
    ranking: "Top 5%"
    awards:
      - "University Scholarship x2"
    courses:
      - "Algorithms and Data Structures"
      - "Artificial Intelligence"
      - "Machine Learning"
      - "Big Data Analytics"
    summary: "Undergraduate training centered on computer science fundamentals, machine learning, and data-intensive systems, with sustained academic excellence across coursework and research preparation."
---

<p class="section-intro">Academic training in computer science, machine learning, and data-intensive analysis. The layout mirrors the experience section while giving more emphasis to degree information, academic standing, and coursework.</p>

<div class="education-stack">
  {% for item in page.educations %}
    {% include education-card.html item=item %}
  {% endfor %}
</div>
