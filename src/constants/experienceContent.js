// src/constants/experienceContent.js
export const content = {
    ko: {
      title: "경력",
      guide: "회사 이름을 클릭하면 내역이 나옵니다",
      sections: {
        overview: "개요",
        responsibilities: "담당",
        tech: "기술"
      },
      companies: [
        {
          name: "십일번가",
          role: "백엔드 개발",
          period: "2020.08 ~ 재직중",
          projects: [
            {
              title: "십일번가 콘텐츠 필진 개발",
              overview: "십일번가의 콘텐츠 제작 필진 플랫폼 개발 및 운영",
              responsibilities: [
                "기존 십일번가 프로젝트 분리 → MSA로 전환해 버전 관리와 업데이트 효율성 확보",
                "Java 8에서 Spring Boot 3.0 & Java 17 버전으로 업그레이드",
                "의존성이 높은 소스 코드를 분석하여 리팩터링 진행",
                "팀 내 스터디를 활성화해 Kotlin 전환 추진"
              ],
              techStack: "Java 17, Spring Boot 3.0, Kotlin, JSP"
            },
            {
              title: "십일번가 카탈로그 패키지",
              overview: "십일번가에서 관리하는 카탈로그 패키지 관리 기능을 운영자들이 사용하기 편리하도록 개선",
              responsibilities: [
                "쿼리 호출 기능 이관: BackOffice 프로젝트에 내장된 쿼리 호출 기능을 자체 관리 API 서버로 이전하여 유지 보수 및 관리 효율성 향상",
                "운영자 UI/UX 개선: ExtJS Grid 적용으로 운영자의 사용 편의성 증대",
                "메뉴 구조 개선: 드롭다운 메뉴를 트리 메뉴로 전환해 UI/UX를 개선하고 사용 편의성 증대",
                "대용량 엑셀 기능 구현: Apache POI를 활용해 대용량 엑셀 업로드/다운로드 기능 개발",
                "팝업 구조 간소화: 3중 팝업을 1중 팝업으로 축소해 운영자 작업 정확도 향상 및 오류 건수 33% 감소"
              ],
              techStack: "Java 7, Spring Boot, JSP, iBatis, MyBatis"
            },
            {
              title: "십일번가 상품 카탈로그 매칭",
              overview: "십일번가의 상품과 카탈로그의 매칭률 개선 프로젝트로, 상품이 등록 시 카탈로그 매칭을 자동화 하는 프로젝트",
              responsibilities: [
                "이미지 pHash 매칭 구현: Python ImageHash 기능을 활용해 상품·카탈로그 이미지의 pHash를 추출하고 동일 pHash 매칭 로직 구현",
                "Python API 서버 구축: Java에서 Python 호출 시 발생하는 인터프리터 지연 문제를 해소하기 위해 Python API 서버 도입",
                "소스 이관: 11번가 팀 내 배치에서 직접 호출하던 Python 코드를 Python API 서버로 전부 이전하여 효율성 증대",
                "매칭 정확도 향상: 상품과 카탈로그 명의 PK, SUBK 활용으로 매칭 정확도를 89%에서 98%까지 개선"
              ],
              techStack: "Java 7, Spring Boot, MyBatis, Spring Batch, Python, Django, Kafka"
            },
            {
              title: "십일번가 브랜드 개선",
              overview: "십일번가의 브랜드 데이터 및 브랜드 관리를 위한 신규 개념 도입 및 신규 기능 추가",
              responsibilities: [
                "브랜드 재정비: 2017년 이후 방치된 브랜드 데이터를 재정비하기 위해 위키를 재작성하고 관련 프로세스를 개선",
                "브랜드 개념 재정비: 무분별하게 등록된 브랜드 데이터를 '메이커'와 '브랜드'로 구분해 체계화하고, 전체 관리 프로세스를 개선",
                "중복 브랜드 정제: Python의 g2p 라이브러리를 활용해 영문·한글 중복 브랜드 개수를 58건에서 12건으로 대폭 축소",
                "브랜드 관리 프로세스 개선: 타 팀에서 개별적으로 관리하던 브랜드 정보를 분리·통합하고, 브랜드 정보 수정 및 등록 프로세스를 체계화",
                "테이블 구조 개편: 브랜드 테이블을 한글·영어·일반 브랜드명으로 구분하여 중복 등록을 방지하고, 브랜드 동의어·셀러 테이블을 신설해 관리 효율성 증대",
                "브랜드 매칭률 향상: 카탈로그 이름을 음절 단위로 분석해 브랜드 매칭률을 22%에서 71%로 개선",
                "브랜드 검색 엔진 구축: ElasticSearch를 활용해 비슷한 영문명이나 동의어로 검색해도 정확한 브랜드 정보를 찾을 수 있는 검색 기능 구현",
                "브랜드 검색 엔진 강화: 우아 럭스(신규 서비스) 도입으로 브랜드 호출량이 크게 증가함에 따라, 대용량 트래픽에 대응하기 위해 배치 처리(벌크 색인, 비동기 처리)를 도입하고 쿼리 성능 튜닝을 진행"
              ],
              techStack: "Java 7, Spring Boot, MyBatis, Spring Batch, Python, Django, Kafka, Elasticsearch"
            }
          ]
        },
        {
          name: "크로센트",
          role: "백엔드 개발 및 클라우드 연구",
          period: "2017.10 ~ 2020.08",
          projects: [
            {
              title: "플랫폼 전환 및 운영",
              overview: "Cloud Foundry 기반 플랫폼을 Kubernetes 기반으로 전환하고 안정적으로 운영",
              responsibilities: [
                "Kubernetes 개발, 설치, 운영 연구 및 가이드 작성",
                "Cloud Foundry와 Kubernetes 혼용 플랫폼 개발",
                "Kubernetes 전용 설치 자동화 프로그램 개발"
              ],
              techStack: "Cloud Foundry, Kubernetes, Ansible, Spring Boot, Golang"
            },
            {
              title: "자동화 개발",
              overview: "Terraform을 활용하여 클라우드 플랫폼 설치 과정을 자동화",
              responsibilities: [
                "Ansible과 Terraform의 비교 분석 연구",
                "Terraform 사용방법 연구 및 가이드 작성",
                "Terraform을 이용하여 플랫폼 설치 자동화 프로그램 개발"
              ],
              techStack: "Terraform, Docker, Ansible"
            },
            {
              title: "CI/CD 파이프라인 구현",
              overview: "S2I(Source-to-Image) 방식을 통해 소스 코드 push만으로 Kubernetes에 배포되는 자동화 시스템 구축",
              responsibilities: [
                "Docker File 사용방법 연구 및 가이드 작성",
                "Jenkins 설치 및 Jenkins File 사용방법 연구 및 가이드 작성",
                "S2I(Source-to-Image) 이미지 생성 후 Git Hook을 이용한 Kubernetes 배포 자동화 구축"
              ],
              techStack: "Jenkins, Docker, Spring Boot"
            },
            {
              title: "컨테이너 이미지 보안",
              overview: "Harbor를 활용해 자체 컨테이너 국가보안 연구소인 이미지 보안 검사 시스템 개발",
              responsibilities: [
                "Harbor 설치 및 가이드 작성",
                "Jenkins를 이용한 컨테이너 이미지 보안 검사 시스템 파이프라인 구성",
                "이미지 보안 검사 시스템 소스를 분석 및 파악 후 각 플랫폼 내제화"
              ],
              techStack: "Jenkins, Docker, Spring Boot"
            },
            {
              title: "금융권 커스터마이징",
              overview: "국민은행, 부산은행 등 금융권 고객사의 요구사항에 맞춰 플랫폼을 커스터마이징하고 운영",
              responsibilities: [
                "고객사 별 플랫폼 커스터마이징 개발",
                "고객사 별 CLI 커스터마이징",
                "MSA방식 플랫폼 리펙터링 및 운영"
              ],
              techStack: "Jenkins, Docker, Spring Boot, Golang"
            }
          ]
        }
      ],
      education: {
        title: "대외 경험",
        activities: [
          "Kubernetes 스터디 강의: 현직 개발자 11명 대상 진행",
          "비전공자 출신 개발자 취업하기 스터디 강의: 총 8명 대상 진행",
          "Kafka 사내 스터디: 총 4명 참여",
          "AWS 클라우드 활용 강의 수료",
          "쿠버네티스 운영 강의 수료"
        ]
      }
    },
    en: {
        title: "Experience",
        guide: "Click company names to view details",
        sections: {
            overview: "Overview",
            responsibilities: "Responsibilities",
            tech: "Technologies"
          },
        companies: [
          {
            name: "11st",
            role: "Backend Development",
            period: "Aug 2020 - Present",
            projects: [
              {
                title: "11st Content Creator Platform",
                overview: "Development and operation of content creator platform for 11st",
                responsibilities: [
                  "Separated existing project and transformed to MSA for improved version control and update efficiency",
                  "Upgraded from Java 8 to Spring Boot 3.0 & Java 17",
                  "Analyzed and refactored highly dependent source code",
                  "Promoted Kotlin transition through team study"
                ],
                techStack: "Java 17, Spring Boot 3.0, Kotlin, JSP"
              },
              {
                title: "11st Catalog Package",
                overview: "Improved catalog package management features for operator convenience",
                responsibilities: [
                  "Query call feature migration: Improved maintenance efficiency by migrating embedded query calls to dedicated API server",
                  "Enhanced operator UI/UX: Improved usability by implementing ExtJS Grid",
                  "Menu structure improvement: Enhanced UI/UX by converting dropdown to tree menu structure",
                  "Large-scale Excel functionality: Developed bulk Excel upload/download using Apache POI",
                  "Simplified popup structure: Reduced error rate by 33% through popup structure optimization"
                ],
                techStack: "Java 7, Spring Boot, JSP, iBatis, MyBatis"
              },
              {
                title: "11st Product Catalog Matching",
                overview: "Project to improve product-catalog matching rate and automate matching process for new product registrations",
                responsibilities: [
                  "Image pHash matching implementation: Developed matching logic using Python ImageHash for product and catalog images",
                  "Python API server implementation: Introduced dedicated Python API server to resolve interpreter delay issues",
                  "Source migration: Improved efficiency by migrating Python code to API server",
                  "Matching accuracy improvement: Enhanced matching accuracy from 89% to 98% using PK, SUBK of product and catalog names"
                ],
                techStack: "Java 7, Spring Boot, MyBatis, Spring Batch, Python, Django, Kafka"
              },
              {
                title: "11st Brand System Enhancement",
                overview: "Introduction of new concepts and features for brand data management and brand system enhancement",
                responsibilities: [
                  "Brand reorganization: Rewrote wiki and improved processes for brand data management",
                  "Brand concept refinement: Systematized brand data by separating makers and brands",
                  "Duplicate brand cleanup: Reduced duplicate brands from 58 to 12 using Python g2p library",
                  "Brand management process improvement: Integrated scattered brand information and systematized modification process",
                  "Table structure reform: Prevented duplicates through language-specific brand tables and improved efficiency with new synonym and seller tables",
                  "Brand matching rate improvement: Enhanced matching rate from 22% to 71% through syllable analysis",
                  "Brand search engine implementation: Developed ElasticSearch-based search functionality for similar names and synonyms",
                  "Search engine enhancement: Implemented batch processing and query optimization for high-traffic handling with new luxury service introduction"
                ],
                techStack: "Java 7, Spring Boot, MyBatis, Spring Batch, Python, Django, Kafka, Elasticsearch"
              }
            ]
          },
          {
            name: "Crossent",
            role: "Backend Development & Cloud Research",
            period: "Oct 2017 - Aug 2020",
            projects: [
              {
                title: "Platform Migration & Operation",
                overview: "Successfully migrated Cloud Foundry-based platform to Kubernetes and ensured stable operation",
                responsibilities: [
                  "Kubernetes development, installation, operation research and guide creation",
                  "Development of hybrid platform using Cloud Foundry and Kubernetes",
                  "Development of Kubernetes-specific installation automation program"
                ],
                techStack: "Cloud Foundry, Kubernetes, Ansible, Spring Boot, Golang"
              },
              {
                title: "Automation Development",
                overview: "Automated cloud platform installation process using Terraform",
                responsibilities: [
                  "Comparative analysis research between Ansible and Terraform",
                  "Terraform usage research and guide documentation",
                  "Development of platform installation automation program using Terraform"
                ],
                techStack: "Terraform, Docker, Ansible"
              },
              {
                title: "CI/CD Pipeline Implementation",
                overview: "Built automated deployment system using S2I (Source-to-Image) for Kubernetes deployment through code push",
                responsibilities: [
                  "Docker File usage research and guide documentation",
                  "Jenkins installation and Jenkins File usage research and guide creation",
                  "Kubernetes deployment automation using S2I image generation and Git Hook"
                ],
                techStack: "Jenkins, Docker, Spring Boot"
              },
              {
                title: "Container Image Security",
                overview: "Developed container image security inspection system using Harbor",
                responsibilities: [
                  "Harbor installation and guide documentation",
                  "Container image security inspection system pipeline configuration using Jenkins",
                  "Analysis and integration of image security inspection system for each platform"
                ],
                techStack: "Jenkins, Docker, Spring Boot"
              },
              {
                title: "Financial Sector Customization",
                overview: "Customized and operated platform for financial sector clients including KB Bank and Busan Bank",
                responsibilities: [
                  "Client-specific platform customization development",
                  "Client-specific CLI customization",
                  "MSA-based platform refactoring and operation"
                ],
                techStack: "Jenkins, Docker, Spring Boot, Golang"
              }
            ]
          }
        ],
        education: {
          title: "Additional Experience",
          activities: [
            "Kubernetes Study Lecture: Conducted for 11 professional developers",
            "Non-CS Major Developer Career Study: Conducted for 8 participants",
            "In-house Kafka Study: 4 participants",
            "AWS Cloud Utilization Course Completion",
            "Kubernetes Operations Course Completion"
          ]
        }
      }
    };