# Bili-Live-Hub (BLH)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

![GitHub Repo stars](https://img.shields.io/github/stars/cnxiaozhiy/bili-live-hub?style=flat)
![GitHub forks](https://img.shields.io/github/forks/cnxiaozhiy/bili-live-hub?style=flat)
![GitHub license](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg?style=flat)

> **全自动、高可定制的哔哩哔哩直播集成控制中心**

## ✨ 项目简介

Bili-Live-Hub (BLH) 是一个基于 TypeScript/Node.js 开发的全自动哔哩哔哩直播管理平台，采用模块化设计，具备高度可维护性和可扩展性。通过 Docker 容器化部署，提供一站式的直播录制、监控、管理和自动化投稿解决方案。

## 🚀 核心特性

### 🔧 模块化架构

- **高度解耦设计**：各功能模块独立，易于维护和扩展
- **插件化系统**：支持自定义插件扩展功能
- **事件驱动**：项目采用事件驱动实现高度解耦
- **配置驱动**：通过配置文件轻松调整系统行为，支持热重载

### ⚡ 主动式监控

- **直播间状态实时监控**：7×24 小时不间断监控
- **主播动态追踪**：自动关注主播最新动态
- **系统健康检查**：实时监控硬盘容量与健康状态

### 🔄 全自动流程

- **智能录制**：直播考试自动开始/结束录制
  - [ ] 支持条件检查
- **自动投稿**：录制完成后自动处理并投稿到哔哩哔哩
- **异常恢复**：自动处理程序异常导致的幽灵文件等问题

### 🤖 多平台集成

- **机器人支持**：可接入多种通知/互动机器人
- **消息推送**：支持 Telegram、QQ、微信等平台

## 📋 功能列表

### 核心功能

- ✅ **全自动录制+投稿**
- ✅ **全自动直播间监控/管理**
- ✅ **全自动主播动态监控**
- ✅ **全自动硬盘容量/健康状态监控**
- ✅ **全自动容错处理**
  - 异常退出恢复
  - 幽灵录制文件处理
  - 断流重连机制
- ✨ **多账号支持**
  - 支持多个账号登陆
  - 自定义投稿账号

### 扩展功能

- 🤖 **机器人接入**
  - BiliBili Dynamic Bot
  - Telegram Bot
  - QQ Bot
- 🔌 **插件系统**
  - 哔哩哔哩每日任务插件
  - 自定义插件支持
  - 第三方插件市场

## 🏗️ 技术栈

- **运行时**: Node.js (LTS 版本)
- **语言**: TypeScript
- **容器**: Docker & Docker Compose
- **数据库**: MySQL / PostgreSQL (后续支持)
- **消息队列**: Redis (后续支持)

## 📦 快速开始

### 环境要求

- Node.js 16+ 或 Docker
- FFmpeg (视频处理)
- 至少 50GB 可用磁盘空间

### Docker 部署

```bash
# 目前位于内测阶段
```

### 手动部署

```bash
# 安装依赖
npm install

# 编译
npm run build

# 配置
vim config/app.json
# vim config/*.json

# 启动服务
node dist/app.js
```

## ⚙️ 配置说明

📖 [查看详细配置文档](docs/config/README.md)

## 🔌 插件系统（开发中）

### 内置插件

- **DailyTaskPlugin**: 哔哩哔哩每日任务自动化

### 开发插件

```typescript
import { BLHPlugin, PluginContext } from "bili-live-hub";

export class MyCustomPlugin implements BLHPlugin {
  name = "MyCustomPlugin";

  async initialize(ctx: PluginContext): Promise<void> {}
}
```

## 🌱 参与贡献

我们欢迎所有形式的贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何参与项目开发。

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 CC-BY-NC 4.0 许可证，禁止一切商业使用 - 查看 [LICENSE](LICENSE) 文件了解详情。

## ⚠️ 免责声明

本项目仅供学习和研究使用，请遵守哔哩哔哩相关用户协议，不得用于商业用途或侵犯他人权益。使用本软件产生的一切后果由使用者承担。

## 📞 支持与交流

- 📧 邮箱：admin@xznet.tech
- 💬 Discord：[加入社区](https://discord.gg/YwvRgfsb)
- 💬 QQ Group：[加入群聊](https://qm.qq.com/q/P3hYNxchSs)
- 📖 文档：[在线文档](docs/README.md)

## 🎯 路线图

- [ ] 完成幽灵文件恢复功能
- [ ] 插件控制器开发
- [ ] 插件市场开发
- [ ] Web 控制面板开发
- [ ] 多用户支持
- [ ] 云存储集成
- [ ] AI 集成

---

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！**
