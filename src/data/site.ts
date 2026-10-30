// Replace this sample profile with public information you are comfortable sharing.
export const site = {
  draft: true,
  name: '你的名字',
  nameEn: 'YOUR NAME',
  tagline: '在研究、实践与生活之间，持续探索。',
  intro:
    '你好，这里是我的个人空间。我会在这里整理学习与研究经历，记录完成的项目，也分享工作之外的观察与日常。',
  location: '你的城市 · 可选',
  availability: '欢迎交流研究、项目与新的想法',
  email: '',
  github: 'https://github.com/liuyouyan',
  scholar: '',
  resumeUrl: '',
} as const;

export const education = [
  {
    degree: '你的专业与学位',
    school: '你的学校',
    period: '入学年份 — 毕业年份',
    focus: '研究方向或感兴趣的主题',
    placeholder: true,
  },
];

export const experiences = [
  {
    title: '实习岗位名称',
    organization: '公司或机构名称',
    period: '开始时间 — 结束时间',
    kind: '实习',
    summary: '用一句话说明工作目标和你参与的方向。',
    highlights: [
      '写下你独立负责的工作，以及采用的方法。',
      '写下可以公开的结果；有数据时请注明统计口径。',
    ],
    placeholder: true,
  },
  {
    title: '科研助理／课题组成员',
    organization: '实验室或研究团队',
    period: '开始时间 — 结束时间',
    kind: '科研',
    summary: '概括研究问题、你的职责与研究阶段。',
    highlights: [
      '说明你设计的实验、构建的数据集或完成的分析。',
      '如有论文、海报或代码仓库，可在项目详情页加入链接。',
    ],
    placeholder: true,
  },
];

export const honors = [
  {
    title: '奖项名称',
    issuer: '颁发机构',
    year: '年份',
    description: '等级、排名或评选范围；仅填写可核实的信息。',
    placeholder: true,
  },
  {
    title: '奖项名称',
    issuer: '颁发机构',
    year: '年份',
    description: '可补充获奖对应的作品或研究主题。',
    placeholder: true,
  },
];
