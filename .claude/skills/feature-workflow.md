# feature-workflow

포트폴리오 프로젝트의 feature 개발 전체 워크플로우를 자동으로 실행하는 스킬.

## 트리거

사용자가 "feature-workflow로 <기능명> 작업해줘" 또는 "/feature-workflow" 로 호출하면 아래 절차를 순서대로 실행한다.

## 실행 절차

다음 5단계를 순서대로 실행하라. 각 단계가 완료된 후 다음 단계를 진행한다.

### 1단계: GitHub 이슈 생성

아래 명령으로 이슈를 생성한다:

```bash
gh issue create \
  --title "feat: <기능명>" \
  --label "feat" \
  --body "$(cat <<'EOF'
## Description
<기능에 대한 설명>

## Possible Solution (Optional)
<구현 방법 또는 No Response>
EOF
)"
```

- 이슈 생성 후 출력된 이슈 URL에서 이슈 번호를 추출한다 (예: `https://github.com/.../issues/7` → `7`)
- 이슈 번호를 변수로 저장한다

### 2단계: 브랜치 생성

`develop` 브랜치를 기반으로 브랜치를 생성한다:

```bash
git checkout develop
git checkout -b feature/#<이슈번호>-<기능명-kebab-case>
```

예시: 이슈 번호가 7이고 기능명이 "theme" 이면 → `feature/#7-theme`

### 3단계: 구현 + 커밋

기능을 구현하고 커밋한다:

```bash
git add <관련 파일들>
git commit -m "feat(<기능명>): <변경 내용 요약>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

커밋 컨벤션:
- `feat:` 새 기능
- `fix:` 버그 수정
- `chore:` 빌드/설정
- `refactor:` 구조 개선

### 4단계: 브랜치 Push

```bash
git push origin feature/#<이슈번호>-<기능명>
```

### 5단계: PR 생성

`develop` 브랜치로 PR을 생성한다:

```bash
gh pr create \
  --base develop \
  --title "feat(<기능명>): <PR 제목>" \
  --body "$(cat <<'EOF'
# Overview

<!--
    A clear and concise description of what this pr is about.
 -->

close #<이슈번호>
EOF
)"
```

PR 생성 후 PR URL을 사용자에게 알려준다.

## 주의사항

- 항상 `develop` 브랜치를 기준으로 브랜치를 분기한다
- `main` 브랜치로 직접 PR을 절대 보내지 않는다
- 이슈 번호는 브랜치명과 PR body의 `close #번호` 양쪽에 모두 포함한다
- 커밋 메시지는 Conventional Commits 규칙을 따른다
- push 전 반드시 구현이 완료된 상태인지 확인한다

## 프로젝트 정보

- 레포지토리: Soohyeon02/portfolio
- 기본 base 브랜치: `develop`
- 이슈 템플릿: `.github/ISSUE_TEMPLATE/feature-request.md`
- PR 템플릿: `.github/PULL_REQUEST_TEMPLATE.md`
