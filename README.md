# GitHub Blog Template

Jekyll 기반 GitHub Pages 블로그 템플릿입니다.

## 기능

- **카테고리 탭**: 여행, 음식, 공부
- **About 페이지**
- **글 검색**: Ctrl+K (또는 Cmd+K) 단축키 지원
- **AI Generated 배지**: `ai_generated: true` 설정 시 제목 옆에 배지 표시
- **반응형 디자인**: 모바일 대응

## 포스트 작성법

`_posts/` 폴더에 `YYYY-MM-DD-제목.md` 형식으로 파일을 생성합니다.

```yaml
---
layout: post
title: "포스트 제목"
date: 2026-02-19
category: travel  # travel / food / study
tags: [태그1, 태그2]
subtitle: "부제목"
ai_generated: false  # true면 AI Generated 배지 표시
---

포스트 내용을 여기에 작성합니다.
```

## _config.yml 설정

`_config.yml` 파일에서 블로그의 기본 정보를 수정합니다.

```yaml
# 사이트 기본 정보
title: "My Blog"                        # 블로그 제목 (헤더에 표시)
description: "여행, 음식, 공부에 대한 블로그"  # 사이트 설명 (SEO용)
url: "https://username.github.io"       # 배포 URL (GitHub Pages 주소)
baseurl: ""                             # 서브 경로 (예: /blog). 루트면 빈 문자열
```

### permalink

포스트 URL 형식을 지정합니다.

```yaml
permalink: /:year/:month/:day/:title/   # 기본값: /2026/02/19/post-title/
# permalink: /:title/                   # 짧은 URL: /post-title/
# permalink: /:categories/:title/       # 카테고리 포함: /travel/post-title/
```

### navigation

헤더에 표시되는 네비게이션 탭을 설정합니다. 순서를 바꾸거나 새 탭을 추가할 수 있습니다.

```yaml
navigation:
  - title: 홈
    url: /
  - title: 여행
    url: /travel/
  - title: 음식
    url: /food/
  - title: 공부
    url: /study/
  - title: About
    url: /about/
```

### plugins

사용 중인 Jekyll 플러그인 목록입니다.

```yaml
plugins:
  - jekyll-feed      # RSS 피드 생성
  - jekyll-seo-tag   # SEO 메타 태그 자동 생성
  - jekyll-sitemap   # sitemap.xml 자동 생성
```

### defaults

포스트의 기본값을 설정합니다. 개별 포스트에서 지정하지 않으면 이 값이 적용됩니다.

```yaml
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      ai_generated: false   # 기본적으로 AI 배지 미표시
```

## 이미지 사용

`assets/images/` 폴더에 이미지를 넣고 포스트에서 참조합니다.

```markdown
![설명]({{ "/assets/images/파일명.jpg" | relative_url }})
```

## Jekyll 설치

### macOS

```bash
# Homebrew로 Ruby 설치
brew install ruby

# 쉘 설정 파일에 PATH 추가 (~/.zshrc 또는 ~/.bash_profile)
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Jekyll과 Bundler 설치
gem install jekyll bundler
```

### Ubuntu / Debian

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# gem 설치 경로를 사용자 디렉토리로 설정
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
```

### Windows

```bash
# RubyInstaller (https://rubyinstaller.org/)에서 Ruby+Devkit 설치 후
gem install jekyll bundler
```

### 설치 확인

```bash
ruby -v
jekyll -v
```

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000 에서 확인할 수 있습니다.

## GitHub Pages 배포

1. 이 레포지토리를 **Fork** 합니다.
2. Fork한 레포지토리 이름을 `username.github.io`로 변경합니다. (Settings > General > Repository name)
3. Settings > Pages > **Source**를 `GitHub Actions`로 선택합니다.
4. `_config.yml`에서 `title`, `description`, `url`을 본인 정보로 수정합니다.
5. 변경 사항을 push하면 자동으로 빌드 및 배포됩니다.
6. `https://username.github.io`에서 블로그를 확인할 수 있습니다.

> GitHub Actions 워크플로우(`.github/workflows/jekyll.yml`)가 포함되어 있어 별도 설정 없이 자동 배포됩니다.
