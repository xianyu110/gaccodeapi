# GacCode API - AI 中转站

> 全网底价，打通所有主流 AI —— 1.2元人民币 = 1美元额度

## 项目简介

GacCode API 是一个面向开发者的 AI 接口中转服务落地页，完全兼容 OpenAI / Claude Code 官方接口格式，支持微信、支付宝等国内主流支付方式，无需外币卡即可使用全球顶级 AI 模型。

## 页面预览

- 顶部固定导航栏（Logo · 锚点导航 · 状态徽章）
- Hero 区域：左侧文案 + 右侧仿 macOS 代码窗口
- 核心优势：6 张特性卡片（3列网格）
- 价格对比表：官方直充 vs GacCode API
- 快速接入：三步横向流程
- 支持模型：Anthropic / OpenAI / Google 三列分组
- CTA 行动召唤区 + 企业客服二维码
- 响应式布局，适配桌面 / 平板 / 移动端

## 技术栈

| 技术 | 说明 |
|------|------|
| HTML5 | 语义化结构 |
| CSS3 | 自定义属性、Grid/Flexbox、动画 |
| JavaScript | 原生 ES6+，无依赖 |

## 文件结构

```
gaccodeapi/
├── index.html   # 主页面
├── styles.css   # 样式表
├── script.js    # 交互逻辑
└── README.md    # 项目说明
```

## 快速接入示例

```js
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-xxxxxx...',
  baseURL: 'https://gacodeapi.com/v1'
});

const response = await client.chat.completions.create({
  model: 'claude-opus-4-5',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);
```

## 支持模型

| 厂商 | 模型 |
|------|------|
| Anthropic | claude-opus-4-5, claude-sonnet-4-5, claude-haiku-4-5, claude-3-opus, claude-3-sonnet |
| OpenAI | gpt-4o, gpt-4o-mini, gpt-4-turbo, gpt-3.5-turbo, o1 |
| Google | gemini-2.0-flash, gemini-1.5-pro, gemini-1.5-flash |

## 价格对比

| 对比项目 | 官方直充 | GacCode API |
|----------|----------|-------------|
| 每 $1 额度成本 | ¥7.20+ | **¥1.20** |
| 支付方式 | 外币信用卡 | **微信 / 支付宝** |
| 接口格式 | 官方格式 | **完全兼容** |
| 服务保障 | 无额外保障 | **专属客服** |
| 最低充值 | $5（≈¥36） | **¥1 起充** |

## 联系我们

扫描页面内企业客服二维码，微信联系，秒速响应。

---

© 2025 GacCode API. All rights reserved.
