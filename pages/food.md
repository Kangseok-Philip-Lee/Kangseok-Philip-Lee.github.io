---
layout: page
title: 음식
permalink: /food/
---

<p class="category-description">맛집 탐방과 요리 레시피를 공유합니다.</p>

<ul class="post-list">
  {% assign food_posts = site.posts | where: "category", "food" %}
  {% for post in food_posts %}
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

{% if food_posts.size == 0 %}
  <p class="search-no-results">아직 음식 포스트가 없습니다.</p>
{% endif %}
