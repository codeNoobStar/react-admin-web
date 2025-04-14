
import { SystemSettingType } from './interface';

/**
 * 默认系统设置对象，包含了应用的各种默认配置信息。
 * 
 * @type {SystemSettingType}
 * @property {string} primaryColor - 应用的主题色，采用 RGB 格式表示。
 * @property {string} filterType - 过滤器类型，这里默认设置为 'light'。
 * @property {string} showFormType - 表单展示类型，默认以模态框（'modal'）形式展示。
 * @property {boolean} showKeepAliveTab - 是否显示可保持活跃状态的标签页，默认开启。
 * @property {string} title - 应用的标题，显示在页面头部等位置。
 * @property {number} headerHeight - 页面头部的高度，单位为像素。
 * @property {number} slideWidth - 侧边栏展开时的宽度，单位为像素。
 * @property {number} collapsedSlideWidth - 侧边栏折叠时的宽度，单位为像素。
 * @property {number} mobileMargin - 移动端页面的边距，单位为像素。
 * @property {boolean} showWatermark - 是否显示水印，默认开启。
 * @property {string} watermarkPos - 水印的位置，默认显示在内容区域（'content'）。
 * @property {Array<{ key: string; name: string }>} languages - 支持的语言列表，每个语言对象包含键和名称。
 * @property {string} defaultLang - 默认语言，这里默认设置为中文（'zh'）。
 */
export const defaultSetting = {
  // 应用的主题色，采用 RGB 格式
  "primaryColor": "rgb(24,144,255)",
  // 过滤器类型，默认为 'light'
  "filterType": "light",
  // 表单展示类型，默认为模态框
  "showFormType": "modal",
  // 是否显示可保持活跃状态的标签页，默认开启
  "showKeepAliveTab": true,
  // 应用的标题
  "title": "fluxy-admin",
  // 页面头部的高度，单位为像素
  "headerHeight": 80,
  // 侧边栏展开时的宽度，单位为像素
  "slideWidth": 240,
  // 侧边栏折叠时的宽度，单位为像素
  "collapsedSlideWidth": 112,
  // 移动端页面的边距，单位为像素
  "mobileMargin": 16,
  // 是否显示水印，默认开启
  "showWatermark": true,
  // 水印的位置，默认显示在内容区域
  "watermarkPos": "content",
  // 支持的语言列表，每个语言对象包含键和名称
  "languages": [
    {
      // 语言的键，用于内部标识
      "key": "zh",
      // 语言的名称，用于显示给用户
      "name": "中文"
    },
    {
      // 语言的键，用于内部标识
      "key": "en",
      // 语言的名称，用于显示给用户
      "name": "English"
    }
  ],
  // 默认语言，这里默认设置为中文
  "defaultLang": "zh"
} as SystemSettingType;
