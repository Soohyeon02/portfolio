# Portfolio — CLAUDE.md

프론트엔드 개발자 포트폴리오 프로젝트 개발 가이드라인입니다.

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Server State | TanStack Query |
| Client State | Zustand |
| Dark Mode | next-themes + Zustand 동기화 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Analytics | Vercel Analytics |
| Package Manager | pnpm |
| Deploy | Vercel |

---

## 프로젝트 구조

```
portfolio/
├── app/          # Next.js App Router (라우팅, 레이아웃, 글로벌 스타일)
├── components/
│   ├── ui/       # 순수 UI 컴포넌트 — props만 받고 렌더링만 담당
│   ├── sections/ # 포트폴리오 페이지 섹션
│   └── layout/   # 공통 레이아웃 컴포넌트 (Header, Footer 등)
├── hooks/        # 비즈니스 로직 (커스텀 훅)
├── stores/       # Zustand 스토어
├── lib/          # 유틸리티, 상수, 데이터
├── types/        # TypeScript 타입 정의
└── public/       # 정적 에셋 (이미지, 아이콘 등)
```

---

## 아키텍처 원칙

- **UI/비즈니스 로직 분리**: `components/`는 렌더링만, 비즈니스 로직은 `hooks/`에 위치
- **커스텀 훅 패턴**: `use` prefix로 시작, 상태와 사이드이펙트를 캡슐화
- **Zustand**: 클라이언트 전역 상태 관리 전용 (theme, UI 상태 등)
- **TanStack Query**: 서버/외부 데이터 페칭 및 캐싱 전용
- **단방향 데이터 흐름** 준수 — props drilling보다 스토어 활용

---

## 다크모드 전략

- `next-themes`의 `ThemeProvider`를 `app/layout.tsx`에 주입
- `useThemeStore` (Zustand)로 앱 내 theme 상태 동기화
- Tailwind CSS `dark:` 유틸리티 클래스로 스타일링
- `prefers-color-scheme` 미디어 쿼리를 초기값으로 참조
- `localStorage`에 사용자 설정 유지 (next-themes 기본 제공)

---

## UI/UX 설계 원칙

- **단일 페이지 스크롤**: 탭이나 별도 라우팅 없이 한 페이지에서 스크롤로 모든 섹션 탐색
- **섹션 앵커**: 각 섹션에 `id` 부여 (`#hero`, `#about`, `#projects`, `#contact`), Header에서 앵커 링크로 이동
- **우측 고정 섹션 도트**: Intersection Observer로 현재 섹션 감지 후 강조, 클릭 시 해당 섹션으로 스크롤 이동
- **Projects 타임라인**: 항목마다 주요 업무 1줄 요약 + 아이콘 칩만 노출 → "자세히 보기" 버튼 클릭 시 모달로 상세 표시
- **모달 애니메이션**: Framer Motion으로 부드러운 진입/퇴장 처리
- **비즈니스 로직 분리**: 모달 상태, 섹션 감지 등 모든 로직은 커스텀 훅에서 관리

---

## Git 브랜치 전략

```
main          # 프로덕션 (Vercel 자동 배포)
└── develop       # 개발 통합 브랜치
    ├── feature/hero-section
    ├── feature/dark-mode
    └── feature/projects-section
```

- PR 흐름: `feature/*` → `develop` → `main`
- `main`에 직접 push 금지
- 브랜치명: `feature/`, `fix/`, `chore/` prefix 사용

---

## 커밋 컨벤션 (Conventional Commits)

```
feat:     새로운 기능 추가
fix:      버그 수정
chore:    빌드, 설정, 패키지 관련 작업
docs:     문서 수정
style:    코드 포맷 변경 (동작 변경 없음)
refactor: 기능 변경 없는 코드 구조 개선
perf:     성능 개선
test:     테스트 추가/수정
```

**규칙:**
- 제목은 소문자로 시작, 마침표 없음
- 영문 기준 50자 이내 권장

---

## 코딩 컨벤션

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 파일명 | PascalCase | `HeroSection.tsx`, `Button.tsx` |
| 일반 파일명 | kebab-case | `use-scroll.ts`, `constants.ts` |
| 컴포넌트 export | named export | `export const HeroSection = ...` |
| 커스텀 훅 | camelCase + `use` prefix | `useScroll`, `useProjects` |
| 타입/인터페이스 | PascalCase | `ProjectItem`, `ContactInfo` |
| 상수 | UPPER_SNAKE_CASE | `SECTION_IDS`, `PROJECTS_DATA` |

---

## 포트폴리오 섹션

| 섹션 | 설명 |
|------|------|
| Hero | 인트로, 이름, 직함, CTA 버튼 |
| About | 자기소개 |
| Projects | 세로형 타임라인 — 주요 업무 요약 + 아이콘 칩, "자세히 보기" 클릭 시 모달로 상세 표시 |
| Contact | 연락처, SNS 링크 |
