"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import Image from "next/image";

export default function CompanySection() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const content = {
    zh: {
      title: "公司介绍",
      subtitle: "长春知行合一动漫有限公司",
      description:
        "知行合一动漫坐落于长春市高新区，是一家全流程的影视动漫创作公司，也是由bilibili参股在东北地区唯一一家动画公司。现有制作团队规模超过300人，年制作量超过1300分钟。",
      stats: [
        { label: "团队规模", value: "300+", unit: "人" },
        { label: "年制作量", value: "1300+", unit: "分钟" },
        { label: "同时项目", value: "6-7", unit: "部" },
        { label: "分部城市", value: "8", unit: "个" },
      ],
      businessTitle: "核心业务",
      features: [
        {
          title: "影视动画产品制作板块",
          desc: "影视动画创作/IP孵化/动漫衍生品发行 负责B站/腾讯视频等多个项目的产能制作；每年涉及到的项目超过10部以上，主要承制项目3部",
          image: "/images/img_003.jpg",
          number: "01",
        },
        {
          title: "职业教育产教融合服务板块",
          desc: "与职业教育学校合作产业学院，通过教学练考等手段让学生掌握专业技能，最终全方位、一体化解决职教学生实际就业问题",
          image: "/images/img_004.jpg",
          number: "02",
        },
        {
          title: "行业云技术服务板块",
          desc: "主营业务由云端职业教育系统、云端图形工作站解决方案、数字影像业务、制片管理三个板块组成",
          image: "/images/img_005.jpg",
          number: "03",
        },
        {
          title: "数字文创产品创作板块",
          desc: "数字经济与实体经济深度融合，数字资产与实物资产孪生；重塑自我形象和身份体系，数字形象映射自我认知。与山东广电合作构建数字城镇；与长影合作打造主旋律动漫电影",
          image: "/images/img_006.jpg",
          number: "04",
        },
      ],
    },
    ja: {
      title: "会社概要",
      subtitle: "長春知行合一アニメ有限会社",
      description:
        "知行合一アニメは長春市高新区に位置し、総合的な映像アニメ制作会社です。bilibiliが出資する東北地区唯一のアニメ会社で、300人以上の制作チームを擁し、年間1300分以上の制作を行っています。",
      stats: [
        { label: "チーム規模", value: "300+", unit: "人" },
        { label: "年間制作量", value: "1300+", unit: "分" },
        { label: "同時プロジェクト", value: "6-7", unit: "作品" },
        { label: "支社都市", value: "8", unit: "都市" },
      ],
      businessTitle: "コアビジネス",
      features: [
        {
          title: "映像アニメ製品制作板",
          desc: "映像アニメ創作/IP孵化/アニメ派生品発行 bilibili/Tencent Video複数プロジェクト制作；年間10作品以上、主要制作3作品",
          image: "/images/img_003.jpg",
          number: "01",
        },
        {
          title: "職業教育産学融合サービス板",
          desc: "職業教育学校と産業学院を協力し、教学練考を通じて学生の専門技能を習得、就職問題を全面的に解決",
          image: "/images/img_004.jpg",
          number: "02",
        },
        {
          title: "業界クラウド技術サービス板",
          desc: "クラウド職業教育システム、クラウドグラフィックワークステーション、デジタル映像、制作管理の3つの板で構成",
          image: "/images/img_005.jpg",
          number: "03",
        },
        {
          title: "デジタル文化製品創作板",
          desc: "デジタル経済と実体経済の深い融合、デジタル資産と実物資産の双子；山東広電と協力してデジタル町を構築；長影と協力して主旋律アニメ映画を制作",
          image: "/images/img_006.jpg",
          number: "04",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="company" className="py-32 bg-black relative overflow-hidden">
      {/* 动态背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -left-24 top-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent to-red-600"></div>
            <div className="absolute -right-24 top-1/2 w-20 h-0.5 bg-gradient-to-l from-transparent to-red-600"></div>

            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider relative">
              {t.title}
              <span className="absolute inset-0 blur-2xl opacity-30 text-red-600">
                {t.title}
              </span>
            </h2>
            <p className="text-2xl text-red-500 font-medium mb-6">{t.subtitle}</p>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-gray-300 text-xl leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center"
              style={{
                animation: `scaleIn 0.8s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="relative p-10 bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 group-hover:border-red-600 transition-all duration-500 transform group-hover:scale-105">
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-500"></div>

                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-base mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.unit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 核心业务标题 */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h3 className="text-5xl font-bold text-white mb-4 tracking-wider">
              {t.businessTitle}
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-900 mx-auto"></div>
          </div>
        </div>

        {/* 核心业务网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* 背景图片 */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500"></div>
              </div>

              {/* 编号 */}
              <div className="absolute top-8 right-8 z-10">
                <div className="text-8xl font-bold text-white/10 group-hover:text-red-600/30 transition-colors duration-500">
                  {feature.number}
                </div>
              </div>

              {/* 内容 */}
              <div className="relative h-full p-10 flex flex-col justify-end z-10">
                {/* 顶部装饰线 */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* 左侧装饰线 */}
                <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-red-600 to-transparent group-hover:h-full transition-all duration-700"></div>

                <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors duration-300 transform group-hover:-translate-y-2 transition-transform">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {feature.desc}
                </p>
              </div>

              {/* 边框光效 */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-shimmer"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
