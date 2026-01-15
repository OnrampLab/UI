# OnRamp Lab UI 組件庫快速參考指南

> **給開發團隊的行動清單**
> 
> 本文檔提供快速、可操作的建議，幫助團隊開始現代化之旅。

---

## 🚨 立即行動 (本周內)

### 1. 評估當前狀態

```bash
# 檢查安全漏洞
npm audit

# 檢查依賴過時情況
npm outdated

# 測試可訪問性
npx axe http://localhost:3000
```

### 2. 建立現代化分支

```bash
git checkout -b feature/modernization
git checkout -b upgrade/react-19
git checkout -b feature/typescript-migration
git checkout -b feature/accessibility
```

---

## 📋 第一步：升級 React (1-2 週)

### 升級腳本

```bash
# 1. 卸載舊版本
npm uninstall react react-dom

# 2. 安裝最新版本
npm install react@latest react-dom@latest

# 3. 安裝類型定義
npm install --save-dev @types/react @types/react-dom

# 4. 升級 Babel
npm install --save-dev @babel/core @babel/preset-react @babel/preset-env
```

### 代碼遷移清單

| 舊語法 (React 0.14) | 新語法 (React 19) |
|-------------------|------------------|
| `React.createClass()` | 函數組件 + `useState` |
| `getInitialState()` | `useState()` hook |
| `getDefaultProps()` | 函數默認參數 |
| `this.props` | 函數參數 `props` |
| `this.state` | `useState()` 返回值 |
| `componentDidMount()` | `useEffect()` |
| `componentWillUnmount()` | `useEffect()` cleanup |

### 快速遷移示例

```javascript
// ❌ 舊代碼
var ui = ui || {};
ui.Button = React.createClass({
  getInitialState: function() {
    return { loading: false };
  },
  handleClick: function() {
    this.setState({ loading: true });
  },
  render: function() {
    return <button onClick={this.handleClick}>Click</button>;
  }
});

// ✅ 新代碼
import { useState, useCallback } from 'react';

export const Button = () => {
  const [loading, setLoading] = useState(false);
  
  const handleClick = useCallback(() => {
    setLoading(true);
  }, []);

  return <button onClick={handleClick}>Click</button>;
};
```

---

## 🎨 第二步：引入 TypeScript (1 週)

### 初始化配置

```bash
# 安裝 TypeScript
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# 初始化 tsconfig.json
npx tsc --init
```

### `tsconfig.json` 推薦配置

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build", "dist"]
}
```

### 遷移策略

1. **允許 `.js` 和 `.tsx` 共存**
2. **新組件使用 TypeScript**
3. **逐步重構舊組件**
4. **使用 `// @ts-check` 過渡**

---

## ♿ 第三步：可訪問性實施 (持續)

### 快速檢查清單

```markdown
- [ ] 所有互動元素可鍵盤訪問
- [ ] 表單輸入有關聯的 label
- [ ] 圖片有 alt 文本
- [ ] 顏色對比度符合 WCAG AA (4.5:1)
- [ ] 焦點指示器清晰可見
- [ ] ARIA 屬性正確使用
```

### 工具推薦

```bash
# 安裝可訪問性檢查工具
npm install --save-dev @axe-core/react eslint-plugin-jsx-a11y

# VS Code 擴展
- axe Accessibility Linter
- Web Accessibility Insights
```

### 可訪問組件模板

```typescript
export const AccessibleButton = ({ 
  children, 
  onClick, 
  disabled = false,
  ariaLabel,
  ...props 
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className="button"
      {...props}
    >
      {children}
    </button>
  );
};
```

---

## 🎯 組件重構優先級

### 高優先級 (立即開始)

1. **Button** - 使用最頻繁
2. **Input** - 核心功能
3. **Form** - 可訪問性關鍵

### 中優先級 (1 個月內)

4. **Table** - 複雜交互
5. **Modal** - 可訪問性重點
6. **Navigation** - 用戶體驗核心

### 低優先級 (2 個月內)

7. **Uploader** - 特殊功能
8. **HtmlEditor** - 第三方集成

---

## 📊 進度追蹤

### 每週檢查點

```
週 1: React 升級完成 ✅
週 2: TypeScript 配置完成 ✅
週 3: Button 組件重構完成 ✅
週 4: 可訪問性測試通過 ✅
週 5: Input 組件重構完成 ✅
週 6: Storybook 設置完成 ✅
週 7: 文檔網站上線 ✅
週 8: v1.0 發布 🎉
```

---

## 💬 團隊溝通建議

### Standup 更新模板

```markdown
## 今天完成
- [ ] 組件 X 升級到 TypeScript
- [ ] 修復可訪問性問題 Y

## 遇到的障礙
- [ ] 需要討論組件 Z 的 API 設計

## 明天計劃
- [ ] 完成組件 W 的重構
```

### Pull Request 模板

```markdown
## 變更類型
- [ ] Bug 修復
- [ ] 新功能
- [ ] 重構
- [ ] 文檔更新

## 組件
- [ ] Button
- [ ] Input
- [ ] 其他: ___

## 測試
- [ ] 單元測試通過
- [ ] 可訪問性測試通過
- [ ] 手動測試完成

## 截圖
(添加前後對比截圖)

## 相關 Issue
Closes #(issue number)
```

---

## 🔗 快速鏈接

- [完整分析報告](./UI_UX_TRENDS_2026.md)
- [React 19 升級指南](https://react.dev/learn/start-a-new-react-project)
- [TypeScript 手冊](https://www.typescriptlang.org/docs/handbook/intro.html)
- [WCAG 2.1 快速參考](https://www.w3.org/WAI/WCAG21/quickref/)

---

**最後更新**：2025-01-15  
**下次審查**：每週五 Standup
