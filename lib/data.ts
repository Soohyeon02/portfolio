import type { ProjectItem, ContactLink } from '@/types'

export const ABOUT_TEXT = [
  '**헬스케어 및 임상시험 매칭 플랫폼, 인플루언서 팬덤 미디어 플랫폼**의 **프론트엔드 개발**을 주도하며, **UI/UX 개선**과 **성능 최적화**에 강력한 역량을 쌓아왔습니다. **레거시 코드 리뉴얼, 모바일-웹 연동, 실시간 채팅 서비스, 다국어 지원 플랫폼** 등을 바탕으로 기업의 서비스 경쟁력 강화에 즉각적으로 기여할 수 있습니다. 단순한 직감에 의존하지 않고, GA를 통한 사용자 행동 분석, Sentry를 이용한 실시간 에러 추적, Cypress 기반의 E2E 테스트 등 정확한 데이터와 지표를 바탕으로 사용자 경험을 지속적으로 고도화했습니다.',
  '90% 이상의 실무 경험은 단독으로 프론트엔드를 맡아 다수의 백엔드 엔지니어들과 협업을 진행하였으며, 다른 신입 프론트엔드 개발자가 합류한 이후에는 기존 프론트엔드 작업과 동시에 **온보딩을 위한 문서화(Storybook 도입, Git 전략 및 프로젝트 컨벤션 정립 등)를 수립**하며 팀의 기술적 기반을 다졌습니다. 또한, 필요에 따라 **NestJS + Prisma 백엔드 개발까지 함께 참여**하며 폭넓은 기술 스펙트럼과 협업 역량을 길렀습니다.',
  '단방향 개발에 그치지 않고 **전체 데이터 흐름**과 **시스템 구조**를 깊이 이해하며, 직무 간 장벽 없는 **유기적인 협업**을 통해 비즈니스의 가치를 실현하는 **프론트엔드 엔지니어**가 되겠습니다.',
]

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'medi25care-sitter',
    name: '메디25케어 아이돌보미 매칭 플랫폼',
    period: '2025.12 ~ 2026.02',
    role: '프론트엔드 개발자',
    skills: ['Vue', 'TypeScript', 'Socket.IO', 'TanStack Query', 'TanStack Form', 'Zod', 'Pinia', 'Axios'],
    summary: '보호자와 아이돌보미를 연결하는 실시간 매칭 플랫폼 프론트엔드 개발',
    tasks: [
      '보호자/아이돌보미 양방향 매칭 플로우 개발',
      'Socket.IO 기반 실시간 채팅 기능 구현',
      'TanStack Form + Zod 기반 입력 폼 유효성 검증',
      '시급 협의 및 돌봄 예약 프로세스 개발',
      '케어 일지 작성 및 조회 기능 개발',
      '돌보미 목록 / 목록 필터링 / 돌보미 상세 개발',
    ],
    detail:
      '메디25케어 플랫폼의 아이돌보미 매칭 서비스입니다. 보호자와 아이돌보미 간 실시간 채팅(Socket.IO), 매칭 플로우, 시급 확정 및 돌봄 예약 프로세스를 구현했습니다. TanStack Form + Zod로 복잡한 폼 유효성 검증을 처리하고, TanStack Query로 서버 상태를 관리했습니다.',
    category: 'work',
    company: '(주)케이알메딕스',
  },
  {
    id: 'krsmo',
    name: 'KRSMO 임상시험 인재 채용 플랫폼',
    period: '2025.11 ~ 2025.12',
    role: '프론트엔드 개발자',
    skills: ['Vue', 'TypeScript', 'i18n', 'TanStack Query', 'TanStack Form', 'Zod', 'Pinia', 'Axios'],
    summary: 'i18n 기반 한/영 다국어 지원 임상시험 인재 채용 플랫폼 프론트엔드 개발',
    tasks: [
      'i18n 기반 한/영 다국어 지원 시스템 구현',
      '채용/제휴 문의 페이지의 Multi-Step Form 개발',
      'Kakao Postcode API 연동 주소 입력 기능 구현',
      'TanStack Form + Zod 기반 지원서 제출 폼 개발',
    ],
    detail:
      'KRSMO의 글로벌 임상시험 인재 채용 플랫폼으로, 한/영 다국어 지원이 핵심입니다. i18n 기반의 다국어 처리 시스템을 설계하고, TanStack Form + Zod를 활용한 Multi-Step 지원서 제출 플로우와 Kakao Postcode API를 통한 주소 검색 시스템을 구현했습니다.',
    category: 'work',
    company: '(주)케이알메딕스',
  },
  {
    id: 'medi25health-supplement',
    name: '메디25헬스 건강기능 추천 플랫폼',
    period: '2025.09 ~ 2025.11',
    role: '풀스택 개발자 (프론트엔드 + 백엔드)',
    skills: ['Vue', 'TypeScript', 'NestJS', 'Prisma', 'TanStack Query', 'TanStack Form', 'Zod', 'Pinia', 'Storybook', 'Axios'],
    summary: '건강기능식품 맞춤 추천 플랫폼 풀스택 개발 (Vue + NestJS + Prisma)',
    tasks: [
      'Vue 기반 건강 설문 및 추천 결과 UI 개발',
      'NestJS + Prisma 백엔드 API 설계 및 개발',
      'TanStack Form + Zod 기반 건강 설문 폼 유효성 검증',
      'Storybook 도입 및 공통 컴포넌트 문서화',
      '내 의료기록 데이터 기반 맞춤 영양제 추천 기능 구현',
    ],
    detail:
      '메디25헬스 플랫폼의 건강기능식품 맞춤 추천 서비스입니다. 프론트엔드(Vue)부터 백엔드(NestJS + Prisma)까지 풀스택으로 개발에 참여했습니다. Storybook을 도입하여 신입 합류 이후의 컴포넌트 문서화와 온보딩 기반을 마련했습니다.',
    category: 'work',
    company: '(주)케이알메딕스',
  },
  {
    id: 'medi25care-caregiver',
    name: '메디25케어 간병인 매칭 플랫폼',
    period: '2025.06 ~ 2025.08',
    role: '프론트엔드 개발자',
    skills: ['Vue', 'TypeScript', 'TanStack Query', 'TanStack Form', 'Zod', 'Pinia', 'Storybook', 'Axios'],
    summary: '환자 보호자와 간병인을 연결하는 매칭 플랫폼 프론트엔드 개발',
    tasks: [
      '보호자/간병인 매칭 플로우 UI 개발',
      'TanStack Query 기반 간병인 목록 필터링 및 조회',
      'TanStack Form + Zod 기반 다단계 폼 유효성 검증 구현',
      '공지 & News 게시판 구현',
      'Storybook 기반 공통 UI 컴포넌트 라이브러리 구축',
      '결제 연동 및 결제 내역 개발',
    ],
    detail:
      '메디25케어의 간병인 매칭 플랫폼으로, 환자 보호자와 간병인을 연결하는 서비스입니다. 다단계 매칭 플로우를 TanStack Form으로 구현하고, Storybook으로 팀 내 컴포넌트 문서화 체계를 수립했습니다. 이 프로젝트에서 팀 내 첫 Storybook 도입을 주도했습니다.',
    category: 'work',
    company: '(주)케이알메딕스',
  },
  {
    id: 'medi25-healthcare',
    name: '메디25 헬스케어 신규 서비스',
    period: '2024.06 ~ 2024.12',
    role: '프론트엔드 개발자',
    skills: ['Vue', 'TypeScript', 'Pinia', 'Axios', 'Chart.js'],
    summary: '메디25 헬스케어 앱 신규 서비스 5종 프론트엔드 개발',
    tasks: [
      '내 의료기록 조회 서비스 개발',
      '임상시험 AI 매칭 서비스 개발',
      '나의 건강나이 진단 서비스 개발',
      '복용약 알림 서비스 개발',
      '병원/약국 찾기 서비스 개발',
    ],
    detail:
      '메디25 헬스케어 앱의 신규 서비스 5종을 기획 단계부터 개발까지 담당했습니다. 국민건강보험으로부터 받아온 의료기록을 Chart.js로 시각화하고, 임상시험 AI 매칭, 건강나이 진단, 복용약 알림, 병원/약국 찾기를 Vue + TypeScript + Pinia 스택으로 구현하며 헬스케어 도메인 전반의 서비스 개발 경험을 쌓았습니다.',
    category: 'work',
    company: '(주)케이알메딕스',
  },
  {
    id: 'medi25-matching',
    name: '메디25 생동/임상 매칭 플랫폼',
    period: '2024.01 ~ 2026.02',
    role: '프론트엔드 개발자',
    skills: ['Vue', 'TypeScript', 'Tailwind CSS', 'jQuery', 'PHP', 'Pinia', 'Axios'],
    summary: '생동성/임상시험 참가자 매칭 플랫폼 유지보수 및 어드민 신규 개발',
    tasks: [
      '생동성시험/임상시험 참가자 매칭 플랫폼 유지보수 및 긴급 이슈 대응',
      '레거시 jQuery/PHP 코드 → Vue + TypeScript 마이그레이션',
      '자사 어드민 주요 기능 성능 최적화',
      '신규 서비스에 따른 어드민 개발',
      'Tailwind CSS 기반 반응형 UI 리뉴얼',
    ],
    detail:
      '메디25의 생동성시험 및 임상시험 참가자 매칭 플랫폼의 유지보수와 어드민 개발을 담당했습니다. 레거시 jQuery/PHP 스택에서 Vue + TypeScript로의 점진적 마이그레이션을 주도하고, 어드민 성능 최적화 및 신규 서비스에 따른 기능 확장을 수행했습니다.',
    category: 'work',
    company: '(주)케이알메딕스',
  },
  {
    id: 'inflstock',
    name: '[외주] 팬덤 미디어 플랫폼',
    period: '2022.08 ~ 2022.11',
    role: '프론트엔드 개발자 (프리랜서)',
    skills: ['React', 'TypeScript', 'Zustand', 'SCSS'],
    summary: '인플루언서와 팬을 연결하는 팬덤 미디어 플랫폼 스타트업을 초기부터 개발하여 출시까지 완수',
    tasks: [
      'React + TypeScript + Zustand 기반 SPA 구축',
      'SCSS 기반 컴포넌트 스타일링 시스템 구축',
      '인플루언서/팬 커뮤니티 피드 UI 개발',
      'Figma UI/UX 디자인',
    ],
    detail:
      '스타트업 외주 프로젝트로, 인플루언서와 팬을 연결하는 팬덤 미디어 플랫폼의 프론트엔드를 초기부터 개발하여 출시까지 완수했습니다. 초기 UI/UX 디자인에도 참여했으며 단독 프론트엔드 개발자로 React + TypeScript + Zustand 스택으로 SPA를 구축하고, SCSS 기반 컴포넌트 스타일링 시스템을 설계했습니다. 매주 백엔드 담당 SI팀과 스크럼 회의를 진행하며 프로젝트를 성공적으로 완료했습니다.',
    category: 'work',
    company: '(주)인플스톡',
  },
  {
    id: 'deafassist',
    name: 'DeafAssist — 청각장애인 다중 플랫폼 보조 시스템',
    period: '2026.04 ~ 2026.06',
    role: '프론트엔드 및 iOS 네이티브 앱 개발',
    skills: [
      'React Native',
      'Expo',
      'Swift (iOS/watchOS)',
      'SwiftUI',
      'WebSocket',
      'WatchConnectivity',
      'React Hook Form',
      'Expo Secure Store'
    ],
    summary: '스마트폰, AR 글래스, Apple Watch를 연동하여 실시간 주변 소리의 방향성과 정보를 시각·촉각으로 피드백하는 다중 디바이스 보조 시스템',
    tasks: [
      'WebSocket 실시간 연결 관리와 자동 재연결 로직 및 이벤트 TTL 기반 자동 만료 시스템을 구축',
      '실시간 각도 데이터 기반의 소리를 레이더 UI와 시야 방해를 최소화한 AR 글래스용 UI를 구현',
      'RN과 iOS 네이티브를 잇는 Swift 모듈을 개발하고 앱 상태별 데이터 전송 로직을 최적화',
      'SwiftUI 기반의 워치 전용 레이더 UI를 개발하고 소리별 7종 컬러 시스템 및 3가지 맞춤형 햅틱 피드백을 연동',
      '비즈니스 로직과 UI 컴포넌트를 완벽히 분리하는 Custom Hook 아키텍처로 다중 플랫폼 코드 재사용성을 극대화',
      'JWT 기반 인증 체계를 구축하고 Expo Secure Store와 React Hook Form으로 유효성 검증 및 토큰 관리를 최적화',
    ],
    detail:
        '대학교 심화캡스톤 프로젝트로 진행된 청각장애인 보조 시스템입니다. AI 서버로부터 식별된 소리의 방향과 종류 데이터를 수신하여 유저에게 실시간으로 전달하는 핵심 아키텍처를 담당했습니다. 특히 React Native 환경에 머무르지 않고, iOS 네이티브 Swift 모듈 개발 및 SwiftUI 기반의 독립형 watchOS 앱을 직접 구축하여 WatchConnectivity를 통한 끊김 없는 실시간 데이터 동기화와 하드웨어 제어(햅틱 피드백)를 성공적으로 구현해 다중 플랫폼 연동 역량을 증명했습니다.',
    category: 'side',
  },
  {
    id: 'house-rent-helper',
    name: 'House Rent Helper — 전/월세 사기 방지',
    period: '2026.05 ~ 2026.06',
    role: 'Python 프로그램 개발',
    skills: ['Python'],
    summary: '등기부등본·건축물대장 PDF 분석으로 전/월세 사기 위험도를 진단하는 도구',
    tasks: [
      '등기부등본 PDF 파싱 및 위험 요소 자동 추출',
      '건축물대장 PDF 분석 시스템 개발',
      '전/월세 사기 위험도 진단 알고리즘 구현',
      'Python 기반 PDF 데이터 처리 파이프라인 구축',
    ],
    detail:
      '전/월세 계약 시 등기부등본과 건축물대장 PDF를 입력하면 사기 위험도를 자동으로 분석해주는 도구입니다. Python으로 PDF 파싱, 위험 요소 추출, 위험도 진단 알고리즘을 구현했습니다.',
    category: 'side',
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'h.soohyeon02@gmail.com', href: 'mailto:h.soohyeon02@gmail.com', icon: 'email' },
  { label: 'github.com/Soohyeon02', href: 'https://github.com/Soohyeon02', icon: 'github' },
  { label: 'velog.io/@soohyeon02', href: 'https://velog.io/@soohyeon02/posts', icon: 'velog' },
]
