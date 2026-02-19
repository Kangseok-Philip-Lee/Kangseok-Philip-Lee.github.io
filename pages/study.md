---
layout: page
title: 공부
permalink: /study/
---

<p class="category-description">개발, 독서 등 학습 기록을 공유합니다.</p>

<ul class="post-list">
  {% assign study_posts = site.posts | where: "category", "study" %}
  {% for post in study_posts %}
  <li class="post-list-item">
    <h2 class="post-list-title">
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
        {% if post.ai_generated %}<span class="badge-ai">AI Generated</span>{% endif %}
      </a>
    </h2>
    {% if post.subtitle %}<p class="post-list-subtitle">{{ post.subtitle }}</p>{% endif %}
    <div class="post-list-meta">
      <time>{{ post.date | date: "%Y년 %m월 %d일" }}</time>
      {% if post.tags.size > 0 %}
        <span>{% for tag in post.tags %}#{{ tag }} {% endfor %}</span>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>

{% if study_posts.size == 0 %}
  <p class="search-no-results">아직 공부 포스트가 없습니다.</p>
{% endif %}
