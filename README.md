# Wise Wallet 프로젝트

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [프로젝트 설계](#프로젝트-설계)
- [폴더 구조](#폴더-구조)
- [주요 기능](#주요-기능)
- [핵심 고민 & 해결 방법](#핵심-고민--해결-방법)
- [프로젝트 실행 방법](#프로젝트-실행-방법)
- [배포 링크](#배포-링크)
- [회고](#회고)
- [향후 개선 사항](#향후-개선-사항)

## 프로젝트 소개

Wise Wallet은 사용자 친화적인 UI와 직관적인 입력 방식을 갖춘 개인용 가계부 웹 애플리케이션입니다.
수입/지출 내역을 손쉽게 입력하고, 월별 캘린더 및 카테고리 기반 통계를 통해 사용자의 소비 습관을 시각적으로 파악할 수 있도록 설계되었습니다.

모든 화면은 React + Vite 기반으로 구성되었으며, 상태 흐름 및 UI 상호작용을 명확하게 정의하는 데 초점을 맞췄습니다.

---

## 기술 스택

| 항목           | 사용 기술                                                      |
| -------------- | -------------------------------------------------------------- |
| 프레임워크     | React (Vite)                                                   |
| 스타일링       | Emotion                                                        |
| 문서/설계 도구 | Notion, Figma                                                  |
| 목표           | 프로젝트 설계 연습, React 랜더링 사이클과 상태 관리 능숙해지기 |

---

## 프로젝트 설계

이전 프로젝트에서 경험한 상태 흐름의 혼란과 레이어 책임 분산 문제를 해결하기 위해  
이번에는 사전에 구조화된 설계를 바탕으로 기능을 구축해나가고자 합니다.

- 상태 흐름을 사전에 정리하여 상태 관리 오류 방지
- 레이어별 책임 분리로 컴포넌트 유지보수성 강화

자세한 설계 내용은 [프로젝트 위키](https://github.com/wan0514/fe-bye2money/wiki)에서 확인할 수 있습니다.

---

## 폴더 구조

> 도메인 중심 구조를 채택했습니다. 이유는 다음과 같습니다:

- 각 기능(record, form, calendar, stats, header)이 명확한 책임 단위로 구분됩니다.
- 입력 폼(form)은 현재 record 페이지에서만 사용되지만, 기능적으로 독립된 단위로 판단하여 별도로 분리하였습니다.
- 재사용 가능성이 높은 컴포넌트들(form, header, modal)은 향후 확장성과 유연성을 고려하여 독립적으로 구성했습니다.
- 각 도메인 내부의 로직(hooks, utils)은 해당 도메인 내에서 자급자족할 수 있도록 자기완결적인 구조로 설계했습니다.

```
src/
├── app/                  # 앱의 진입점, 라우터, 테마 등 공통 설정
├── features/
│   ├── record/           # 수입/지출 내역 관리 도메인
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│
│   ├── form/             # 입력 폼 (독립된 기능 책임)
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│
│   ├── calendar/         # 달력 기능 도메인
│   ├── stats/            # 통계 기능 도메인
│   └── header/           # 헤더 도메인
│
├── shared/               # 공통 버튼, 모달, 훅 등 여러 도메인에서 사용하는 유틸
├── layouts/              # 페이지 전체를 감싸는 레이아웃 컴포넌트
├── pages/                # 라우트 진입점 컴포넌트
└── modal/                # 전역 모달 관리

```

자세한 설계 내용은 [폴더 구조 설계 위키](https://github.com/wan0514/fe-bye2money/wiki/Folder-Structure)에서 확인할 수 있습니다.

---

## 주요 기능

---

## 핵심 고민 & 해결 방법

---

## 프로젝트 실행 방법

---

## 회고

---

## 향후 개선 사항
